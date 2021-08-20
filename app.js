list = document.getElementById("list")

function add(){
    var todoApp = document.getElementById("todo_app")
    var li = document.createElement("li")
    var text = document.createTextNode(todoApp.value)
   li.appendChild(text)

   var deletebtn = document.createElement("button")
   var deltext = document.createTextNode("Delete")
   deletebtn.appendChild(deltext);
   
   deletebtn.setAttribute("class","delbtn")
   deletebtn.setAttribute("onclick","del(this)")
li.appendChild(deletebtn)
   list.appendChild(li)

   todoApp.value = ""

   var editbtn = document.createElement("button")
   var edittext = document.createTextNode("Edit")
   editbtn.appendChild(edittext);
   li.appendChild(editbtn)

   editbtn.setAttribute("onclick","editbtn(this)")
}

function del(parameter){
    parameter.parentNode.remove()
}


function delall(){
    list.innerHTML = ""

}

function editbtn(e){
    var update = prompt("enter your updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = update
}