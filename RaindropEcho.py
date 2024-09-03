# -*- coding: utf-8 -*-

from core.BurpExtender import BurpExtender


# Burp Suite will automatically call this function
def main():
    extender = BurpExtender()
    # Assuming that `callbacks` is provided by Burp Suite when this function is invoked
    extender.registerExtenderCallbacks(callbacks)
