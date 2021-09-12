let divMenu =document.getElementById("card_menu");
let listMenu = [{
        item:"Inicio", href: "/"
    },{
        item:"Nosotros", href: "/nosotros"
    },{
        item:"Productos", href: "/productos"
    },{
        item:"Servicios", href: "/"
    }];
let ulMenu = document.createElement("ul");
listMenu.forEach(({item, href}) => menu(item,href));
function menu(item, href){
    let liMenu = document.createElement("li");
    let aMenu =  document.createElement("a");
    aMenu.href = href;
    let textNode = document.createTextNode(item);
    aMenu.appendChild(textNode);
    liMenu.appendChild(aMenu);
    ulMenu.appendChild(liMenu);
}
divMenu.appendChild(ulMenu);

sHeightHeader = window.innerHeight;
document.getElementById("header").style.height = sHeightHeader+"px";
console.log(sHeightHeader);
sWidthHeader = window.innerWidth - 20;

let cardMenu = document.getElementById("card_menu");
heigthCardMenu = sHeightHeader - 20;

function displayMenu(){
    let cardMenu = document.getElementById("card_menu");
    let display = cardMenu.style.display;
    if (display == ""){
        display = "none";
    }
    if (display == "none"){
        cardMenu.style.display = "block";
        gsap.from("#card_menu",{opacity: 0, duration: 1, y: -50});
    }else{
        cardMenu.style.display = "none";
    }
}

let jmediaquery = window.matchMedia( "(min-width: 767px)" )
jmediaquery.addListener(handleOrientationChange);
handleOrientationChange(jmediaquery);

function handleOrientationChange(jmediaquery) {
    if (jmediaquery.matches) {
        cardMenu.style.display = "block";
        document.getElementById("header").style.height = window.innerHeight+"px";
        gsap.from("#card_menu",{opacity: 0, duration: 2});
    }else {
        cardMenu.style.display = "none";
    }
}
let jmediaqueryHeader = window.matchMedia( "(min-width: 950px)" )
jmediaqueryHeader.addListener(handleHeaderSize);
handleHeaderSize(jmediaqueryHeader);

function handleHeaderSize(jmediaqueryHeader) {
    if (jmediaqueryHeader.matches) {
        document.getElementById("header").style.height = window.innerHeight+"px";
    }else {
        document.getElementById("header").style.height = window.innerHeight+"px";
    }
}


gsap.from("#secondHeader_principal",{opacity: 0, duration: 1, y: -50});
gsap.from("#secondHeader_secundario",{opacity: 0, duration: 1, y: 50});
gsap.from("#secondHeader_button",{opacity: 0, duration: 1, delay: 1});
gsap.from("#logo",{opacity: 0, duration: 1, x: -30});
