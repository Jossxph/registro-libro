var listaLibros = [];

function registrarLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const año = document.getElementById('año').value;
    const editorial = document.getElementById('editorial').value;
    const precio = document.getElementById('precio').value;
    const imagenPortada = document.getElementById('imagenPortada').files[0];

    const lector = new FileReader();
    lector.onloadend = function() {
        var libro = {
            titulo: titulo,
            autor: autor,
            año: año,
            editorial: editorial,
            precio: precio,
            imagenPortada: lector.result
        };

        listaLibros.push(libro);

        agregarLibroATabla(libro);

        console.log(listaLibros);

        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('año').value = '';
        document.getElementById('editorial').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('imagenPortada').value = '';
    };

    if (imagenPortada) {
        lector.readAsDataURL(imagenPortada);
    } else {
        alert("Por favor, sube una imagen de portada.");
    }
}

function agregarLibroATabla(libro) {
    var listaLibrosHTML = document.getElementById('listaLibros');
    var fila = document.createElement('tr');

    fila.innerHTML = '<td>' + libro.titulo + '</td>' +
                     '<td>' + libro.autor + '</td>' +
                     '<td>' + libro.año + '</td>' +
                     '<td>' + libro.editorial + '</td>' +
                     '<td>' + libro.precio + '</td>' +
                     '<td><img src="' + libro.imagenPortada + '" alt="' + libro.titulo + '"></td>';

    listaLibrosHTML.appendChild(fila);
}