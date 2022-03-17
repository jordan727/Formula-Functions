// Area of a trapezoid by Jordan Antonio

// HTML Elements
let calcBtnEl = document.getElementById("calc");
let sideAEl = document.getElementById("baseAIn");
let sideBEl = document.getElementById("baseBIn");
let heightEl = document.getElementById("heightIn");
let outputEl = document.getElementById("output")

// Event Listener
calcBtnEl.addEventListener("click", calcArea);

// Event Function
function calcArea() {
    // Input
    let sideA = +sideAEl.value;
    let sideB = +sideBEl.value;
    let height = +heightEl.value;

    // Calculate & Output
    outputEl.innerHTML = trapezoidArea(sideA, sideB, height)
}

// Calculate and return the area of a trapezoid
function trapezoidArea(a, b, h) {
    return h * (a + b) / 2;
}