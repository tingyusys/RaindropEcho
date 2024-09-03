# -*- coding: utf-8 -*-
import os
import subprocess
import tempfile
from collections import OrderedDict

from javax.swing.filechooser import FileNameExtensionFilter
from javax.swing import JFileChooser, JOptionPane
import json


class UsuallyJS:
    def __init__(self, extender):
        self.extender = extender
        self.js_files = {}

    def add_js_file(self, model):
        """
        加载js文件
        :return:
        """
        # 弹出文件选择器
        chooser = JFileChooser()
        chooser.setFileFilter(FileNameExtensionFilter("JavaScript Files", ["js"]))
        result = chooser.showOpenDialog(None)
        if result == JFileChooser.APPROVE_OPTION:
            selected_file = chooser.getSelectedFile().getAbsolutePath()

            # 获取域名和路径
            domain, path = self.get_domain_and_path_from_js(selected_file)

            # 组合显示文件路径、域名和路径
            display_text = "{}  get data success! --->>>  [domain: {}    path: {}]".format(selected_file, domain, path)

            # 检查是否已经存在相同的文件
            if selected_file in self.js_files:
                index = list(self.js_files.keys()).index(selected_file)
                model.setElementAt(display_text, index)
            else:
                self.js_files[selected_file] = {"domain": domain, "path": path}
                model.addElement(display_text)

            self.extender._callbacks.printOutput("Added/Updated JS file: {}".format(selected_file))

    def delete_js_file(self, js_list, model):
        """
        删除选中的 JS 文件
        :param event:
        :return:
        """
        selected_index = js_list.getSelectedIndex()

        if selected_index != -1:
            # 获取选中的文件路径
            selected_file = list(self.js_files.keys())[selected_index]

            # 从 js_files 字典中删除
            del self.js_files[selected_file]

            # 从列表模型中删除
            model.remove(selected_index)

            self.extender._callbacks.printOutput("Deleted JS file: {}".format(selected_file))
        else:
            JOptionPane.showMessageDialog(None, "No JS file selected to delete.")

    def get_domain_and_path_from_js(self, js_file):
        """
        获取js文件里的域名和路径
        :param js_file:
        :return:
        """
        process = subprocess.Popen(["node", js_file, "config"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = process.communicate()
        if process.returncode != 0:
            raise Exception(
                "Failed to retrieve config from JS file: {}. Error: {}".format(js_file, stderr.decode('utf-8')))
        config = json.loads(stdout.decode('utf-8'), object_pairs_hook=OrderedDict)
        return config["domain"], config["path"]

    def call_js_encryption_function(self, js_file, json_data):
        """
        获取加密函数的值
        :param js_file:
        :param json_data:
        :return:
        """
        temp_in_path = None
        temp_out_path = None

        try:
            # # 创建临时文件存储输入的 JSON 数据
            with tempfile.NamedTemporaryFile(delete=False, mode='w') as temp_in:
                temp_in.write(json_data)
                temp_in_path = temp_in.name

            # 创建临时文件用于存储加密输出
            with tempfile.NamedTemporaryFile(delete=False) as temp_out:
                temp_out_path = temp_out.name

            # 执行 Node.js 脚本，将 JSON 数据加密后写入 temp_out
            process = subprocess.Popen(
                ["node", js_file, "encrypt", temp_in_path, temp_out_path],
                stdout=subprocess.PIPE, stderr=subprocess.PIPE
            )
            stdout, stderr = process.communicate()

            # 读取加密后的内容
            with open(temp_out_path, 'r') as temp_out_file:
                encrypted_data = temp_out_file.read().strip()

            return encrypted_data
        finally:
            # 清理临时文件，仅在路径存在时才删除
            if temp_in_path and os.path.exists(temp_in_path):
                os.remove(temp_in_path)
            if temp_out_path and os.path.exists(temp_out_path):
                os.remove(temp_out_path)

    def get_default_json_from_js(self, js_file):
        """
        获取默认的 加密前的 json 文件
        :param js_file: js文件的绝对路径
        :return:
        """
        process = subprocess.Popen(["node", js_file, "default"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = process.communicate()
        if process.returncode != 0:
            raise Exception(
                "Failed to retrieve default JSON from JS file: {}. Error: {}".format(js_file, stderr.decode('utf-8')))

        # 将json_data解析为OrderedDict以保留顺序
        return json.loads(stdout.decode('utf-8'), object_pairs_hook=OrderedDict)
