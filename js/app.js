const modalImagen = document.querySelector('#modal-imagen')

modalImagen.addEventListener('show.bs.modal', (e) => {
    const enlace = e.relatedTarget
    const rutaImagen = enlace.getAttribute('data-bs-imagen')

    // Construir imagen
    const imagen = document.createElement('img')
    imagen.src = `img/${rutaImagen}.jpg`
    imagen.classList.add('img-fluid')
    imagen.alt = 'imagen galería'

    // Asignar al modal
    const contenidoModal = document.querySelector('.modal-body')
    contenidoModal.appendChild(imagen)
})

modalImagen.addEventListener('hidden.bs.modal', () => {
    const contenidoModal = document.querySelector('.modal-body')
    contenidoModal.firstChild.remove()
})