/* ┌─────────┐
   │  Temas  │
   └─────────┘ */


const body = document.body;

const btnEstatico = document.getElementById("estatico");
const btnClaro = document.getElementById("claro");
const btnMedio = document.getElementById("medio");
const btnEscuro = document.getElementById("escuro");

btnEstatico.addEventListener("click", ()=>{

    body.className = "estatico";
    
});

btnClaro.addEventListener("click", ()=>{

    body.className = "claro";

});

btnMedio.addEventListener("click", ()=>{

    body.className = "medio";

});

btnEscuro.addEventListener("click", ()=>{

    body.className = "escuro";

});

/* ┌─────────┐
   │  Slide  │
   └─────────┘ */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
