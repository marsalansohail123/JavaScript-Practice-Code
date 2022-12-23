var input = document.getElementById("input");
var ul = document.getElementById("ul");

function add() {

    // Add

    var li = document.createElement("li")
    var liTxt = document.createTextNode(input.value);
    li.appendChild(liTxt)
    ul.appendChild(li);
    input.value = "";

    // Edit

    var editBtn = document.createElement("button");
    var editBtnTxt = document.createTextNode("Edit Todo")
    editBtn.appendChild(editBtnTxt)
    editBtn.setAttribute("onclick", "editTodo(this)")
    li.appendChild(editBtn)
    // console.log(editBtn)

    // Delete

    var delBtn = document.createElement("button");
    var delBtnTxt = document.createTextNode("Delete Todo");
    delBtn.appendChild(delBtnTxt);
    delBtn.setAttribute("onclick", "deleteTodo(this)")
    li.appendChild(delBtn);
}

function editTodo(p) {
    p.parentNode.firstChild.nodeValue = prompt("Enter New Value", p.parentNode.firstChild.nodeValue);
}

function deleteTodo(p) {
    p.parentNode.remove();
}

function deleteAll() {
    ul.innerHTML = "";
}