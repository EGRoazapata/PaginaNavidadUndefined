let mostrador = document.getElementById("recuadros1");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("servicio");
let descripSeleccionada = document.getElementById("descripcion");

function cargar(item) {
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    // seleccion.style.color = "80%";
    seleccion.style.opacity = "20";
    
    item.style.border = "2px solid green";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    // descripSeleccionada.innerHTML = "Descripción del modelo ";

}

function cerrar() {
    mostrador.style.width = "0%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for(i=0; i <items.length; i++) {
        items[i].style.border = "none";
    }
}