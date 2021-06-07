var rN;
var rN2;

window.onload = function () {

    

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

    var punts = document.getElementsByClassName("dot");

    let dots = document.querySelectorAll("span");
    var slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("card");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    var cards = document.getElementsByClassName('card');

    for (j = 0; j < cards.length; j++) {
        if (cards[j].className == "card img-1") {
            let image = document.querySelectorAll(".card img");
            image[j].src = articles.psicologic[0].image;

        }
        if (cards[j].className == "card img-2") {
            let image = document.querySelectorAll(".card img");
            image[j].src = articles.fisic[0].image;
        }
        if (cards[j].className == "card img-3") {
            let image = document.querySelectorAll(".card img");
            image[j].src = articles.covid[0].image;
        }
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function () {
            if (cards[i].className == "card img-1") {
                localStorage.setItem('which', 2);
                localStorage.setItem('active', 0);
                let sel = this;
                document.location.href = "article.html?seleccio=" + sel;
            }
            if (cards[i].className == "card img-2") {
                localStorage.setItem('which', 3);
                localStorage.setItem('active', 0);
                let sel = this;
                document.location.href = "article.html?seleccio=" + sel;
            }
            if (cards[i].className == "card img-3") {
                localStorage.setItem('which', 4);
                localStorage.setItem('active', 0);
                let sel = this;
                document.location.href = "article.html?seleccio=" + sel;
            }
        });
    }


    /******************* MITE ******************/

    let paraf = document.getElementById('Text_mite');
    
    let s = articles.sexual;
    let p = articles.psicologic;
    let f = articles.fisic;
    let c = articles.covid;
    let categ = [s,p,f,c];

    rN =   Math.floor(Math.random()*4);
    let myth = categ[rN];
    
    rN2 = Math.floor(Math.random()*(myth.length));
    let textM = myth[rN2].title;

    paraf.innerHTML = textM;
    
    document.getElementById("true").addEventListener('click', function() {
        paraf.innerHTML = "Correct Answer: " + myth[rN2].answer + "<br /> Click on the card to see the article.";
        if (document.getElementById("false").style.backgroundColor != "rgb(188, 40, 40)") {
            document.getElementById("true").style.backgroundColor = "#23B794";
        }
    });
    document.getElementById("false").addEventListener('click', function(){
        paraf.innerHTML = "Correct Answer: " + myth[rN2].answer + "<br /> Click on the card to see the article.";
        if (document.getElementById("true").style.backgroundColor != "rgb(35, 183, 148)"){
            console.log(document.getElementById("true").style.backgroundColor)
            document.getElementById("false").style.backgroundColor = "#BC2828";
        }
        
    });

    var mite = document.querySelector(".mite");
    mite.addEventListener('click', function() {
        localStorage.setItem('which', rN+1);
        localStorage.setItem('active', rN2);
        let sel = this;
        document.location.href = "article.html?seleccio=" + sel;
    });
}


