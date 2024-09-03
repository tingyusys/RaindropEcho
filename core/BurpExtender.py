# -*- coding: utf-8 -*-

"""
是核心扩展类，负责将所有模块连接起来，并将它们注册到 Burp Suite 中

"""
from libs.JSHandler.UsuallyJS import UsuallyJS
from conf import settings
from burp import IBurpExtender, IHttpListener, IContextMenuFactory, IMessageEditorTabFactory, ITab

from libs.UIHandler.CustomTab import CustomTab
from libs.UIHandler.MenuHandler import MenuHandler
from libs.UIHandler.UIComponent import UIComponent

from libs.HttpResReqHandler.HttpRequestHandler import HttpRequestHandler


class BurpExtender(IBurpExtender, IHttpListener, IContextMenuFactory, IMessageEditorTabFactory, ITab):
    def registerExtenderCallbacks(self, callbacks):
        self._callbacks = callbacks
        self._helpers = callbacks.getHelpers()

        # 初始化 UIHandler 组件和菜单处理器
        self.ui_component = UIComponent(self)
        self.menu_handler = MenuHandler(self)

        # 等待编写
        self.http_request_handler = HttpRequestHandler(self)
        # js 助手
        self.js_handler = UsuallyJS(self)

        # 设置插件名称
        self._callbacks.setExtensionName(settings.PluginName)

        # 注册 HTTP 监听器、上下文菜单工厂、消息编辑器标签工厂
        self._callbacks.registerHttpListener(self)
        self._callbacks.registerContextMenuFactory(self)
        self._callbacks.registerMessageEditorTabFactory(self)

        # 添加插件标签页到 Burp Suite
        self._callbacks.addSuiteTab(self)

        # 打印初始化信息到输出窗口
        self._callbacks.printOutput(settings.LOGO)

    def getTabCaption(self):
        return settings.PluginName

    def getUiComponent(self):
        """
        标签
        :return:
        """
        return self.ui_component.create_main_panel()

    def createMenuItems(self, invocation):
        """
        菜单
        :param invocation:
        :return:
        """
        return self.menu_handler.create_menu_items(invocation)

    def processHttpMessage(self, toolFlag, messageIsRequest, messageInfo):
        self.http_request_handler.process_http_message(toolFlag, messageIsRequest, messageInfo)

    def createNewInstance(self, controller, editable):
        # 实现 createNewInstance 方法，返回一个 IMessageEditorTab 的实现实例
        return CustomTab(self, controller, editable)
