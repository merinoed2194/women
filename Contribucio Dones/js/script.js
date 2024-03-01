//DONES DESPLEGABLES
const contenedores = document.querySelectorAll('.container');

contenedores.forEach(contenedor => {
    contenedor.addEventListener('click', ()=>{
        contenedor.classList.toggle('activa');
    });
});





//Para hacer que funcionen todas las modales con el código proporcionado, puedes hacer algunos cambios en tu código JavaScript. Aquí tienes una versión ajustada que funcionará con las múltiples modales:



// /**MODAL V2 */
//modal
//Declaracion de variables
let modales = document.querySelectorAll('.modal');
let abrirBotones = document.querySelectorAll('[id^="abrir"]');
let cerrarBotones = document.querySelectorAll('[id^="cerrar"]');
let anteriorBotones = document.querySelectorAll('[id^="anterior"]');
let siguienteBotones = document.querySelectorAll('[id^="siguiente"]');

// Función abrir modal
abrirBotones.forEach((abrir, index) => {
    abrir.addEventListener('click', () => {
        modales[index].classList.remove('oculta-modal');
    });
});

// Función cerrar modal
cerrarBotones.forEach((cerrar, index) => {
    cerrar.addEventListener('click', () => {
        modales[index].classList.add('oculta-modal');
    });
});

// Segunda función para cerrar el modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
    modales.forEach((modal) => {
        if (e.target === modal) {
            modal.classList.add('oculta-modal');
        }
    });
});

// Función para mostrar la modal anterior
const showPreviousModal = (index) => {
    modales[index].classList.add('oculta-modal');
    let previousIndex = (index - 1 + modales.length) % modales.length;
    modales[previousIndex].classList.remove('oculta-modal');
};

// Función para mostrar la modal siguiente
const showNextModal = (index) => {
    modales[index].classList.add('oculta-modal');
    const nextIndex = (index + 1) % modales.length;
    modales[nextIndex].classList.remove('oculta-modal');
};

// Asignar listeners a los botones de anterior y siguiente
anteriorBotones.forEach((anterior, index) => {
    anterior.addEventListener('click', () => showPreviousModal(index));
});

siguienteBotones.forEach((siguiente, index) => {
    siguiente.addEventListener('click', () => showNextModal(index));
});