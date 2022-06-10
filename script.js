let mouseDown = false;
document.addEventListener("mousedown",md);
document.addEventListener("mouseup",mu);
function md(e) { mouseDown = true };
function mu (e) { mouseDown = false };
colourSelected = "black";
createCanvas(16);
calculateDots();

const sizes = document.querySelectorAll("input,label");
sizes.forEach(size=> size.addEventListener("click",changeSize));
function changeSize(e) {
    switch(e.target.id){
        case "chk16":
            createCanvas(16);
            break;
        case "chk25":
            createCanvas(25);
            break;
        case "chk50":
            createCanvas(50);
            break;
    };
}
function createCanvas(sz){
    let canvas = document.querySelector(".canvas");
    let child = canvas.lastElementChild;
    while(child){
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }
    for (let i=0;i<sz+1;i++) {
        pardiv = document.createElement("div");
        for (let i=0;i<sz+1;i++) {
            chidiv = document.createElement("div");
            pardiv.appendChild(chidiv);
        }
        canvas.appendChild(pardiv);
    }
    calculateDots();
    
}

function calculateDots() {
    const dots = document.querySelectorAll(".canvas div div");
    dots.forEach(dot => dot.addEventListener("mouseover",draw));
    function draw(e) {
        if (mouseDown)
            {e.target.style.backgroundColor = colourSelected;}
    }           
}

const colours = document.querySelectorAll(".colours div div");
colours.forEach(colour => colour.addEventListener("click",selectColour));
function selectColour(e) {
    colourSelected = e.target.className;
}

const reset = document.querySelector("button");
reset.addEventListener("click",resetCanvas);
function resetCanvas() {
    const dots = document.querySelectorAll(".canvas div div");
    dots.forEach(dot => dot.style.backgroundColor = "white");
    mouseDown = false;
    calculateDots();
}