document.getElementById("rankings").style.color = "#B4EDEB";
document.getElementById("TRankings").style.fontWeight = "bold";
document.getElementById("rankingss").src ="img/Rankings_Selec.png";

document.getElementById("logo").addEventListener('click', cambiaP);

    document.getElementById("articles").addEventListener('click', cambia);

    document.getElementById("tests").addEventListener('click', cambiaT);

    document.getElementById("rankings").addEventListener('click', cambiaR);

    function cambiaP() {
        let sel = this;
        document.location.href = "index.html?seleccio=" + sel;
    }

    function cambia() {
        let sel = this;
        document.location.href = "Articles.html?seleccio=" + sel;
    }

    function cambiaT() {
        let sel = this;
        document.location.href = "Tests.html?seleccio=" + sel;
    }

    function cambiaR() {
        let sel = this;
        document.location.href = "Rankings.html?seleccio=" + sel;
    }

let flex = document.querySelector(".rank");
let k = 0;
for (let i = 0; i < testos.test.length; i++) {
    if (localStorage.getItem(k) != null) {
        if (k <= i) {
            let span = document.createElement("span");
            let inside = document.createElement("section");
            let p = document.createElement("p");
            let meter = document.createElement("div");
            let prog = document.createElement("span");
            let mark = document.createElement("p");
            let zero = document.createElement("p");

            inside.className = "inside";
            inside.style.alignItems = "center";

            meter.className = "meter";
            meter.style.margin = "0px";
            prog.className = "prog";
            console.log(localStorage.getItem(i+'p'));
            mark.innerHTML = localStorage.getItem(i+'p');
            mark.className = "mark";
            mark.style.textAlign = "center";
            mark.style.float = "right";
            mark.style.padding ="30px 15px 0 0";
            mark.style.fontSize = "30px";

            var width = 1;
            var id = setInterval(frame, 10);

            function frame() {
                if (localStorage.getItem(i+'p')==0) {
                    prog.style.display = "none";
                    zero.innerHTML = "0";
                    zero.style.color = "#000";
                    zero.style.fontSize = "30px";
                    zero.style.textAlign = "center";
                    zero.style.float = "left";
                    zero.style.padding = "30px 0px 0 15px";
                    
                    meter.appendChild(zero);
                } else {
                    
                    if (width >= Math.ceil(localStorage.getItem(i+'p') / testos.test[i].questions.length * 100)) {
                        clearInterval(id);
                    } else {
                        width = Math.ceil(localStorage.getItem(i+'p') / testos.test[i].questions.length * 100);
                        prog.style.width = width + '%';
                    }
                }
            }

            span.style.backgroundImage = "url(" + testos.test[i].image + ")";
            span.id = "t" + k;
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundSize = "120%";
            span.style.backgroundPosition = "center";
            span.style.width = "30%";
            span.style.height = "60%";
            span.style.borderRadius = "7px";
            span.style.margin = "50px 0 50px 50px";

            p.innerHTML = testos.test[i].name;
            p.style.margin = "320px 0 0 10px";
            p.style.fontSize = "30px";

            meter.style.margin = "50px 50px 50px 50px";
            meter.style.flex = "1";

            prog.appendChild(mark);
            meter.appendChild(prog);
            span.appendChild(p);
            inside.appendChild(span);
            inside.appendChild(meter);
            flex.appendChild(inside);

            k++;
        }
    }
}