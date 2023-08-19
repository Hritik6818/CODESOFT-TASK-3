
const display = document.getElementById("display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const bracketButton = document.querySelector("#bracket");
const deleteButton = document.querySelector("#delete");
const calculateButton = document.getElementById("calculate");

let currentInput = "";

digitButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

clearButton.addEventListener("click",()=>{
    currentInput = ""
    display.value = "";
})

deleteButton.addEventListener("click",()=>{
    currentInput = currentInput.slice(0,-1);    /* Remove one by one */
    display.value = currentInput;
})

operatorButton.forEach(button => {
    button.addEventListener("click",()=>{
        currentInput += button.textContent;
        display.value = currentInput;
    });
});


calculateButton.addEventListener("click",()=>
{
    
     const result = eval(currentInput);
     display.value = result;
     currentInput = result;
});

var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)   /* Math.floor point ki value ko int mai lata hai */
        if(a < 100){
            document.querySelector("#loader h1")
            .innerHTML = a + "%"
        }
        else{
            a = 100
            document.querySelector("#loader h1")
            .innerHTML = a + "%"
        }
    },150)
}
time()


tl.to("#loader h1",{
    // scale:1.2,
    delay:0.5,
    duration:1.5,
    onStart:time()
})
tl.to("#loader",{
   top:"-100vh",
   delay:0.5,
   duration:1.5,
})


