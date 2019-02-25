# test basic functions
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import unittest
from unittest import skip

class FunctionalTest(unittest.TestCase):
    def setUp(self):
        self.browser=webdriver.Firefox()
    def tearDown(self):
        self.browser.quit()
