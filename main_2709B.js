document.querySelectorAll('.botao').forEach(btn => {
  btn.addEventListener('click', function(){
      document.querySelectorAll('.aba-conteudo').forEach(tab => {
          tab.classList.remove('ativo');
      });
      const index = Array.from(document.querySelectorAll('.botao') ).indexOf(this);
      document.querySelectorAll('.aba-conteudo')[index].classList.add('ativo');
      document.querySelectorAll('.botao')[index].classList.add('ativo');
  });
});

const botoes = document.querySelectorAll('.botao');
for(let i=0;i <botoes.length;i++){
  botoes[i].onclick = function (){
      for(let j=0;j<botoes.length;j++){
          botoes[j].classList.remove('ativo');{
              botoes[i].classList.add('ativo');
             }  } }}

const contadores = document.querySelectorAll('.contador');
contadores[0].textContent = "Contagem regressiva";
const tempoobjetivo1 = new Date("2024-09-26t00:00:00");
const tempoobjetivo2 = new Date("2024-12-18t00:00:00");
const tempoobjetivo3 = new Date("2025-01-18t00:00:00");
const tempoobjetivo4 = new Date("2025-02-18t00:00:00");

const tempos =
[tempoobjetivo1, tempoobjetivo2, tempoobjetivo3, tempoobjetivo4];

//  contadores[0].textContent = calculaTempo(tempos[0]);

let tempoAtual = new Date();
//    contadores[0].textContent = calculaTempo(tempos[0]);
//    contadores[1].textContent = calculaTempo(tempos[1]);
//    contadores[2].textContent = calculaTempo(tempoobjetivo3);
//    contadores[3].textContent = calculaTempo(tempoobjetivo4);

 
 function calculaTempo(tempoobjetivo) {
  let tempoAtual = new Date();
  let tempofinal = tempoobjetivo - tempoAtual;
  let segundos =  Math.floor(tempofinal/ 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %=60;
  minutos %=60;
  horas %=60;

  if (tempofinal > 0) {
  return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
  } else {
    return 'Prazo Finalizado';
 }
}

 function atualizaCronometro(){
  for (let i=0; i<contadores.length;i++){
      contadores[i].textContent = calculaTempo(tempos[i]);
  }
}
 function comecaCronometro(){
 atualizaCronometro();
 setInterval(atualizaCronometro, 1000);}
//  comecaCronometro();
