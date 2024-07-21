alert("click the +1, +2, +3 buttons to calculate the score")

let firstScreen = document.getElementById("first-screen")
let secondScreen = document.getElementById("second-screen")
 let count = 12
 let point = 5

function one(){
    result = count + 1
    firstScreen.textContent = result 
}

function two(){
    result = count + 2
    firstScreen.textContent = result
}

function three(){
    result = count + 3
    firstScreen.textContent = result
}

function on(){
    result = point + 1
    secondScreen.textContent = result
}

function tw(){
    result = point + 2
    secondScreen.textContent = result
}

function thr(){
    result = point + 3
    secondScreen.textContent = result
}