let equation = ""
let tableEquation = ""


// ------------------------ Clear Btn ------------------------

const handleClear = () => {
    document.getElementById("screen").innerHTML = ""
}

// ------------------------ Clear one Btn ------------------------


const handleClearOne = () => {
    let afterDel = equation.slice(0 , equation.length - 1)
    document.getElementById("screen").innerHTML = afterDel
    equation = afterDel 
}

// ------------------------ Table Clear Btn ------------------------

const handleClearTable = () => {
    document.getElementById("table-screen").innerHTML = ""
}

// ------------------------ Table Clear one Btn ------------------------

const handleClearOneTable = () => {
    let afterDel = tableEquation.slice(0 , tableEquation.length - 1)
    document.getElementById("table-screen").innerHTML = afterDel
    tableEquation = afterDel
}


// ------------------------ Get value ------------------------

const dis = (val) => {
    document.getElementById("screen").innerHTML += val
    equation += val
}



// ------------------------ Get value ------------------------

const disTable = (val) => {
    document.getElementById("table-screen").innerHTML += val
    tableEquation += val
}


// ------------------------ Solve Grid value ------------------------

const solve = () => {
    let answer = eval(equation)
    equation = answer
    document.getElementById("screen").innerHTML = answer
}


// ------------------------ Solve Table value ------------------------

const solveTable = () => {
    let answer = eval(tableEquation)
    tableEquation = answer
    document.getElementById("table-screen").innerHTML = answer
}


// ------------------------ Date ------------------------

let date = new Date
date = date.getFullYear()
document.getElementById("date").innerHTML = date