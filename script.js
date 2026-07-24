// Greeting based on current time
let hour = new Date().getHours();

if (hour < 12) {
    alert("Good Morning!");
} else if (hour < 18) {
    alert("Good Afternoon!");
} else {
    alert("Good Evening!");
}

// Button color change
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    if (colorBtn.style.backgroundColor === "red") {
        colorBtn.style.backgroundColor = "green";
    } else {
        colorBtn.style.backgroundColor = "red";
    }
});

// Calculator
function addNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerHTML = "Result = " + sum;
}