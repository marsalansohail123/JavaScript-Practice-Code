// Variables

// var a = "Arsalan";
// var b = " Sohail";
// var c = a + b;
// console.log(c)
// var d = "My Full Name: ";
// alert(d + c);
// var e = d + c;
// console.log(e)

{/* Greater then and less then, if else */ }

// Ham ne ek website bnai jo sirf 18+ ke lye hai

// Hame kese pta chale ga??

// var a = prompt("Enter Your Age");
// console.log(a)

// > Greater Then

// if( a mai value, > greater then (any number)) agr

// if (a > 18) {
//     document.write("You Are 18+")
// }

// Ab dekhen isse ye horha hai ke 18 se zyaada hi honi chahiye ham 18 kren ge tou nahi ho rha

// Ham chah rhe ke agr 18 ho tou b allow ho jae

// >greater =equal bara ho ya barabar ho dono conditions mai allow hoga

// if (a >= 18) {
//     document.write("Allowed")
// }

// console.log(a)

// Ab hame chah rhe hain ke agr 18 se chota ho tou b pta chale k user reject hua hai

// Is ke lye bilkul simple hai

// if()agr ho tou
// else na ho tou

// if (a >= 18) {
//     document.write("Allowed")
// } else {
//     document.write("Not Allowed, Sorry!!")
// }

// console.log(a);

// Is kaam ka ek aur tareeqa

// if (a >= 18)

// if (a > 18) {
//     document.write("Allowed")
// } else {
//     document.write("Not Allowed")
// }

// console.log(a)

// abhi 18 par b not allowed hai

// Ham chah rhe 18 par allowwed ho jae {else if()}

// if (a > 18) {
//     document.write("Allowed")
// } else if (a == 18) {
//     document.write("Allowed")
// }
// else {
//     document.write("Not Allowed")
// }

// console.log(a)

// Student Marks Calculator

// Per Subject = 100 Marks

// var POC = prompt("Enter Your POC Marks"); //100
// var Accounting = prompt("Enter Your Accounting Marks"); //100
// var Economics = prompt("Enter Your Economics Marks"); //100
// var Maths = prompt("Enter Your B. Maths Marks"); //100
// var English = prompt("Enter Your English Marks"); //100
// var Urdu = prompt("Enter Your Urdu Marks"); //100
// var Islamiat = prompt("Enter Your Islamiat Marks"); //100

// console.log(POC + Accounting + Economics + Maths + English + Urdu + Islamiat); // NO Addition

// Default the prompt value is always in a sting form
// There are a two ways of conversion sting into numbers

// 1. starting mai plus lga den

// E.g

// var POC = +prompt("Enter Your POC Marks"); //100
// var Accounting = +prompt("Enter Your Accounting Marks"); //100
// var Economics = +prompt("Enter Your Economics Marks"); //100
// var Maths = +prompt("Enter Your B. Maths Marks"); //100
// var English = +prompt("Enter Your English Marks"); //100
// var Urdu = +prompt("Enter Your Urdu Marks"); //100
// var Islamiat = +prompt("Enter Your Islamiat Marks"); //100

// console.log(POC + Accounting + Economics + Maths + English + Urdu + Islamiat);

// 2. Parse Float Method

// E.g

// var POC = prompt("Enter Your POC Marks"); //100
// var Accounting = prompt("Enter Your Accounting Marks"); //100
// var Economics = prompt("Enter Your Economics Marks"); //100
// var Maths = prompt("Enter Your B. Maths Marks"); //100
// var English = prompt("Enter Your English Marks"); //100
// var Urdu = prompt("Enter Your Urdu Marks"); //100
// var Islamiat = prompt("Enter Your Islamiat Marks"); //100

// parseFloat(iske andar jo b type kren, wo jis b form mai ho ye parseFloat usko number form mai kar dega)

// console.log(parseFloat(POC) + parseFloat(Accounting) + parseFloat(Economics) + parseFloat(Maths) + parseFloat(English) + parseFloat(Urdu) + parseFloat(Islamiat));

// Task:
// Aapko ek var bnana hai named totalMarks usme aapko wo kaam kraana hai jo ham ne abhi console mai kiya hai
// Then totalMarks ko alert and console

