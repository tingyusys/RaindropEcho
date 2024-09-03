# -*- coding: utf-8 -*-

"""
处理显示在 Burp Repeater 中的自定义标签信息
"""

from javax.swing import JPanel, BoxLayout, JLabel
from burp import IMessageEditorTab


class CustomTab(IMessageEditorTab):
    def __init__(self, extender, controller, editable):
        self._extender = extender
        self._controller = controller
        self._editable = editable
        self._panel = JPanel()
        self._panel.setLayout(BoxLayout(self._panel, BoxLayout.Y_AXIS))

        self._panel.add(JLabel("Raindrop Echo - JS Encryption Plugin v1.0.0"))
        self._panel.add(JLabel("by: Listening to Rain and Falling Fish"))
        self._panel.add(JLabel("This is a plugin that allows Burp to flexibly install JS reverse engineering."))

        self._message = None

    def getTabCaption(self):
        return "123123"

    def getUiComponent(self):
        return self._panel

    def isEnabled(self, content, isRequest):
        return True

    def setMessage(self, content, isRequest):
        self._message = content

    def getMessage(self):
        return self._message

    def isModified(self):
        return False

    def getSelectedData(self):
        return None
