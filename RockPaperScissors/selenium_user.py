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

    @skip
    def test_modal_start_game(self):
        # a question: do I have to get url each single time??
        self.browser.get("file:///home/lilian/liliancai.github.io/RockPaperScissors/index.html")
        modal=self.browser.find_element_by_css_selector('#ready')
        assert "Round 1" not in self.browser.page_source
        modal.click()
        assert "Round 1" in self.browser.page_source

    # click the buttons 10 times
    def test_if_game_end(self):
        self.browser.get("file:///home/lilian/liliancai.github.io/RockPaperScissors/index.html")
        modal=self.browser.find_element_by_css_selector('#ready')
        modal.click()
        buttonRock=self.browser.find_element_by_css_selector('#rock')

        for i in range(0,10):
            buttonRock.click()
        assert "Game over,start again?" in self.browser.page_source



if __name__=='__main__':
    print("200 okay!")
