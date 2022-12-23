var english = document.getElementById("eng");
var urdu = document.getElementById("urdu");
var maths = document.getElementById("maths");
var computer = document.getElementById("comp");
var science = document.getElementById("sci");

var totalMarks = 500;
var grade;
var show = document.getElementById("showResult");

function result() {
    if (english.value == "" || urdu.value == "" || maths.value == "" || computer.value == "" || science.value == "") {
        alert("Enter All Subjects Marks")
    } else {

        var obtained = parseFloat(english.value) + parseFloat(urdu.value) + parseFloat(maths.value) + parseFloat(computer.value) + parseFloat(science.value)

        console.log(obtained);

        var percentage = (obtained / totalMarks) * 100;

        console.log(percentage)

        if (percentage <= 100 && percentage >= 80) {
            console.log("A+");
            grade = "A+"
        } else if (percentage <= 79 && percentage >= 60) {
            console.log("A")
            grade = "A"
        } else if (percentage <= 59 && percentage >= 40) {
            console.log("B")
            grade = "B"
        } else if (percentage <= 39 && percentage >= 20) {
            console.log("F")
            grade = "Fail"
        }
        console.log(grade)

        show.innerHTML = grade;

        english.value = "";
        urdu.value = "";
        maths.value = "";
        computer.value = "";
        science.value = "";

    }
}