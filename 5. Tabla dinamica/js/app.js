import { personas } from './data.js';
import { crearTabla } from './tablaDinamica.js';



const divTabla = document.querySelector(".divTabla");
divTabla.addEventListener('click', (e) => {
    const emisor = e.target;

    if (emisor.matches("tbody tr td")) {
        console.log(emisor)
        let id = emisor.parentElement.dataset.id;
        console.log(id);
    }
});



document.getElementById('btnMostrarPersonas').
    addEventListener("click", () => {
        document.querySelector('.divTabla').
            appendChild(crearTabla(personas))
    })




