let span = document.querySelector(".header");
let paraf = document.querySelector(".textA");
let title = document.querySelector(".title");
let info = document.querySelector(".infoA");

if (localStorage.getItem('which') == 1){
    document.title = articles.sexual[localStorage.getItem('active')].title;

    span.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+articles.sexual[localStorage.getItem('active')].image+")";
    span.style.height = "350px";
    span.style.backgroundSize = "100%";
    span.style.backgroundPosition = "center";
    span.style.backgroundRepeat = "no-repeat";
    span.style.lineHeight = "350px";
    span.style.textAlign = "center";

    title.innerHTML = articles.sexual[localStorage.getItem('active')].title;
    title.style.color = "#fff";
    title.style.fontSize = "50px";
    title.style.display = "inline-block";
    title.style.lineHeight = "normal";

    info.innerHTML = articles.sexual[localStorage.getItem('active')].date;
    info.style.padding = "20px 100px 0 100px";
    info.style.fontSize = "20px";
    title.style.paddingLeft = "20px";
    title.style.paddingRight = "20px";
    info.style.height = "10%";
    
    paraf.innerHTML = articles.sexual[localStorage.getItem('active')].text;
    paraf.style.padding = "0px 500px 0 100px";
    paraf.style.textAlign = "justify";
    paraf.style.fontSize = "24px";

} else if (localStorage.getItem('which') == 2) {
    document.title = articles.psicologic[localStorage.getItem('active')].title;

    span.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+articles.psicologic[localStorage.getItem('active')].image+")";
    span.style.height = "350px";
    span.style.backgroundSize = "100%";
    span.style.backgroundPosition = "center";
    span.style.backgroundRepeat = "no-repeat";
    span.style.lineHeight = "350px";
    span.style.textAlign = "center";

    title.innerHTML = articles.psicologic[localStorage.getItem('active')].title;
    title.style.color = "#fff";
    title.style.fontSize = "50px";
    title.style.paddingLeft = "20px";
    title.style.paddingRight = "20px";
    title.style.display = "inline-block";
    title.style.lineHeight = "normal";

    info.innerHTML = articles.psicologic[localStorage.getItem('active')].date;
    info.style.padding = "20px 100px 0 100px";
    info.style.fontSize = "20px";
    info.style.height = "10%";
    
    paraf.innerHTML = articles.psicologic[localStorage.getItem('active')].text;
    paraf.style.padding = "0px 500px 0 100px";
    paraf.style.textAlign = "justify";
    paraf.style.fontSize = "24px";

} else if (localStorage.getItem('which') == 3) {
    document.title = articles.fisic[localStorage.getItem('active')].title;

    span.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+articles.fisic[localStorage.getItem('active')].image+")";
    span.style.height = "350px";
    span.style.backgroundSize = "100%";
    span.style.backgroundPosition = "center";
    span.style.backgroundRepeat = "no-repeat";
    span.style.lineHeight = "350px";
    span.style.textAlign = "center";

    title.innerHTML = articles.fisic[localStorage.getItem('active')].title;
    title.style.color = "#fff";
    title.style.fontSize = "50px";
    title.style.paddingLeft = "20px";
    title.style.paddingRight = "20px";
    title.style.display = "inline-block";
    title.style.lineHeight = "normal";

    info.innerHTML = articles.fisic[localStorage.getItem('active')].date;
    info.style.padding = "20px 100px 0 100px";
    info.style.fontSize = "20px";
    info.style.height = "10%";
    
    paraf.innerHTML = articles.fisic[localStorage.getItem('active')].text;
    paraf.style.padding = "0px 500px 0 100px";
    paraf.style.textAlign = "justify";
    paraf.style.fontSize = "24px";

} else if (localStorage.getItem('which') == 4) {
    document.title = articles.covid[localStorage.getItem('active')].title;

    span.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+articles.covid[localStorage.getItem('active')].image+")";
    span.style.height = "350px";
    span.style.backgroundSize = "100%";
    span.style.backgroundPosition = "center";
    span.style.backgroundRepeat = "no-repeat";
    span.style.lineHeight = "350px";
    span.style.textAlign = "center";

    title.innerHTML = articles.covid[localStorage.getItem('active')].title;
    title.style.color = "#fff";
    title.style.fontSize = "50px";
    title.style.paddingLeft = "20px";
    title.style.paddingRight = "20px";
    title.style.display = "inline-block";
    title.style.lineHeight = "normal";

    info.innerHTML = articles.covid[localStorage.getItem('active')].date;
    info.style.padding = "20px 100px 0 100px";
    info.style.fontSize = "20px";
    info.style.height = "10%";
    
    paraf.innerHTML = articles.covid[localStorage.getItem('active')].text;
    paraf.style.padding = "0px 500px 0 100px";
    paraf.style.textAlign = "justify";
    paraf.style.fontSize = "24px";
}

