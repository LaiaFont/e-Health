window.onload = function(){

    document.getElementById("tests").style.color = "#B4EDEB";
    document.getElementById("TTests").style.fontWeight = "bold";
    document.getElementById("testss").src ="img/Tests_Select.png";


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





    function cambiaTest(){
        let sel = this;
        document.location.href = "Test.html?seleccio=" + sel;
    }

    let flex = document.querySelector(".flex_test");
    let span;
    let k = 0;
    for (let j = 0; j < testos.test.length; j++) { 
        if (k <= j) {
            let p = document.createElement("p");

            p.innerHTML = testos.test[j].name;
            p.style.textAlign = "justify";
            p.style.color = "#fff";
            p.style.display = "flex";
            p.style.alignItems ="flex-end";

            span = document.createElement("span");
            span.id = "t" + (k);
            span.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)), url('" + testos.test[j].image + "')"; 
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundPosition = "center";
            span.style.backgroundSize ="110%";

            span.appendChild(p);
            flex.appendChild(span);
            k++;
        }
    }

    let spans = document.querySelectorAll(".flex_test span");

    for (let i = 0; i < spans.length; i++){
        
        spans[i].addEventListener("click", function(){
            if (spans[i].id == "t"+i){
                cambiaTest();
                localStorage.setItem('whichT', i);
                localStorage.setItem(i,0);
            }
        })
    }
}