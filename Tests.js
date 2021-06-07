window.onload = function () {

    document.getElementById("tests").style.color = "#B4EDEB";
    document.getElementById("TTests").style.fontWeight = "bold";
    document.getElementById("testss").src = "img/Tests_Select.png";


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

    let buttons = document.querySelectorAll(".botons span");
    var points = 0;
    let flex = document.querySelector(".column_2");
    let inside = 0;

    function changeQuestion() {
        if (whichQ < testos.test[localStorage.getItem('whichT')].questions.length) {
            whichQ ++;
            localStorage.setItem('whichQ', whichQ);
            update();
    
        } if (whichQ == testos.test[localStorage.getItem('whichT')].questions.length) {
            if (inside==0) {
                inside++;

                let button = document.createElement("span");
                let text = document.createElement("p");
    
                text.innerHTML = "Finish the test";
                text.style.fontSize = "30px";
    
                buttons.id = "finish";
                button.style.backgroundColor = "#49D3EA";
                button.style.textAlign = "center";
                button.style.lineHeight = "100px";
                button.style.height = "40%";
                button.style.margin = "80px 350px 100px 350px";
                button.style.borderRadius = "20px";
    
            button.appendChild(text);
            flex.appendChild(button);
    
            let number = document.querySelector(".num");
            let questions = document.querySelector(".question");
            let answ = document.querySelector(".botons");
    
            button.addEventListener('click', function () {
                localStorage.setItem(localStorage.getItem('whichT') + 'p', points);
    
                number.remove();
                questions.remove();
                answ.remove();
                button.remove();
    
                let prog = document.createElement("span");
                let meter = document.createElement("div");
                let mark = document.createElement("p");
                let zero = document.createElement("p");
    
                mark.innerHTML = localStorage.getItem(localStorage.getItem('whichT') + 'p');
                mark.className = "mark";
                mark.style.textAlign = "center";
                mark.style.float = "right";
                mark.style.padding ="30px 15px 0 0";
                mark.style.fontSize = "30px";
    
                meter.className = "meter";
    
                prog.className = "prog";
    
                var width = 1;
                var id = setInterval(frame, 10);
    
                function frame() {
                    if (localStorage.getItem(localStorage.getItem('whichT') + 'p') == 0) {
                        prog.style.display = "none";
                        zero.innerHTML = "0";
                        zero.style.color = "#000";
                        zero.style.fontSize = "30px";
                        zero.style.textAlign = "center";
                        zero.style.float = "left";
                        zero.style.padding = "30px 0px 0 15px";
    
                        meter.appendChild(zero);
                    } else {
    
                        if (width >= Math.ceil(localStorage.getItem(localStorage.getItem('whichT') + "p") / testos.test[localStorage.getItem('whichT')].questions.length * 100)) {
                            clearInterval(id);
                        } else {
    
                            width = Math.ceil(localStorage.getItem(localStorage.getItem('whichT') + "p") / testos.test[localStorage.getItem('whichT')].questions.length * 100);
                            prog.style.width = width + '%';
                        }
                    }
                }
    
                prog.appendChild(mark);
                meter.appendChild(prog);
                flex.appendChild(meter);
    
                });
            } 
            
        }
    }

    localStorage.setItem(localStorage.getItem('whichT') + "p", points);

    buttons[0].addEventListener("click", function () {
        buttons[0].style.backgroundColor = "#F2FDFF";

        if (testos.test[localStorage.getItem('whichT')].questions[localStorage.getItem('whichQ') - 1].correctA == buttons[0].id) {
            points++;
        }
        changeQuestion();
    });

    buttons[1].addEventListener("click", function () {
        buttons[1].style.backgroundColor = "#F2FDFF";
        changeQuestion();
    });

    buttons[2].addEventListener("click", function () {
        buttons[2].style.backgroundColor = "#F2FDFF";

        if (testos.test[localStorage.getItem('whichT')].questions[localStorage.getItem('whichQ') - 1].correctA == buttons[2].id) {
            points++;
        }
        changeQuestion();
    });    
}
