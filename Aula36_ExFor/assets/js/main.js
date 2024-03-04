//array de objetos
const elementos =[
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'fooder', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];
//dom 'document objetic model'
// para selecionar um elemento CONTAINER
const container = document.querySelector('.container');
//criar o elemento que vai receber 
const div = document.createElement('div');
//vai percorrer os elementos
for(let i = 0; i < elementos.length; i++) {
    //ESTA PEGANDO AS TEGS
// asociação via desistruturação
let{tag, texto} = elementos[i];
// criação dos elemento tags 'p , div, fooder, section'
let tagCriada = document.createElement(tag);
//tagCriada.innerHTML = texto;
//tagCriada.innerText = texto;
let textoCriado = document.createTextNode(texto);

tagCriada.appendChild(textoCriado);
div.appendChild(tagCriada);
//console.log(tag);
}
// DOM interface de objetos que me permite manipular
// o elemento dentro da pagina
container.appendChild(div);
