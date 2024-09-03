# -*- coding: utf-8 -*-

"""
负责创建上下文菜单以及显示关于插件的对话框
"""
from conf import settings
from javax.swing import JMenuItem, JOptionPane
import json


class MenuHandler:
    def __init__(self, extender):
        self.extender = extender

    def create_menu_items(self, invocation):
        """
        菜单出口
        :param invocation:
        :return:
        """
        menu_list = []
        menu_list.append(JMenuItem("Send to Raindrop-Echo", actionPerformed=lambda x: self.send_to_repeater(invocation)))
        menu_list.append(JMenuItem("About Raindrop Echo", actionPerformed=self.show_about_dialog))
        return menu_list

    def show_about_dialog(self, event):
        JOptionPane.showMessageDialog(None, settings.little_title)

    def send_to_repeater(self, invocation):
        """
        发送数据包到重放器---》核心功能
        :param invocation:
        :return:
        """
        self.extender._callbacks.printOutput("send_to_repeater is run ！！！")

        # 检查是否有导入的 JS 文件
        if not self.extender.js_handler.js_files:
            JOptionPane.showMessageDialog(None,
                                          "{}\n\n\n [+] No JS files have been imported. \n\n [+] Please import the corresponding JS decryption files!".format(
                                              settings.little_title))
            return

        # 获取选定的 HTTP 请求
        messageInfo = invocation.getSelectedMessages()[0]
        requestInfo = self.extender._helpers.analyzeRequest(messageInfo)
        http_service = messageInfo.getHttpService()
        host = http_service.getHost()
        path = requestInfo.getUrl().getPath()

        matched = False

        # 遍历已加载的 JS 文件，查找匹配的域名和路径
        for js_file, js_data in self.extender.js_handler.js_files.items():
            domain = js_data["domain"]
            js_path = js_data["path"]

            if str(domain) in str(host) and js_path in path:
                matched = True
                self.extender._callbacks.printOutput("Matched domain and path for Repeater: {}, {}".format(domain, js_path))

                # 获取请求体数据并解密
                request_body = messageInfo.getRequest()[requestInfo.getBodyOffset():].tostring().decode('utf-8')
                decrypted_data = self.extender.js_handler.get_default_json_from_js(js_file)

                if decrypted_data is None:
                    self.extender._callbacks.printError("Decryption failed. Sending original request to Repeater.")
                    return

                # 构建新的请求体
                decrypted_data = json.dumps(decrypted_data, ensure_ascii=False)
                new_body = decrypted_data.encode("utf-8")

                # 检查协议并转换为布尔值
                use_https = True if http_service.getProtocol().lower() == "https" else False

                headers = [header.encode('utf-8') if isinstance(header, unicode) else header for header in
                           requestInfo.getHeaders()]
                new_request = self.extender._helpers.buildHttpMessage(headers, new_body)

                # 发送到 Repeater
                self.extender._callbacks.sendToRepeater(
                    http_service.getHost(),  # 主机
                    http_service.getPort(),  # 端口
                    use_https,  # 是否使用 HTTPS
                    new_request,  # 请求数据
                    None  # Repeater 标签标题（可选）
                )
                self.extender._callbacks.printOutput("Sent decrypted request to Repeater.666")
                break
        else:
            # 如果没有找到匹配的域名和路径，弹出提示框
            unmatched_js_files = [js_file for js_file in self.extender.js_handler.js_files if not (
                    str(self.extender.js_handler.js_files[js_file]["domain"]) in str(host) and self.extender.js_handler.js_files[js_file]["path"] in path)]
            unmatched_js_files_text = "\n".join(unmatched_js_files)
            JOptionPane.showMessageDialog(None,
                                          "The following JS files do not match the request's domain and path:\n\n" + unmatched_js_files_text + "\n\nPlease ensure the correct JS decryption files are imported for the request.")
