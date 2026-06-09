/* ============
 *  Temas
 * ============ */

const body = document.body;

const btnEstatico = document.getElementById("estatico");
const btnClaro = document.getElementById("claro");
const btnMedio = document.getElementById("medio");
const btnEscuro = document.getElementById("escuro");

btnEstatico.addEventListener("click", () => {
  body.className = "estatico";
  localStorage.setItem("theme", "estatico");
});

btnClaro.addEventListener("click", () => {
  body.className = "claro";
  localStorage.setItem("theme", "claro");
});

btnMedio.addEventListener("click", () => {
  body.className = "medio";
  localStorage.setItem("theme", "medio");
});

btnEscuro.addEventListener("click", () => {
  body.className = "escuro";
  localStorage.setItem("theme", "escuro");
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "estatico";
  body.className = theme;
});

/* ============
 *  Slide
 * ============ */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

/* ============
 *  Quiz
 * ============ */

const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const respostasContainer = document.getElementById("respostas");

let respostas = [];

const mountPergunta = (pergunta) => {
  const prompt = document.getElementById("prompt");
  const resp1 = document.getElementById("resp-1");
  const resp2 = document.getElementById("resp-2");
  const resp3 = document.getElementById("resp-3");
  const resp4 = document.getElementById("resp-4");
  const resp5 = document.getElementById("resp-5");

  prompt.textContent = pergunta.prompt;
  resp1.textContent = pergunta.alternativas[1];
  resp2.textContent = pergunta.alternativas[2];
  resp3.textContent = pergunta.alternativas[3];
  resp4.textContent = pergunta.alternativas[4];
  resp5.textContent = pergunta.alternativas[5];
};

const showResult = () => {
  let score = 0;

  for(let i in respostas) {
    if(respostas[i] == perguntas[i].correta) score++;
  }

  document.getElementById("result").textContent =
    `${score}/${perguntas.length}`;
};

startBtn.addEventListener("click", () => {
  const start = document.getElementById("start");
  const pergunta = document.getElementById("pergunta");

  start.classList.add("hidden");
  pergunta.classList.remove("hidden");

  mountPergunta(perguntas[0]);
});

respostasContainer.addEventListener("click", (e) => {
  if (e.target.matches("button.btnResposta")) {
    const pergunta = document.getElementById("pergunta");
    const nextIdx = +pergunta.getAttribute("number") + 1;

    const last = nextIdx === perguntas.length;

    respostas.push(e.target.getAttribute("alternativa"));

    if (last) {
      const final = document.getElementById("final");

      pergunta.setAttribute("number", 0);

      pergunta.classList.add("hidden");
      final.classList.remove("hidden");

      showResult();

      respostas = []

      return;
    }

    mountPergunta(perguntas[nextIdx]);
    pergunta.setAttribute("number", nextIdx);
  }
});

nextBtn.addEventListener("click", () => {
  const final = document.getElementById("final");
  const start = document.getElementById("start");

  final.classList.add("hidden");
  start.classList.remove("hidden");
});
