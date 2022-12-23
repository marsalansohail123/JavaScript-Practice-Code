var inp = document.getElementById("input");
var ol = document.getElementById("ol");

function add() {

    // Add Todo

    var li = document.createElement("li");
    // console.log(li)
    var liText = document.createTextNode(inp.value);
    li.appendChild(liText);
    console.log(li)
    ol.appendChild(li);
    inp.value = "";

    // Delete Button

    // <button>
    // child (Delete)
    // </button>

    var delBtn = document.createElement("button");
    var delBtnTxt = document.createTextNode("Delete Todo")
    delBtn.appendChild(delBtnTxt)
    // onclick = alert('abc')
    delBtn.setAttribute('onclick', 'delTodo(this)')
    delBtn.setAttribute('class', 'float')
    li.appendChild(delBtn);
    // console.log(delBtn)

    // Edit Button  

    var editBtn = document.createElement("button");
    var editBtnTxt = document.createTextNode("Edit Todo")
    editBtn.appendChild(editBtnTxt)
    // onclick = alert('abc')
    editBtn.setAttribute('onclick', 'editTodo(this)')
    editBtn.setAttribute('class', 'float')
    li.appendChild(editBtn);
    // console.log(delBtn)
}

function delTodo(p) {
    p.parentNode.remove();
}

function editTodo(p) {
    // console.log(p)
    // var editVal = prompt();

    console.log(p)
    p.parentNode.firstChild.nodeValue = prompt();
}