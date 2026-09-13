const btnMenu = document.getElementById('btn-menu-lateral');
const panelLateral = document.getElementById('panel-lateral');
const btnCerrar = document.getElementById('LaX');
/*
btnMenu.addEventListener('click', ()=>{

  panelLateral.classList.remove('panel-oculto');



  
});
*/
btnCerrar.addEventListener('click', ()=>{

  panelLateral.classList.add('panel-oculto');
});


btnMenu.addEventListener('click', () => {
    
    panelLateral.classList.toggle('panel-oculto');
});




/*DINAMICO BUSCADOR*/

const peliculas=["Cars", "Interstellar", "Rocky"];

const miFormulario = document.getElementById('miFormulario');
const busqueda = document.getElementById('Busqueda');
const Resultados = document.getElementById('Resultados');

miFormulario.addEventListener("submit", function(event){

  event.preventDefault();  


  const texto = busqueda.value.trim();
  
  Resultados.className="mensaje-resultado";

  if(texto == ""){

    Resultados.innerHTML = "Dato invalido";

  }else if(texto == "Cars" || texto == "Interstellar" || texto == "Rocky"){

    Resultados.innerHTML="Exito, pelicula encontrada";
    
  }else{

    Resultados.innerHTML = "Error";

  }

});










