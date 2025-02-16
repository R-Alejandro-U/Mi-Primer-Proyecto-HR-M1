class Activity {
    constructor(id, title, description, imgUrl) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this._activities = [];
        this._currentId = 1;
    }
    
    createActivity(title, description, imgUrl) {
        const id = this._currentId;
        const activity = new Activity(id, title, description, imgUrl);
        this._activities.push(activity);
        this._currentId++;
    }
    
    deleteActivity(id){
        this._activities = this._activities.filter((activity) => activity._id !== id);
    }

    getAllActivities(){
        return this._activities;
    }
}

function creador_de_tarjeta(actividad){
    const {_id,_title, _description, _imgUrl} = actividad;
    
    const card_contenedor = document.createElement("div");
    const card_titulo = document.createElement("h3");
    const card_descripcion = document.createElement("p");
    const card_img = document.createElement("img");
    const card_img_papelera = document.createElement("img");
    const card_button = document.createElement("button");

    card_titulo.innerHTML = _title;
    card_descripcion.innerHTML = _description;
    card_img.src = _imgUrl;
    card_img.alt = _title;
    card_img_papelera.src = "/assets/img/Papelera.png";
    card_img_papelera.alt = "eliminar";

    card_contenedor.classList.add("cards");
    card_titulo.classList.add("card");
    card_descripcion.classList.add("card");
    card_img.classList.add("card");
    card_button.classList.add("bot");

    card_button.appendChild(card_img_papelera);
    card_contenedor.append(card_titulo, card_descripcion, card_img, card_button);

    card_button.addEventListener("click", () => {
        repositorio.deleteActivity(_id);
        render();
    });

    return card_contenedor;
};

const repositorio = new Repository();

const render = () =>{
    const contenedor = document.getElementById("no-hay");
    contenedor.innerHTML = "";
    const actividades = repositorio.getAllActivities();
    
    if(actividades.length === 0){
        const mensaje = document.createElement("p");
        mensaje.innerHTML = "No hay actividades.";
        contenedor.appendChild(mensaje);
    } else{
        let elementos = actividades.map(creador_de_tarjeta);
        elementos.forEach(elemento => contenedor.appendChild(elemento));
    };
}

const boton = document.getElementById("boton");

const handler = (event) => {
    event.preventDefault();
    const reinicio = document.getElementById("form");
    const titulo = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const url = document.getElementById("link").value;

    if(!titulo || !description || !url){
        return alert("Por favor, llena el formulario de forma completa.");
    };

    repositorio.createActivity(titulo, description, url);

    render();

    reinicio.reset();
}

boton.addEventListener("click", handler);
