const btnMenu = document.getElementById('btn-menu-lateral');
const panelLateral = document.getElementById('panel-lateral');
const btnCerrar = document.getElementById('LaX');

btnCerrar.addEventListener('click', ()=>{

  panelLateral.classList.add('panel-oculto');
});


btnMenu.addEventListener('click', () => {
    
    panelLateral.classList.toggle('panel-oculto');
});




/*DINAMICO BUSCADOR*/

const peliculas=["Cars", "Interstellar", "Rocky", "Lalaland", "El silencio de los inocentes", "Los increibles 2",
"Resplandor de una mente sin recuerdos"];

const miFormulario = document.getElementById('miFormulario');
const busqueda = document.getElementById('Busqueda');
const Resultados = document.getElementById('Resultados');

miFormulario.addEventListener("submit", function(event){

  event.preventDefault();  


  const texto = busqueda.value.trim();
  
  Resultados.className="mensaje-resultado";

  if(texto == ""){

    Resultados.innerHTML = "Dato invalido";

  }else if(texto == "Cars" || texto == "Interstellar" || texto == "Rocky"  || texto == "Lalaland" || texto=="El silencio de los inocentes"  || texto == "Los increibles 2" || texto == "Resplandor de una mente sin recuerdos"){

    Resultados.innerHTML="Exito, pelicula encontrada";
    
  }else{

    Resultados.innerHTML = "Error";

  }

});










