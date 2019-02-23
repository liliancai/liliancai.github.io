from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import unittest
from unittest import skip

class RockPaperScissorsTest(unittest.TestCase):
    def setUp(self):
        self.browser=webdriver.Firefox()
    def tearDown(self):
        self.browser.quit()
    #check if homepage jump to rock paper scissors
    @skip
    def test_redirect_to_rock_page(self):
        self.browser.get("https://liliancai.github.io")
        #local test
        #self.browser.get("file:///home/lilian/liliancai.github.io/index.html")
        click=self.browser.find_element_by_partial_link_text('Rock')
        click.click()
        testLink="RockPaperScissors"
        self.assertIn(testLink,self.browser.page_source)
        #assert testLink in self.browser.page_source

    def test_modal_start_game(self):
        modal=self.browser.find_element_by_name("button")
        modal.click()
        assert "Ready?go!" not in self.browser.page_source



if __name__=='__main__':
    print("200 okay!")
