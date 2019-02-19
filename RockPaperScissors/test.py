from selenium import webdriver
from selenium.webdriver.common.keys import Keys

#check if homepage jump to rock paper scissors
testLink="RockPaperScissors"
driver=webdriver.Firefox()
driver.get("https://liliancai.github.io")
#driver.implicitly_wait(100)
#local test
#driver.get("file:///home/lilian/liliancai.github.io/index.html")
click=driver.find_element_by_partial_link_text('Rock')
click.click()
assert testLink in driver.page_source

modal=driver.find_element_by_name("button")
modal.click()
assert "Ready?go!" in driver.page_source

driver.close()
