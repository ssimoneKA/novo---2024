document.querySelectorAll('.botao').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.aba-conteudo').forEach(tab => {
      tab.classList.remove('ativo');
    });
    const index = Array.from(document.querySelectorAll('.botao')).indexOf(this);
    document.querySelectorAll('.aba-conteudo')[index].classList.add('ativo');
  });
});

const contadores = document.querySelectorAll('.contador');
contadores[0].textContent = 'Contagem regressiva';
const tempoobjetivo1 = new Date("2024-11-18T00:00:00");
const tempoobjetivo2 = new Date("2024-12-18T00:00:00");
const tempoobjetivo3 = new Date("2025-01-18T00:00:00");
const tempoobjetivo4 = new Date("2025-02-18T00:00:00");
let tempoAtual = new Date();

// contadores[0].textContent =  calculaTempo(tempoobjetivo1);
// contadores[1].textContent =  calculaTempo(tempoobjetivo2);
// contadores[2].textContent =  calculaTempo(tempoobjetivo3);
// contadores[3].textContent =  calculaTempo(tempoobjetivo4);

const tempo =
[tempoobjetivo1, tempoobjetivo2, tempoobjetivo3, tempoobjetivo4];
// contadores[0].textContent = calculaTempo(tempo[0]);
// contadores[1].textContent = calculaTempo(tempo[1]);
// contadores[2].textContent = calculaTempo(tempo[2]);
// contadores[3].textContent = calculaTempo(tempo[3]);

for (let i = 0; i < contadores.lenght; i++) {
  contadores[i].textContent = calculaTempo(tempo[i]);
}


const botoes = document.querySelectorAll('.botao');
for(let i=0;i ,botoes.length;i++){
  botoes[i].onclick = function() {
    for(let j=0;j<botoes.length;j++) {
      botoes[j].classList.remove('ativo'); }
    botoes[i].classList.add('ativo');} 
    } 
    
 function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor (tempoFinal / 1000);
  let minutos = Math.floor (segundos / 60);
  let horas = Math.floor (minutos / 60);
  let dias = Math.floor (horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return dias + " d " + horas + " h " + minutos + " m " + segundos + " s ";
 } 

 function atualizaCronometro(){
  for (let i=0; i<contadores.length;i++){
    contadores[i].texteContent = calculaTempo(tempos[i]);
  }
}
 atualizaCronometro();

 