// Start

// var POC = +prompt("Enter Your POC Marks"); //100
// var Accounting = +prompt("Enter Your Accounting Marks"); //100
// var Economics = +prompt("Enter Your Economics Marks"); //100
// var Maths = +prompt("Enter Your B. Maths Marks"); //100
// var English = +prompt("Enter Your English Marks"); //100
// var Urdu = +prompt("Enter Your Urdu Marks"); //100
// var Islamiat = +prompt("Enter Your Islamiat Marks"); //100

// Total Marks

// var totalMarks = POC + Accounting + Economics + Maths + English + Urdu + Islamiat;

// console.log(totalMarks)

// Perc

// If per subject = 100 Marks, so 7 subjects will be = 700 Marks

// ye dekhen 1 subject 100 marks ka hai tou 7 subjects kitne ke hue?

// var totalSubjectMarks = 700;

// var perc = (totalMarks / totalSubjectMarks) * 100;

// var percSign = '%'

// console.log(perc + percSign);

// if (perc <= 100) {
//     alert("Passed")
// }

// used && Operator

// if(
// percentage < (kam) hai ya = (barbar) hai 100
// && (ya)
// percentage > (zyada) hai ya = (barbar) hai 80)
// )

// console.log(perc)
// if (perc <= 100 && perc >= 80) {
//     alert("Passed")
// } else { alert("Fail") }

// Now we calculate complete grade

// if (perc <= 100 && perc >= 80) {
//     alert("Congratulations, You've got A+ Grade.");
// } else if (perc <= 79 && perc >= 60) {
//     alert("Congratulations, You've got A Grade.");
// } else if (perc <= 59 && perc >= 40) {
//     alert("Congratulations, You've got B Grade.");
// } else {
//     console.log("Congrax, You've Failed");
// }

// console.log(perc)

// save grade in grade variable

// var grade = ''; // by default none

// if (perc <= 100 && perc >= 80) {
//     grade = "A+"; //var grade = main A+ ko save krwa dia agr 100 se kam aur 80 se zyada hai tou
//     alert(grade, perc)
// } else if (perc <= 79 && perc >= 60) {
//     grade = "A";
//     alert(grade, perc)
// } else if (perc <= 59 && perc >= 40) {
//     grade = "B";
//     alert(grade)
// } else {
//     alert("Congrax, You've Failed");
// }

// Array and it's methods

// var arr = ["arsalan", "sohail"];

// console.log(arr);

// Array index which always start with zero (0)
//  for e.g ["arsalan" this is (index 0), "sohail" and this is (index 1)]

// Practical example

// alert(arr[ //index])
// alert(arr[0])
// alert(arr[1])

// charAt is also same as index, index array mai se value nikalta hai aur charAt value mai se letter

// e.g no 1

// var pickingIndex = arr[0]; //index
// var pickingLetter = pickingIndex.charAt(0); // pickingletter = (pickingIndex) => uper index mai jo letter aa rha first wala (arsalan) usmai charAt ka method lgaaya a0 r1 s2 .... is tarah so, 0 mai (a) aa rha.
// alert(pickingLetter);

// e.g no 2

// var index = arr[0];

// console.log(index) // (arsalan) ab mujhy is arsalan ke a ko nikalena hai uske lye CharAt ka method hai

// ham ek variable bnaen ge letter ya kisi b naam ka usmai hame us word ko break karna hai jo ham ne index ke variable mai nikala, right?

// basically, charAt word ko break kar deta hai

// var letter = index.charAt(2);

// console.log(letter)

// Array and it's 6 method

// 1. Push add one or more element to the last of an array.
// 2. Pop removes the last element of the array.
// 3. Slice is used to get a new array from the original array.
// 4. Splice changes the content of an array with the help of index.
// 5. Shift removes the first element of the array.
// 6. UnShift add one or more element in the beginning of an array.

// var arr = ["arsalan", "sohail", "owais", "sohail", "hassan", "sohail", "haniya", "sohail"];

// Push

// push() mai jo b likhte hain wo array ke bilkul last mai paste kar deta hai

// var add = arr.push("Family")

// console.log(arr)

