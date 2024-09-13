const form = document.querySelector('form');   // obtém elementos da página
const respErros = document.querySelector('.outErros');
const respChances = document.querySelector('.outChance');
const respDicas = document.querySelector('#outDica');

const erros = [];       // vetor de escopo global pecorre números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1;   // número aleatório de 1 a 100
const CHANCES = 6;      // constante com o número maxímo de chances 

form.addEventListener('submit', (e) => {        // executa o vento submit do form
  e.preventDefault();

  const num  = Number(form.inNumero.value);  // obtém o número digitado

  if(num == sorteado){   // se acertou 
    respDicas.innerHTML = "Parabéns!! O número sorteado: " + sorteado;
    form.btSubmit. disabled = true;   // troca de status dos botões
    form.btNovo.className = "exibe";
  }else{
    if(erros.includes(num)) {         // se o número existe no vetor erros (ja aposou) 
      alert('Você já apostou o número ' + num + '. Tente outro...')
    }else {
      erros.push(num);    // adicionar número ao vetor
      const numErros = erros.length;   // obtém o tamanho do vetor 
      const numChances = CHANCES - numErros;  // calcula o número de chances
      // exibe n° de erros, conteúdo do vetor e n° de chances
      respErros.innerHTML = `${numErros} (${erros.join(',')})`;
      respChances.innerHTML = numChances;
      if(numChances == 0) {
        alert("Suas chances acabaram...");
        form.btSubmit.disabled = true;
        form.btNovo.className = "exibe";
        respDicas.innerHTML = 'Game Over!! Número sorteado: ' + sorteado;
      }else{
        // usa operador ternário para mensagem de dica
        const dica = num < sorteado ? "maior" : "menor";
        respDicas.innerHTML = `Dica: Tente um número ${dica} que ${num}`;
      }
    }
  }
  form.inNumero.value = "";         // limpa o campo de entrada
  form.inNumero.focus();   // posiciona o cursor neste campo
});

form.btNovo.addEventListener('click' , () => {
  location.reload()   // recarrega a página
});