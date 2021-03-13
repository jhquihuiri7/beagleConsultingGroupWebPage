let textoSetionElegirnos = document.getElementById("texto_setion_elegirnos");

let datos = [{
    titulo: "Nuestros Recursos",
    descripcion: "Poseemos un grupo de profesionales que busca tu exito, contamos con asesores prestos a brindarte soluciones innovadoras mediante procesos estrategicos de consultoria. Somos un grupo multicompetente por lo que tenemos conocimientos en áreas legales y financieras, indispensables para el correcto desarrollo de tu negocio.Tenemos  lo necesario para poder llevar a cabo nuestros objetivos, poseemos  los medios físicos, técnicos, técnologicos y académicos para hacerlo posible entre nuestras herramientas se encuentran : EBSCO, Lexis, tirant lo blanch, E-books, Scopus, Vlex, Lexicomp, entre otras .\n" +
        "Contamos con una área de atención para nuestros asesorados, nuestra oficina se encuentra en Av Charles Darwin y Villamil."
},{
    titulo: "Capacidad de comunicación y resiliencia",
    descripcion: "Tenemos claras nuestras metas y objetivos, sabemos que el mundo esta en un constante cambio dinámico por lo que nuestros procesos de consultoria se dan en el marco de las nuevas realidades, nos adaptamos a tus necesidades con conocimiento del mercado actual. Estamos siempre en contacto directo con nuestros clientes absolviendo sus dudas y ofreciéndoles soluciones claras. Nuestros asesores dentro de sus especialidades actúan bajo una visión compartida generando respuestas  interdisciplinarias que permiten un correcto proceso de comunicación interna, posteriormente exteriorizado en una asesoría integral."
}];

let textoSetionElegirnosTitlePrincipal = document.createElement("div");
textoSetionElegirnosTitlePrincipal.className = "texto_setion_elegirnos_title_principal";
let textoSetionElegirnosTitlePrincipalNode = document.createTextNode("¿Porqué elegirnos?");
textoSetionElegirnosTitlePrincipal.appendChild(textoSetionElegirnosTitlePrincipalNode);
textoSetionElegirnos.appendChild(textoSetionElegirnosTitlePrincipal);
console.log("Bien Hecho")

for (j = 0 ; j < 2 ; j++){
    let textoSetionElegirnosTitle = document.createElement("div");
    textoSetionElegirnosTitle.className = "texto_setion_elegirnos_title";
    let textoSetionElegirnosTitleFc = document.createElement("div");
    let textoSetionElegirnosTitleSc = document.createElement("div");
    textoSetionElegirnosTitleFc.className = "texto_setion_elegirnos_title_fc";
    textoSetionElegirnosTitleSc.className = "texto_setion_elegirnos_title_sc";
    let textoSetionElegirnosTitleFcNode = document.createTextNode(datos[j].titulo);
    let textoSetionElegirnosTitleScNode = document.createTextNode(datos[j].descripcion);
    textoSetionElegirnosTitleFc.appendChild(textoSetionElegirnosTitleFcNode);
    textoSetionElegirnosTitleSc.appendChild(textoSetionElegirnosTitleScNode);
    textoSetionElegirnosTitle.appendChild(textoSetionElegirnosTitleFc);
    textoSetionElegirnosTitle.appendChild(textoSetionElegirnosTitleSc);
    textoSetionElegirnos.appendChild(textoSetionElegirnosTitle);
}


let sectionMisionVision = document.getElementsByClassName("mision_vision");


let misionVision = [{
    titulo: "Mision",
    descripcion: "Somos un grupo multicompetente por lo que tenemos conocimientos en áreas legales y financieras, indispensables para el correcto desarrollo de tu negocio.",
    imagen : "img/recursos/mision.svg",
},{
    titulo: "Vision",
    descripcion: "Tenemos claras nuestras metas y objetivos, sabemos que el mundo esta en un constante cambio dinámico por lo que nuestros procesos de consultoria se dan en el marco de las nuevas realidades.",
    imagen : "img/recursos/vision.svg",
}];

let contador = 0;
misionVision.forEach(({titulo, descripcion, imagen}) => {
    let title = document.createElement("div");
    let titleNode = document.createTextNode(titulo);
    title.appendChild(titleNode);

    let description = document.createElement("div");
    description.className = "description_mision_vision";
    let descriptionNode = document.createTextNode(descripcion);
    description.appendChild(descriptionNode);

    let boxFirst = document.createElement("div");
    boxFirst.id = "first_box";
    boxFirst.appendChild(title);
    boxFirst.appendChild(description);

    let figureMisionVision = document.createElement("figure");
    let imgMisionVision = document.createElement("img");
    imgMisionVision.src = imagen;
    figureMisionVision.appendChild(imgMisionVision);

    let boxSecond = document.createElement("div");
    boxSecond.id = "second_box";
    boxSecond.appendChild(figureMisionVision);

    sectionMisionVision[contador].appendChild(boxFirst);
    sectionMisionVision[contador].appendChild(boxSecond);
    contador++;
});
