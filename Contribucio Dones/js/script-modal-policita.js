//Declaración de variables y seleccion de elementos
let modal = document.querySelector('#modal');
let abrir = document.querySelector('#abrir');
let cerrar =document.querySelector('#cerrar');

//Funcion abrir modal
//unsamos el click para abrir la ventana modal
abrir.addEventListener('click', ()=>{
    // Al hacer click eliminamos la clase oculta modal.
    modal.classList.remove('oculta-modal');
});

//Funcion cerrar modal
cerrar.addEventListener('click', () =>{
    // Al hacer clic en el botón de cerrar, se agrega la clase "oculta-modal" al modal
    modal.classList.add('oculta-modal');
});

//Segunda función para cerrar el modal clicando en cualquier parte de la ventana del navegador, es decir fuera de la ventana modal.
window.addEventListener('click', (e) =>{
    if (e.target == modal){
        modal.classList.add('oculta-modal');
    }
});
