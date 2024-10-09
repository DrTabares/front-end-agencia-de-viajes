import { inicio, cartagena, santaMarta, sanAndres, amazonas, formulario } from './destinos.js'

//el DOM es una representación estructurada de un documento html la interacción 
//con el DOM me permite hacer interacciones dinamicas con la pagina web, el DOM se organiza como 
//arbol de nodos donde cada nodo es un objeto con funcines especificas

// Obtención de los elementos del DOM (document object model) 
let enlaces = document.querySelectorAll('a') //query es una consulta que se hace a todos los elementos con la etiqueta a que esta en el html y se guarda en la variable enlaces
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {    //enlaces es el array iterable de las 4 ciudades de la lista y la funcion enlace es cada elemento que se muestra de forma individual
    enlace.addEventListener('click', function () {     //este es el onclick del html pero programado directamente desde JS
       
        // remover elemento activo 
       enlaces.forEach(function (enlace) {
            enlace.classList.remove('active'); // for each recorre los 4 elementos y .remove quita el que esté activo
       });

       // agregar active al elemento que corresponda this llama a la función enlace
       this.classList.add('active')

        // traer la información del elemento elegido con active
        let contenido = obtenerContenido(this.textContent)  //textcontent obtiene el contenido del que hicimos click

        // mostrar contenido en el DOM (en elhtml)
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo

    });  
});  

// funcion para traer la información correcta desde destinos.js
function obtenerContenido(enlace){
    let contenido = {
        'Inicio': inicio,
        'Cartagena': cartagena, //el string es el nombre que esta en html y el azul es el nombre del objeto que esta en destino.js de esta forma se accede al objeto y su información
        'Santa Marta': santaMarta,
        'San Andrés': sanAndres,
        'Amazonas': amazonas,
        'Contacto': formulario
    };
    return contenido[enlace];
}


//los pasos anteriores se hicieron en reemplazo al class active que se coloca en cada pagina de html cuando la tenia activada