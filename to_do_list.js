const allTaskList = document.getElementById("all_task_list_1")

/// Create the arrays
const allTaskListNav = [
    {
        nombre:"Sacar la basura a las 9 am",
        estado:false
    },

    {
        nombre:"Comprar 500 de cilantro",
        estado:false
    },

    {
        nombre:"Lavar la ropa",
        estado:false
    },

    {
        nombre:"Limpiar arenero de los gatos",
        estado:false
    },

    {
        nombre:"Visitar a los panas",
        estado:false
    },
]



let c = '';

allTaskListNav.forEach(element => {
    c+=`<li class = "elementos pendientes">${element.nombre}</li>`;
    });
    
allTaskList.innerHTML=`<ul>
${c}
</ul>`;

const elementosLista = document.getElementsByClassName('elementos');

for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i].addEventListener("click", ()=>{
        if (elementosLista[i].className === "elementos pendientes"){
            elementosLista[i].className = "elementos hecho"
            
        } else {
            elementosLista[i].className = "elementos pendientes"
        }
    })
    
}