// Pop

// The pop() method removes the last element from an array and returns that element.

// var xyz = arr.pop();

// console.log(arr)

// shift() completely opposite of the pop, shift removes the first element of an array, on the other side, pop removes the last element of an array.

// var abc = arr.shift();

// console.log(arr)

// unshift() also completely opposite of the push, unshift add on or more element in the starting of an array, on the other side, push adds the element in the last of an array.

// abhi arsalan nahi hai is array m

// var xyz = arr.unshift("Family Members:", "Arsalan")

// console.log(arr)

// splice()changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// INDEX    0           1        2           3        4
// var arr = ["arsalan", "sohail", "owais", "hassan", "sohail", "haniya", "sohail"];

// dekho splice mai sab se pehle wo index dete hain jis mai add kraana hota jese ham ne index dya na wo index wahan par khatam ho jata hai au wahan se naya index shuru hota hai. aur naya index 0 se start hota hai so hamne 0 index par add krwa dia

// var asd = arr.splice(3, 0, "sohail");
// console.log(arr)

// slice basically aik naya array bna deta hai purane wale array se with the help of index number.

// var klj = arr.slice(0, 2)
// console.log(klj)
// console.log(arr)

// Array two new function

// 1. Concat
// 2. Join

// 1. Concat

// var a = ["a", "b", "c"];
// var b = ["d", "e", "f"];
// var c = ["i", "j", "k"];
// ham ne a mai concat kiya tou a ki values pehle aaen
// var d = a.concat(b, c);

// d mai aik array mil rha jo a, b, c ko mil kar bna hai

// console.log(d)

// 2. Join

// var newArr = ["a", "b", "c"];

// join basically jese array mai 3 values hain a, b, c ye join mai jo b likhen ge wo teeno jagah paste kar dega kiunke join shuru se start krta hai aur ismai jo b likha ho wo har aik ke baad likh deta hyy.

// and join array ko sting form mai b convert kar deta hai

// var j = newArr.join(" "); // add space

// console.log(j)

// For Loop

// var arr = ["arsalan", "sohail", "owais", "sohail", "hassan", "sohail", "haniya", "sohail"];

// arr.unshift("Family Members:");

// console.log(arr)

// for(var i = 0;(variable hai kuch b likh sakte); i>10 yahan limit btaate hain; i++ aur yahan start)

// Practical Example

// ye dekhen agr var i = 1 likhen ge tou 1 se start hoga
// lekin 0 likhte hain kiun ke array ko loop krte hain aur ye array ka index btata hai aik tarah se so, 0 means starting index.


// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// Ab dekhen i < 10 tha tou 1, 2, 4, and all that aa rha tha

// ham ne bola i less then < d ka jo array hai uski puri length

// var d = ["a", "b", "c", "d", "e", "f"];

// console.log(d.length)

// for (var i = 0; i < d.length (YAHAN PE SAMJHEN 6 HAI) E.G i < 6; i++) {
//     // var n = d (variable name)[i](iteration, loop)
//     var l = d[i]
//     console.log(l)
// }

// for (var i = 0; i < d.length; i++) {
//     // var n = d (variable name)[i](iteration, loop)
//     var l = d[i]
//     console.log(l)
// }

// Nested Loop

// var a = ["a", "b", "c", "d", "e", "f"];

// var b = ["1", "2", "3", "4", "5", "6"];

// for loop
// for (var i = 0; i < a.length; i++) {
//     // console.log(a[i])
//     // now for nested loop: same for loop but inside a loop
//     // for(var j = 0 (because i variable, we also declared ek naam ke 2 variables nahi ho sakte) )
//     for (var j = 0; j < b.length; j++) {
//         console.log(a[i] + b[j])
//     }
// }

// isne a ki har ek value mai pure b ko render kra....

// Expected Output

// a1
// a2
// a3
// a4

// Date and Time Method

// var date = new Date();

// document.write("Current Date: ", date);

// // Extracting Date and Time Parts

// console.log("Day: ", date.getDay());
// // 0 sunday, 1 monday

// console.log("Month: ", date.getMonth());
// // month also starts with zero i.e. 0 january, 1 febuary, ...., 11 december

