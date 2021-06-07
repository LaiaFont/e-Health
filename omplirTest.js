let header = document.querySelector(".headerT");
let title = document.querySelector(".titleT");
var num = document.querySelector(".num");
var question = document.querySelector(".qTest");
let buttons = document.querySelectorAll(".botons span");
document.title = testos.test[localStorage.getItem('whichT')].name;

var whichQ = 1;
localStorage.setItem('whichQ', whichQ); //per començar a la pregunta 1

header.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + testos.test[localStorage.getItem('whichT')].image + ")";
header.style.backgroundSize = "100%";
header.style.height = "30%";
header.style.backgroundPosition = "center";
header.style.margin = "50px 100px 0 100px";
header.style.lineHeight = "300px";
header.style.textAlign = "center";

title.innerHTML = testos.test[localStorage.getItem('whichT')].name;
title.style.color = "#fff";
title.style.fontSize = "50px";
title.style.display = "inline-block";
title.style.lineHeight = "normal";

num.innerHTML = localStorage.getItem('whichQ') + "/" + testos.test[localStorage.getItem('whichT')].questions.length;
num.style.color = "#000";
num.style.marginTop = "40px"
num.style.fontSize = "40px";
num.style.height = "100px";
num.style.textAlign = "center";

question.innerHTML = testos.test[localStorage.getItem('whichT')].questions[localStorage.getItem('whichQ') - 1].question;
question.style.fontSize = "35px";
question.style.height = "120px";
question.style.marginTop = "60px"
question.style.textAlign = "center";

window.update = function update() {
    console.log("Hello");
    num.innerHTML = localStorage.getItem('whichQ') + "/" + testos.test[localStorage.getItem('whichT')].questions.length;
    question.innerHTML = testos.test[localStorage.getItem('whichT')].questions[localStorage.getItem('whichQ') - 1].question;
}

