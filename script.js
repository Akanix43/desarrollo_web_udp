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
