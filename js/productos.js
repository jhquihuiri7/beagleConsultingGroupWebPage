let productos = [
    {
        tipo:"Compras Publicas",
        subprod: [
            {nombre: "Asesoria y Acompanamiento", imgRoute: "/img/productos/asesoriayacompañamiento.png"},
            {nombre: "Armado de Ofertas", imgRoute: "/img/productos/armadodeoferta.png"},
            {nombre: "Implementacion y entrenamiento", imgRoute: "/img/productos/implementacionyentrenamiento.png"},
        ],
        color: "76,11,69"
    },
    {
        tipo:"Financiero",
        subprod: [
            {nombre: "Proyectos", imgRoute: "/svg/coaching.svg"},
            {nombre: "Planes de Negocio", imgRoute: "/svg/ofertas.svg"},
            {nombre: "Estudio de factibilidad y viabilidad", imgRoute: "/img/productos/estudiosdefactibilidadyviabilidad.png"},
            {nombre: "Proyectos de Inversión", imgRoute: "/svg/entrenamiento.svg"},
        ],
        color: "138,29,68"
    },
    {
        tipo:"Jurídico",
        subprod: [
            {nombre: "Constitución de compañías", imgRoute: "/svg/coaching.svg"},
            {nombre: "Gobierno societario", imgRoute: "/svg/ofertas.svg"},
            {nombre: "Asesoría contractual", imgRoute: "/svg/entrenamiento.svg"},
            {nombre: "Propiedad intelectual, Patentes, Registro de marca", imgRoute: "/svg/entrenamiento.svg"},
            {nombre: "Personería jurídica para asociaciones", imgRoute: "/svg/entrenamiento.svg"},
            {nombre: "Transformación, Fusiones, Escisiones", imgRoute: "/svg/entrenamiento.svg"},
        ],
        color: "40,0,77"
    }
];
let colores = [
    {r:93,g:173,b:226},{r:236,g:112,b:99},{r:173,g:0,b:213},
    {r:165,g:105,b:189},{r:93,g:173,b:226},{r:222,g:49,b:99},
    {r:52,g:152,b:219},{r:26,g:188,b:156},{r:204,g:204,b:255},
    {r:244,g:208,b:63},{r:241,g:196,b:15},{r:255,g:191,b:0},
    {r:245,g:176,b:65},{r:230,g:126,b:34},{r:100,g:149,b:237},
    {r:52,g:73,b:94},{r:44,g:60,b:80},{r:88,g:24,b:69},
    {r:169,g:50,b:38},{r:118,g:68,b:138},{r:199,g:0,b:57},
    {r:40,g:116,b:166},{r:17,g:122,b:101},{r:93,g:109,b:126},
    {r:183,g:149,b:11},{r:40,g:55,b:71},{r:46,g:204,b:113},
];
let section = document.getElementById("section_uno_producto");

let producto = document.getElementById("producto");
productos.forEach(({tipo,subprod, color}) => Prodcuto(tipo, subprod, color));

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
function Prodcuto (tipo, subprod, color){
    let index = generateRandomInteger(colores.length);
    console.log(index);
    let titulo = document.createElement("div");
    titulo.className = "titulo";
    let tituloText = document.createElement("h3");
    tituloText.innerText = tipo;
    tituloText.style.color = "black";
    tituloText.setAttribute("data-aos","zoom-in-left");

    titulo.appendChild(tituloText);
    producto.appendChild(titulo);

    let cuadorTrans = document.createElement("div");
    cuadorTrans.className = "cuadrotrans";
    cuadorTrans.style.backgroundColor = "rgba("+color+",1)";
    cuadorTrans.setAttribute("data-aos","zoom-in-left");
    subprod.forEach(({nombre, imgRoute})=> {
        let cajaContenido = document.createElement("div");
        cajaContenido.className = "cajacontenido";
        let figureSub = document.createElement("figure");
        let imgSub = document.createElement("img");
        imgSub.src = imgRoute;
        imgSub.style.height = "100px";
        imgSub.style.width = "100px";
        figureSub.appendChild(imgSub);

        let subProd = document.createElement("h4");
        subProd.innerText = nombre;

        cajaContenido.appendChild(figureSub);
        cajaContenido.appendChild(subProd);
        cuadorTrans.appendChild(cajaContenido);
    });

    producto.appendChild(cuadorTrans);
    section.appendChild(producto);
}
