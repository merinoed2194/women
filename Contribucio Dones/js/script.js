//DONES DESPLEGABLES
const contenedores = document.querySelectorAll('.container');

contenedores.forEach(contenedor => {
    contenedor.addEventListener('click', ()=>{
        contenedor.classList.toggle('activa');
    });
});


//SLIDER
// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.getElementById('slider');
//     const images = document.querySelectorAll('#slider img');
//     let counter = 0;
//     function rotateSlider() {
//         counter = (counter + 1) % images.length;
//         const translateValue = -counter * 80;
//         slider.style.transform = `translateX(${translateValue}%)`;
//     }
//     setInterval(rotateSlider, 3000); 
// });

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("slider");
    var images = slider.getElementsByTagName("img");
    var currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        for (var i = 0; i < images.length; i++) {
        images[i].style.transform = i === currentIndex ? "translateX(0)" : "translateX(-100%)";
    }
    }

    setInterval(changeImage, 3000); // Cambia la imagen cada 3000 milisegundos (3 segundos)
});