function comentarioForm() {
  return {
    nombre: '',
    comentario: '',
    estado: '', // '', 'exito' o 'error'
    enviarComentario() {
      if (this.nombre.trim() === '' || this.comentario.trim() === '') {
        this.estado = 'error';
        return;
      }
      this.estado = 'exito';
      this.nombre = '';
      this.comentario = '';
    }
  }
}