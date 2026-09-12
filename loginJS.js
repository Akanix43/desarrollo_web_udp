/*inicio de sesión*/
document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje");

    if(formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault();

            const correoIngresado = document.getElementById("correo").value;
            const claveIngresada = document.getElementById("clave").value;
            
            if(correoIngresado !== "" && claveIngresada.length >= 6) {
                mensaje.style.color = "green";
                mensaje.textContent = "Sesión Iniciada";
                localStorage.setItem("usuarioLogeado", "true");
                
                setTimeout(function() {
                    window.location.href = "index.html";
                }, 1000);
            
            }
            else {
                mensaje.style.color = "red";
                mensaje.textContent = "Error: Contraseña demasiado corta";
            }
        }); 
    }
});