const allTaskList = document.getElementById("all_task_list_1")
const toDoTaskList = document.getElementById("pendientes")
const taskComplete = document.getElementById("completados")

let pendientes = [];
let completados = [];

/// Create the arrays
const allTaskListNav = [
    {
        nombre: "Sacar la basura a las 9 am",
        estado: false
    },

    {
        nombre: "Comprar 500 de cilantro",
        estado: false
    },

    {
        nombre: "Lavar la ropa",
        estado: false
    },

    {
        nombre: "Limpiar arenero de los gatos",
        estado: false
    },

    {
        nombre: "Visitar a los panas",
        estado: false
    },
]


let dato ;
let c = '';

allTaskListNav.forEach(element => {
    c += `<li class = "elementos pendientes">${element.nombre}</li>`;
});

allTaskList.innerHTML = `<ul>
${c}
</ul>`;


const elementosLista = document.getElementsByClassName('elementos');


// condición para tachar y destachar las tareas
for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i].addEventListener("click", () => {
        pendientes = [];
        completados = [];
        if (elementosLista[i].className === "elementos pendientes") {
            elementosLista[i].className = "elementos hecho"
            dato = elementosLista[i].innerHTML;
        } else {
            elementosLista[i].className = "elementos pendientes"
            dato = elementosLista[i].innerHTML;
        }
        allTaskListNav.forEach(element =>{
            if (dato === element.nombre){
                element.estado = !element.estado
            }
            if (!element.estado){
                pendientes.push(element);
            } else {
                completados.push(element)
            }
        }) 
        
        creaListas();

        console.log(pendientes);
        console.log(completados);
    })

}

function creaListas(){

    let listaCompletas = '';
    let listaPendientes = '';

    completados.forEach(element => {
        listaCompletas += `<li class = "elementos hecho">${element.nombre}</li>`;
    });

    pendientes.forEach(element => {
        listaPendientes += `<li class = "elementos pendientes">${element.nombre}</li>`;
    });

    taskComplete.innerHTML = `<ul>
    ${listaCompletas}
    </ul>`;

    toDoTaskList.innerHTML = `<ul>
    ${listaPendientes}
    </ul>`;

}

