# -*- coding: utf-8 -*-

"""
处理所有与 HTTP 消息和 JavaScript 加密功能相关的逻辑
"""

import subprocess
import json
import os
import tempfile
from collections import OrderedDict
from javax.swing import JMenuItem, JOptionPane


class HttpRequestHandler:
    def __init__(self, extender):
        self.extender = extender

    def process_http_message(self, toolFlag, messageIsRequest, messageInfo):
        """
        数据包处理出口
        :param toolFlag:
        :param messageIsRequest:
        :param messageInfo:
        :return:
        """
        if toolFlag in [self.extender._callbacks.TOOL_PROXY, self.extender._callbacks.TOOL_REPEATER]:
            if messageIsRequest:
                http_service = messageInfo.getHttpService()
                host = http_service.getHost()
                path = self.extender._helpers.analyzeRequest(messageInfo).getUrl().getPath()

                for js_file, js_data in self.extender.js_handler.js_files.items():
                    domain = js_data["domain"]
                    js_path = js_data["path"]

                    if domain == host and path.startswith(js_path):
                        self.extender._callbacks.printOutput("Matched domain and path: {}, {}".format(domain, js_path))

                        request_info = self.extender._helpers.analyzeRequest(messageInfo)
                        request_body_offset = request_info.getBodyOffset()
                        request_body_bytes = messageInfo.getRequest()[request_body_offset:]
                        request_body = request_body_bytes.tostring()

                        self.extender._callbacks.printOutput("\nrequest_body:\n" + request_body)

                        encrypted_data = self.extender.js_handler.call_js_encryption_function(js_file, request_body)

                        new_body = encrypted_data.encode("utf-8")
                        analyzedRequest = self.extender._helpers.analyzeRequest(messageInfo)
                        new_request = self.extender._helpers.buildHttpMessage(analyzedRequest.getHeaders(), new_body)
                        messageInfo.setRequest(new_request)

                        self.extender._callbacks.printOutput("Sent request to {}:{}".format(host, path))
                        break