// console.log("Time: ", date.getTime());
// // in a milli second

// console.log("Minutes: ", date.getMinutes());

// console.log("Seconds: ", date.getSeconds());

// console.log("Date: ", date.getDate());

// console.log("Year: ", date.getFullYear());

// Getting the current day and month with getDay() and getMonth() method

//          0           1           2           3
// var days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"];

// var currDay = date.getDay();

// getDay() also comes as a form of array index if uh remember array index also starts with zero for e.g look at the days array

//   is mai pura days wala array          0 and 0 index par sunday hai
// var dayName =            days          [currDay];

// var dayName = days[currDay];

// console.log("Day: ", dayName);

// var month = date.getMonth();
// var monthArr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log("Current Month: ", monthArr[month])

// Maths Method

// var randomNum = 43.24545454545454;

// round method basically karta ye hai if point ke baad ki value .5 se kam hoti tou same value rehne deta otherwise aik number add kr deta

// console.log(Math.round(randomNum));

// floor method basically karta ye hai ke point ke baad koyi b value ho floor usko round kar deta ussi value mai

// console.log(Math.floor(randomNum));

// ceil method basically karta ye hai ke point ke baad agr .1 b hoga tou wo 1 number plus kr dega

// console.log(Math.ceil(randomNum));

// var perc = 99.98989898;

// aapne dekha hoga calculation mai answer hota ye hai par show 99.99 hota hai usky lye toFixed ka method use hota i.e. toFixed(number you want);

// console.log(perc.toFixed(2));

// code dekh len

// Changing Case

// toUpperCase basically karta yeh hai ke pure word ko capital letters mai kar deta hai

// E.g

// var a = "arsalan";

// // ham ne b ke var ke andar a ki value ko upper case kar dyaaa

// var b = a.toUpperCase();

// alert(b)
// console.log(b)


// var a = "SOHAIL";

// ham ne b ke var ke andar a ki value ko lower case kar dyaaa

// var b = a.toLowerCase();

// alert(b)
// console.log(b)

// var abc = "arsalan";

// var xyz = abc.charAt(0).toUpperCase();

// 0 se start kia aur 2 tak copy kar lya 3 likhen ge tou 2 tak copy krega "arsalan" 0a, 1r, 2s e.g:
// var xyz = abc.slice(0, 3);

//  0 par jo tha wo nahi aaya then 1 se aagya
// var jhg = abc.slice(1);

// console.log("Name:", xyz + jhg);

// console.log(xyz);
// console.log(jhg);

// this work in one var and this is good prac

// var letter = "arsalan";

// var a = prompt("Enter Your First Name");

// var b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();

// console.log(b)

// Call Back Functions

// Format of Function

// function without worked until it's called.. for e.g agr koyi mera naam le kar mujhy kaam bole ga tou hi mai kron ga

// function abc() {
//     alert("Function Worked");
// }

// abc();

// Paramter and Argument

// function xyz(this is parameter) {
//     alert("anything")
// }

// xyz(this is argument);

// E.g

// parameter ko ham ne p se recognize kya hai

// ham ne neche argument mai text dia jo p mai save hogya

// function abc(p) {
//     alert(p)
// }

// ab ham is abc ki brackets mai jo b type kren ge wo argument ho ga jo p mai ja kar save ho jaega

// abc("This is the txt which is saved in parameter p");

// var a = "arsalan";
// a wale variable ko ham argument mai pass kr denge

// ab yahan b mai b a wali value aa rhi kiunke parameter mai wohi kuch aata jo ham ne argument mai pass kia hota
// function ytr(b) {
//     console.log(b)
// }

// ytr(a.toUpperCase());

// function abc(a, b) {
//     console.log(a - b)
// }
// abc(10, 20);

// Onclick

// function abc() {
//     alert("Clicked!!")
// }

// Onclick Parameter

// p mai hame wo mile ga jo html mai onclick par argument mai dya hoga
// function xyz(p) {
//     alert(p)
//     console.log(p)
// }

// Switch Statement

// switch is also same as if else statement but short in lines

// simple format

// var a = "Arsalan";

