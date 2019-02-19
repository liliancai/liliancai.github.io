from selenium import webdriver
from selenium.webdriver.common.keys import Keys

#check if homepage jump to rock paper scissors
testLink="RockPaperScissors"
driver=webdriver.Firefox()
driver.get("https://github.com/liliancai/liliancai.github.io")
click=driver.find_element_by_partial_link_text('Rock')
click.click()
assert testLink in driver.page_source


driver.close()
