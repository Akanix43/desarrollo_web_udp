document.getElementById("btn-publicar").addEventListener("click", function() {
    let nombre = document.getElementById("caja-nombre").value;
    let comentario = document.getElementById("caja-texto").value;

    if(nombre == "" || comentario == "") {
        alert("Necesita escribir un nombre y un comentario");
        return;
    }
    
    let cajaComentariosAntiguos = document.querySelector(".comentario");
    cajaComentariosAntiguos.innerHTML += "<br><br><p>" + nombre + "</p><p>" + comentario + "</p>";
    
    document.getElementById("caja-nombre").value = "";
    document.getElementById("caja-texto").value = "";
});