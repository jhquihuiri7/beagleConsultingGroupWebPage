let textoSetionElegirnos = document.getElementsByClassName("texto_setion_elegirnos");

let datos = [{
    titulo: "Nuestros Recursos",
    descripcion: "Poseemos un grupo de profesionales que busca tu exito, contamos con asesores prestos a brindarte soluciones innovadoras mediante procesos estrategicos de consultoria. Somos un grupo multicompetente por lo que tenemos conocimientos en áreas legales y financieras, indispensables para el correcto desarrollo de tu negocio."
},{
    titulo: "Capacidad de comunicación y resiliencia",
    descripcion: "Tenemos claras nuestras metas y objetivos, sabemos que el mundo esta en un constante cambio dinámico por lo que nuestros procesos de consultoria se dan en el marco de las nuevas realidades, nos adaptamos a tus necesidades con conocimiento del mercado actual"
}];

for (i = 0 ; i < 2 ; i++){

    let textoSetionElegirnosTitlePrincipal = document.createElement("div");
    textoSetionElegirnosTitlePrincipal.className = "texto_setion_elegirnos_title_principal";
    let textoSetionElegirnosTitlePrincipalNode = document.createTextNode("¿Porqué elegirnos?");
    textoSetionElegirnosTitlePrincipal.appendChild(textoSetionElegirnosTitlePrincipalNode);
    textoSetionElegirnos[i].appendChild(textoSetionElegirnosTitlePrincipal);
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
        textoSetionElegirnos[i].appendChild(textoSetionElegirnosTitle);
    }

    let textoSetionElegirnosButton = document.createElement("a");
    textoSetionElegirnosButton.href = "/nosotros";
    textoSetionElegirnosButton.className = "texto_setion_elegirnos_button";
    let textoSetionElegirnosButtonDiv = document.createElement("div");
    let textoSetionElegirnosButtonDivNode = document.createTextNode("Saber más");
    textoSetionElegirnosButtonDiv.appendChild(textoSetionElegirnosButtonDivNode);
    textoSetionElegirnosButton.appendChild(textoSetionElegirnosButtonDiv);
    textoSetionElegirnos[i].appendChild(textoSetionElegirnosButton);
}