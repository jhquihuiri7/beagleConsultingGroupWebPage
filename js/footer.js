const socialList = [{
    href : "https://www.facebook.com/Logiciel-AppLab-115115559920070",src:"socialMedia/facebook.svg",alt:"Facebook"
},{
    href:"https://www.instagram.com/beaglecg/",src:"socialMedia/instagram.svg",alt:"instagram"
},{
    href:"https://www.linkedin.com/in/jhquihuiri7/",src:"socialMedia/linkedin.svg",alt:"link"
}];

let redes = document.getElementById("redesId");

socialList.forEach(({href, src, alt}) => socialFunc(href, src, alt));

function socialFunc(href, src, alt){
    let img = document.createElement("img");
    let a = document.createElement("a");
    let div = document.createElement("div");
    div.setAttribute("class","socialDiv");
    a.href = href;
    img.src = src;
    img.alt = alt;
    a.appendChild(img);
    div.appendChild(a)
    redes.appendChild(div);
}

const lista = [{
    item:"Inicio", href: "/inicio"
},{
    item:"Nosotros", href: "/nosotros"
},{
    item:"Productos", href: "https://es.pornhubpremium.com/premium/login"
},{
    item:"Servicios", href: "https://es.pornhubpremium.com/premium/login"
}];

footerlst =  document.getElementById("menufooterId");
lista.forEach(({item, href}) => footerList(item, href));

function footerList(item, href){
    let li = document.createElement("li");
    let a = document.createElement("a");
    let node = document.createTextNode(item);
    a.appendChild(node);
    a.href = href;
    li.appendChild(a);
    footerlst.appendChild(li);
}