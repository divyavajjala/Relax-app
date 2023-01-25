let container  = document.getElementById("container");
let text = document.getElementById("text");
let totalTime = 12000;
let breathTime = (totalTime/5)*2;
let holdTime = totalTime/5;
breath();
function breath() {
    text.innerText ="Breath In!";
    container.className = "container grow";
    setTimeout(()=> {
        text.innerText = "Hold";
        setTimeout(()=> {
            text.innerText = "Breath Out!";
            container.className = "container shrink";
        },holdTime);
    },breathTime);
};
setInterval(breath,totalTime);