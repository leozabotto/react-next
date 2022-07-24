function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('BAD VALUE ');
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo);
  })
}

/*esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e => {
    console.log('ERRO:', e);
  });

console.log('Isso aqui será exibido antes de qualquer promise');
*/

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  // esperaAi(1000, 1000),
]

// Pro Se uma das promessas é rejeitada, todas rejeitam

/*Promise.all(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  })
*/

/*Promise.race(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  })
*/

function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));