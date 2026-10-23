function comentarioForm() {
  return {
    nombre: '',
    comentario: '',
    estado: '', // '', 'exito' o 'error'
    enviarComentario() {
      const nombre = this.nombre.trim();
      const texto = this.comentario.trim();
 
      if (nombre === '' || texto === '') {
        this.estado = 'error';
        return;
      }
 
      // Este es el paso que faltaba: guardar el comentario en la lista.
      // La plantilla x-for del HTML lo dibuja dentro de la caja .comentario.
      this.comentarios.push({ nombre, texto });
 
      this.estado = 'exito';
      this.nombre = '';
      this.comentario = '';
    }
  }
}