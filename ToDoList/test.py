from selenium import webdriver
from selenium.webdriver.common.keys import Keys


driver=webdriver.Firefox()
#driver.get("https://www.python.org")
driver.get("file:///home/lilian/JavaScriptPractices/ToDoList/todo.html")
e=driver.find_element_by_name("userInput")
e.send_keys("first")
e.send_keys(Keys.RETURN)
assert "first" in driver.page_source


#check if we can't complete the item

d=driver.find_element_by_name("test_delete_button")
d.click()

#assert not in otherwise browser don't close
#assert "test,test" in driver.page_source
assert "test,test" not in driver.page_source
driver.close()