// switch (a) {
// if hota hai na yahan case use hota
// case 'Arsalan':
//     alert("Success");
//     break;
// else hota hai na yahan default use hota hyy
//     default:
//         alert("Error")
// }

// var a = new Date();

// var b = a.getDay();

// var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// var days = daysArray[b];

// console.log(days)

// Switch Statement & real day method

// var days = new Date();

// var daysOfWeak = days.getDay();

// var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// var getDay = daysArray[daysOfWeak];

// console.log(getDay)

// switch (getDay) {
//     case 'Sunday':
//         alert("Ooohooo!! Its Sunday.")
//         break;
//     case 'Monday':
//         alert("Its Monday!! First Working Day of Weak.")
//         break;
//     case 'Tuesday':
//         alert("Its Tuesday!! Second Working Day of Weak.")
//         break;
//     case 'Wednesday':
//         alert("Its Wednesday!! Third Working Day of Weak.")
//         break;
//     case 'Thursday':
//         alert("Its Thursday!! Fourth Working Day of Weak.")
//         break;
//     case 'Friday':
//         alert("Its Friday!! Second Last Working Day of Weak. Get Ready for Jummah Prayer")
//         break;
//     case 'Saturday':
//         alert("Its Saturday!! Last Working Day of Weak. Get Ready for Weakend")
//         break;
//     case 'Sunday':
//         alert("Oohooo!! It's Sunday. Have Fun :)")
//         break;
// }

// Events Mouse

// onMouseOver

// function abc(p) {
//     // in p we get complete tag of img but we only want src to change picture, so we use .src
//     // Now we can change image on this function
//     p.src = 'https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?b=1&s=170667a&w=0&k=20&c=MBaQEp6lxIWgZV0eFqQ8d2_zDbYuFk5LEFBawDinLhw=';
//     // console.log(p.src)
//     // pic changed
// }


// ab ham chah rhe jese hi mouse pic se hata old pic wapis aa jae

// onMouseOut

// hame ne iske function par purani pic ka src lga dia

// function xyz(p) {
//     p.src = 'https://images.all-free-download.com/images/graphiclarge/beautiful_holiday_europe_217735.jpg';
// }

// Documents and Js Styling

// getElementById

// var text = document.getElementById("text");
// // in this text variable complete tag comes.
// console.log(text)

// function chngColor() {
//     // styling karne ke lye .style likhna zaroori hai, .style likhne ke baad jo working kraani and = ke baad sting mai value
//     text.style.color = 'red';
// }

// Call Session

// var text = document.getElementById("para");

// var text1 = document.getElementById("para1");

// console.log(text)

// function abc() {
//     // text.style.color = 'red';
//     // text.style.backgroundColor = "black";
//     // text.style.display = 'none'
//     text.style.fontFamily = 'Cooper';
//     // text1.style.display = 'block';
// }

// var inp = document.getElementById("input");

// var err = document.getElementById("error");

// console.log(inp)

// function submit() {
//     if (inp.value == "") {
//         err.value = "Please Enter Your Name!!"
//     } else {
//         console.log(inp.value);
//         err.value = "";
//         inp.value = "";
//     }
// }

// var input = document.getElementById("inp");

// var errPara = document.getElementById("para");

// function abc() {
//     if (input.value == "") {
//         errPara.innerHTML = "Firstly! Enter Your Name."
//     } else {
//         console.log(input.value)
//         input.value = "";
//         errPara.innerHTML = "";
//     }
// }

// var input = document.getElementById("inp");

// function xyz() {
//     // console.log(input.value)
//     var value = input.value
//     switch (value) {
//         case 'karachi':
//             alert("The Famous Food of Karachi is Bun Kabab.")
//             break;

//         case 'islamabad':
//             alert("The Famous Food of Islamabad is Chapli Kabab.")
//             break;

//         case 'lahore':
//             alert("The Famous Food of Lahore is Payee.")
//             break;

//         default:
//             alert('Not Found!!')
//             break;
//     }
// }

// var para = document.getElementById("text");

// function abc() {
//     para.className += ' backgroundColor fontSize';
// }

// Element by Tag Name

// var main = document.getElementById("main");

// var para = main.getElementsByTagName("img");

// console.log(para)