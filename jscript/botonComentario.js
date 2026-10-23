function comentarioForm() {
  return {
    nombre: '',
    comentario: '',
    estado: '',
    comentarios: [],            

    enviarComentario() {
      const nombre = this.nombre.trim();
      const texto = this.comentario.trim();

      if (nombre === '' || texto === '') {
        this.estado = 'error';
        return;
      }

      this.comentarios.push({ nombre, texto });   
      this.estado = 'exito';
      this.nombre = '';
      this.comentario = '';
    }
  }
}