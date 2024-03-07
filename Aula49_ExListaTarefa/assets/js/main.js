// primeiro precisamos do document.querySelector para seleionar eventos input e bottun
//Essas linhas selecionam elementos do DOM (Document Object Model) com base em suas classes.
// Por exemplo, inputTarefa representa um elemento HTML com a classe .input-tarefa.
const inputTarefa = document.querySelector('.input-tarefa');
const btdTarefa = document.querySelector('.btd-tarefa');
const tarefas = document.querySelector('.tarefas');

function criali(){
    // só cria uma lista 'li'
    const li = document.createElement('li');
    return li;
}
// Essa função é executada quando uma tecla é pressionada no campo de entrada (inputTarefa).
//Se a tecla pressionada for a tecla Enter (código 13), verifica se o campo de entrada não
// está vazio e, em seguida, chama a função criaTarefa(inputTarefa.value).
inputTarefa.addEventListener('keypress', function(e){
 if (e.keyCode ===13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
 }
});
//Essa função limpa o campo de entrada (inputTarefa) e coloca o foco nele novamente.
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
//Essa função adiciona um botão “Apagar” a uma tarefa específica (representada pela lista li).
//O botão é criado dinamicamente e anexado à lista.
function criaButtonApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerTetx = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar tarefa');
    li.appendChild(botaoApagar);
}
//Essa função cria uma nova tarefa com base no texto fornecido (textoInput).
//Ela cria um elemento <li> (lista) e define seu conteúdo como o texto da tarefa.
//A tarefa é adicionada à lista de tarefas (tarefas).
//O campo de entrada é limpo e o botão “Apagar” é adicionado à tarefa.
//Por fim, a função salvarTarefas() é chamada para salvar as tarefas no armazenamento local.
function criaTarefa(textoInput){
    // li vai receber a lista criada
    const li = criali();
    //essa lista vai receber só o texto do input
    li.innerText = textoInput;
    //adiciona a tarefa na parte de baixo com a lista
    tarefas.appendChild(li);
    limpaInput();
    criaButtonApagar(li);
    salvarTarefas();
}
// para capiturar o evento clck utiliza-se esse addEventListener('click',function(e){})
//Essa função é executada quando o botão “Adicionar Tarefa” é clicado.
//Se o campo de entrada não estiver vazio, chama a função criaTarefa(inputTarefa.value).
btdTarefa.addEventListener('click',function(){
    //se o inputTarefa for diferente de value não haver nada retorna vazio
    if (!inputTarefa.value) return;
    //se não é mostrado essa mensagem no console
    //console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);
});
//Essa função é executada quando qualquer elemento do documento é clicado.
//Se o elemento clicado tiver a classe .apagar, ele é removido do DOM (ou seja, a tarefa é excluída).
//Em seguida, a função salvarTarefas() é chamada para atualizar o armazenamento local.
document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});
//Essa função é responsável por salvar as tarefas no armazenamento local (localStorage) do navegador.
//Primeiro, ela seleciona todas as listas de tarefas (<li>) dentro do elemento com a classe .tarefas.
//Em seguida, itera sobre cada tarefa e extrai o texto da tarefa.
//A palavra “Apagar” é removida do texto da tarefa usando replace('Apagar', '').
//Qualquer espaço em branco desnecessário é eliminado com trim().
//Os textos das tarefas são armazenados em um array chamado listaTarefas.
//O array listaTarefas é convertido para uma string JSON usando JSON.stringify().
//Por fim, a string JSON é armazenada no localStorage com a chave 'tarefas'.
    function salvarTarefas(){
        const liTarefas = tarefas.querySelectorAll('li');
        const listaTarefas = [];

        for(let tarefa of liTarefas) {
            let tarefaText = tarefa.innerText;
            tarefaText = tarefaText.replace('Apagar', '').trim();
            listaTarefas.push(tarefaText);
        }
        const tarefasJSON = JSON.stringify(listaTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }
//Essa função recupera as tarefas salvas anteriormente do localStorage.
//Ela obtém a string JSON armazenada na chave 'tarefas'.
//A string JSON é convertida de volta para um array de tarefas usando JSON.parse().
//Para cada tarefa no array, a função chama criaTarefa(tarefa) para criar e exibir a tarefa na interface.    
function addTarefasSlvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarega of listaTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSlvas()