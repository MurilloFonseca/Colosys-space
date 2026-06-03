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