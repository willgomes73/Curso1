const numero = Number(prompt('Informe um Numero:'));
const numeroTitulo =  document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro:${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>é NaN:${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo:${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima:${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Como duas casas decimais:${numero.toFixed(2)}</p>`;
