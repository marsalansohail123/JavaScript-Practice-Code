// var pera = document.getElementById("text");

// function abc() {
//     // Styling

//     // pera.style.color = "red"
//     // pera.style.backgroundColor = 'black';
//     // pera.style.fontSize = "50px";
//     // pera.style.fontFamily = 'Brush Script MT';

//     // Add Class

//     pera.className += ' backgroundColor fontSize';
// }

// var inputVal = document.getElementById("inp");

// function abc() {
//     if (inputVal.value === "") {
//         alert("Enter Your Name!")
//     } else {
//         console.log(inputVal.value)
//     }
// }

// var inp = document.getElementById("input");
// var error = document.getElementById("err");

// function abc() {
//     if (inp.value == "") {
//         error.value = "Please Enter Your Name"
//     } else {
//         console.log(inp.value)
//         inp.value = "";
//     }
// }

// var inpVal = document.getElementById("inp");
// // console.log(inpVal)
// var err = document.getElementById("err");

// function abc() {
//     if (inpVal.value == "") {
//         err.innerHTML = "Please Enter Your Name"
//     } else {
//         console.log(inpVal.value);
//         inpVal.value = "";
//         err.innerHTML = "";
//     }
// }

var input = document.getElementById("inp");

function abc() {
    switch (input.value) {
        case 'Karachi':
            alert("The Famous Food of Karachi is Bun Kabab")
            break;
        case 'Lahore':
            alert("The Famous Food of Lahore is Payee")
            break;
        default:
            alert("This city has no famous food :)")
            break;
    }
}