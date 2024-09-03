# -*- coding: utf-8 -*-

"""
负责处理插件的用户界面逻辑，例如添加和删除 JavaScript 文件。
"""

from conf import settings
from javax.swing import JPanel, BoxLayout, JButton, DefaultListModel, JList, JScrollPane, JFileChooser, JOptionPane
from javax.swing.filechooser import FileNameExtensionFilter


class UIComponent:
    def __init__(self, extender):
        self.extender = extender


    def create_main_panel(self):
        """
        标签出口
        :return:
        """
        panel = JPanel()
        panel.setLayout(BoxLayout(panel, BoxLayout.Y_AXIS))

        button_panel = JPanel()
        button_panel.setLayout(BoxLayout(button_panel, BoxLayout.X_AXIS))

        btn_add_js = JButton("Add JS File", actionPerformed=self.add_js_file)
        button_panel.add(btn_add_js)

        btn_delete_js = JButton("Delete Selected JS File", actionPerformed=self.delete_js_file)
        button_panel.add(btn_delete_js)

        panel.add(button_panel)

        self.model = DefaultListModel()
        self.js_list = JList(self.model)
        scrollPane = JScrollPane(self.js_list)
        panel.add(scrollPane)

        return panel

    def add_js_file(self, event):
        """
        添加 js 文件按钮
        :param event:
        :return:
        """
        self.extender.js_handler.add_js_file(self.model)

    def delete_js_file(self, event):
        """
        删除 js 按钮
        :param event:
        :return:
        """
        self.extender.js_handler.delete_js_file(self.js_list, self.model)
