window.onload = function () {


    document.getElementById("articles").style.color = "#B4EDEB";
    document.getElementById("TArticles").style.fontWeight = "bold";
    document.getElementById("articless").src ="img/Articles_Selec.png";


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

    function cambiaCateg() {
        let selection = this;
        document.location.href = "Categories.html?seleccio=" + selection;
    }

    let imatges = document.getElementsByClassName("child");
    for (let i = 0; i < imatges.length; i++) {
        imatges[i].addEventListener("click", function () {
            if (imatges[i].className == "child c1") {
                cambiaCateg();
                localStorage.setItem('which', 1);
            }

            if (imatges[i].className == "child c2") {
                cambiaCateg();
                localStorage.setItem('which', 2);
            }

            if (imatges[i].className == "child c3") {
                cambiaCateg();
                localStorage.setItem('which', 3);
            }

            if (imatges[i].className == "child c4") {
                cambiaCateg();
                localStorage.setItem('which', 4);
            }
        });
    }
}