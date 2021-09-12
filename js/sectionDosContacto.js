contactoSectionDos = document.getElementById("section_dos_contacto");
const contactData = [{
    icon: "svg/direccion.svg",
    title: "Dirección",
    description: "Av. Isabela y Guillermo Vega Gallegos",
    id: "icon1"
},{
    icon: "svg/telefono.svg",
    title: "Teléfonos",
    description: "(+593) 98 229 1894",
    id: "icon2"
},{
    icon: "svg/mail.svg",
    title: "Correo Electrónico",
    description: "beagleconsultingroup@gmail.com",
    id: "icon3"
}];

contactData.forEach(({icon, title, description, id}) => iconsFunc(icon, title,description,id));

function  iconsFunc(icon, title, description, id) {
    divIcon = document.createElement("div");
    divIcon.id = id;

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
