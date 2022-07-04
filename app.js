//Question :- 01
function block(x, y) {
    return (x-y)+x
};
//Question :- 02
function currentDate() {
    return new Date()
};
document.write('<h1>Question:-2</h1>');
document.write('<h1>' + currentDate() + '</h1>');
//Question :- 03
function fullName(firstName,LastName) {
    return firstName+LastName
};
var userInput = prompt('Enter First Name');
var userInput1 = prompt('Enter Last Name');
var concat = fullName(userInput, userInput1);
document.write('<h1>Question:-3</h1>');
document.write('<h1>' + concat + '</h1>');
//Question:- 04
function sum(num1,num2) {
    return num1+num2
};
var userInput2 = +prompt('Enter First Number That You You Want To Add');
var userInput3 = +prompt('Enter Last Number That You You Want To Add');
var sum  = fullName(userInput2, userInput3);
document.write('<h1>Question:-4</h1>');
document.write('<h1>' + sum + '</h1>');
//Question :- 05
function opertor(num1,num2,opertor) {
    if(opertor == '+'){
        return num1+num2
    }
    else if(opertor == '-'){
        return num1+num2
    }
    else if(opertor == '*'){
        return num1+num2
    }
    else if(opertor == '/'){
        return num1+num2
    }
    else if(opertor == '%'){
        return num1+num2
    }
    else{
        return alert('enter Valiad Opertor')
    }
}
var userInput4 = +prompt('Enter any Number');
var userInput5 = +prompt('Enter Second any Number');
var userInput6 = +prompt('Enter Any operator');
var apply = opertor(userInput4, userInput5,userInput6);
document.write('<h1>Question:- 5</h1>');
document.write('<h1>Answer Is:-' + apply + '</h1>');
//Question:-6
//Question:-7
//Question:-8
//Question:-9
//Question:-10
//Question:-11
//Question:-12
//Question:-13
//Question:-14
//Question:-15
//Question:-16
//Question:-17
//Question:-18
//Question:-19
//Question:-20
//Question:-21
//Question:-22
//Question:-23
//Question:-24
//Question:-25
//Question:-26

//Question:-27
//Question:-28
function calCircumference(radius) {
    var answer2 = (2*3.1427)*calCircumference(10)
    return answer2
}
function calarea(radius) {
    var fahrenheit = fahToCel(56)
    var answer3 = (3.1427*calarea(10))*calCircumference(10)
    return answer3
}
document.write('<h1>Question:-29</h1>');
document.write('<h1>Circumference of A circle' + answer2 + '<h1>');
document.write('<h1>Area of a Circle' + answer3 + '<h1>');
//Question:-29
function celToFah(celsius) {
    var celsius = celToFah(56)
    var answer = (celsius * 9/5) + 32
    return answer
}
function fahToCel(fahrenheit) {
    var fahrenheit = fahToCel(56)
    var answer1 = (fahrenheit - 32) * 5/9
    return answer1
}
document.write('<h1>Question:-29</h1>');
document.write('<h1>' + celsius + '<sup>o</sup>C is ' + celToFah(56));
document.write('<h1>' + fahrenheit + '<sup>o</sup>C is ' + fahToCel(56));