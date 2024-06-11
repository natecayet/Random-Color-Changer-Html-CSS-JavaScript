const btn = document.querySelector(".btn");
let colorText = document.querySelector(".colorText");
const box = document.querySelector(".box");

const colors = [
    "RED",
    "BLUE",
    "YELLOW",
    "GREEN",
    "ORANGE",
    "PURPLE",
    "AQUA",
    "BLACK",
    "WHITE"
];

function blackText() {
    box.style.color = "black";
}
function randomSelector() {
    let random = Math.floor(Math.random() *  9);
    return random;
};

function changeColor() {
    let color = colors[randomSelector()];
    colorText.innerText = color
    box.style.backgroundColor = color;
    box.style.color = "white";
    if (color === "YELLOW") {
        blackText();
    }else if (color === "WHITE") {
        blackText();
    }else if (color === "AQUA") {
        blackText();
    }else {
        
    }
}

btn.onclick = changeColor;
