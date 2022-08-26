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
    c+=`<li>${element}</li>`;
    });
    
allTaskList.innerHTML=`<ul>
${c}
</ul>`;
