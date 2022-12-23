var input = document.getElementById("inp");

function display(p) {
    input.value += p;
}

// eval javascript predefined function

function equal() {
    input.value = eval(input.value)
}

function clearVal() {
    input.value = "";
}

function delVal() {
    input.value = input.value.slice(0, -1);
}