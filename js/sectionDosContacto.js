contactoSectionDos = document.getElementById("section_dos_contacto");
const contactData = [{
    icon: "/img/logicielLogo.png",
    title: "Dirección",
    description: "Av. Isabela y Guillermo Vega Gallegos"
},{
    icon: "/img/logicielLogo.png",
    title: "Teléfonos",
    description: "(+593) 98 229 1894"
},{
    icon: "/img/logicielLogo.png",
    title: "Correo Electrónico",
    description: "beagleconsultingroup@gmail.com"
}];

contactData.forEach(({icon, title, description}) => iconsFunc(icon, title,description));

function  iconsFunc(icon, title, description) {
    divIcon = document.createElement("div");
    divIcon.style.display = "inline-block";
    divIcon.style.textAlign = "center";

    figIcon = document.createElement("figure");
    imgIcon = document.createElement("img");
    imgIcon.src = icon;
    figIcon.appendChild(imgIcon);
    divIcon.appendChild(figIcon);

    titleIcon = document.createElement("h3");
    titleIconNode = document.createTextNode(title);
    titleIcon.appendChild(titleIconNode);
    divIcon.appendChild(titleIcon);

    descriptionIcon = document.createElement("p");
    descriptionIconNode = document.createTextNode(description);
    descriptionIcon.appendChild(descriptionIconNode);
    divIcon.appendChild(descriptionIcon);

    contactoSectionDos.appendChild(divIcon);
};
