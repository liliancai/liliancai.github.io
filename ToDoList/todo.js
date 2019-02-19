//var ul=document.querySelector("ul");
var input=document.getElementById("userInput");
var todo=document.getElementById("todo");//todo list ul handler
var done=document.getElementById("done");//done list ul handler

function createListItem(){
    //use createElement to create all the buttons 
    console.log("create a item...");
	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var inputText=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");
	

	//set type information
	checkBox.type="checkbox";
	inputText.type="text";
	editButton.className="edit";
	deleteButton.className="delete";
	editButton.innerText="Edit";
	deleteButton.innerText="Delete";
    label.innerText=input.value;

	//append buttons to listItem
	//well,have to follow the order- -!
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(inputText);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	

	return listItem;
	

}

function addListItem(listItem){
    console.log("add a item...");
    todo.appendChild(listItem);
    input.value="";
}

function addListAfterKeypress(event) {
	if ( input.value.length>0&&event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		var newItem=createListItem();
		addListItem(newItem);
		bindTask(newItem);
	} 
}

var editTask=function(){
    var listItem=this.parentNode;
    console.log("edit"+listItem);

    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    //editInput.value=label.innerText;
    var containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}
var deleteTask=function(){
    console.log("delete"+listItem);
    var listItem=this.parentNode;
    var theList=listItem.parentNode;
    theList.removeChild(listItem);
}
var moveTask= function(){
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //if it's listitem from todolist,move it to donelist.
    if (ul.id==="todo")
        done.appendChild(listItem);
    else 
        todo.appendChild(listItem);
    
}

function bindTask(listItem){
	//passed in list item, each item has edit,delete and check 3 actions to trigger
	
	var editButton=listItem.querySelector("button.edit");
	var deleteButton=listItem.querySelector("button.delete");
	var checkBox=listItem.querySelector("input[type=checkbox]");
	
	editButton.onclick=editTask;
	deleteButton.onclick=deleteTask;
	checkBox.onchange=moveTask;
	}


input.addEventListener("keypress", addListAfterKeypress);


for(i=0;i<todo.children.length;i++){
	//bind the listitems to action functions
		bindTask(todo.children[i]);
}
for(i=0;i<done.children.length;i++){
	//bind the listitems to action functions
		bindTask(done.children[i]);
}
