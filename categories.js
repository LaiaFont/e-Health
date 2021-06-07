
 document.getElementById("articles").style.color = "#B4EDEB";
 document.getElementById("TArticles").style.fontWeight = "bold";
 document.getElementById("articless").src ="img/Articles_Selec.png";


let flex = document.querySelector("section.flex_test");
let span;
let k = 0;

//------Creació d'articles depenent de la categoria------
if (localStorage.getItem('which') == 1) {
    for (let j = 0; j < articles.sexual.length; j++) { //passarli la categoria en la que està
        if (k <= j) {
            let p = document.createElement("p");

            p.innerHTML = articles.sexual[j].title;
            p.style.textAlign = "justify";
            p.style.color = "#fff";
            p.style.display = "flex";
            p.style.alignItems ="flex-end";

            span = document.createElement("span");
            span.id = "t" + (k);
            span.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)), url('" + articles.sexual[j].image + "')";
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundPosition = "center";
            span.style.backgroundSize = "110%";

            span.appendChild(p);
            flex.appendChild(span);
            k++;
        }
    }
    k = 0;
} else if (localStorage.getItem('which') == 2) {
    for (let j = 0; j < articles.psicologic.length; j++) { //passarli la categoria en la que està
        if (k <= j) {
            let p = document.createElement("p");

            p.innerHTML = articles.psicologic[j].title;
            p.style.textAlign = "justify";
            p.style.color = "#fff";
            p.style.display = "flex";
            p.style.alignItems ="flex-end";

            span = document.createElement("span");
            span.id = "t" + (k);
            span.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)), url('" + articles.psicologic[j].image + "')";
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundPosition = "center";
            span.style.backgroundSize = "110%";

            span.appendChild(p);
            flex.appendChild(span);
            k++;
        }
    }
    k = 0;
} else if (localStorage.getItem('which') == 3) {
    for (let j = 0; j < articles.fisic.length; j++) { //passarli la categoria en la que està
        if (k <= j) {
            let p = document.createElement("p");

            p.innerHTML = articles.fisic[j].title;
            p.style.textAlign = "justify";
            p.style.color = "#fff";
            p.style.display = "flex";
            p.style.alignItems ="flex-end";

            span = document.createElement("span");
            span.id = "t" + (k);
            span.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)), url('" + articles.fisic[j].image + "')";
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundPosition = "center";
            span.style.backgroundSize = "110%";

            span.appendChild(p);
            flex.appendChild(span);
            k++;
        }
    }
    k = 0;
} else if (localStorage.getItem('which') == 4) {
    for (let j = 0; j < articles.covid.length; j++) { //passarli la categoria en la que està
        if (k <= j) {
            let p = document.createElement("p");

            p.innerHTML = articles.covid[j].title;
            p.style.textAlign = "justify";
            p.style.color = "#fff";
            p.style.display = "flex";
            p.style.alignItems ="flex-end";

            span = document.createElement("span");
            span.id = "t" + (k);
            span.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)), url('" + articles.covid[j].image + "')";
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundPosition = "center";
            span.style.backgroundSize = "110%";

            span.appendChild(p);
            flex.appendChild(span);
            k++;
        }
    }
    k = 0;
}

//------Entrar a l'article seleccionat------
function cambiaArticle() {
    let selection = this;
    document.location.href = "article.html?seleccio=" + selection;
}

let spans = document.querySelectorAll('.flex_test span');

for (let a = 0; a < spans.length; a++) {
    spans[a].addEventListener('click', function () {
        if (spans[a].id == "t" + a) {
            cambiaArticle();
            localStorage.setItem('active', a);
        }
    });

}
