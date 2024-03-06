// primeiro precisamos do document.querySelector para seleionar eventos input e bottun
const inputTarefa = document.querySelector('.input-tarefa');
const btdTarefa = document.querySelector('.btd-tarefa');
const tarefas = document.querySelector('.tarefas');

function criali(){
    // só cria uma lista 'li'
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
 if (e.keyCode ===13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
 }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaButtonApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerTetx = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar tarefa');
    li.appendChild(botaoApagar);
}

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
btdTarefa.addEventListener('click',function(){
    //se o inputTarefa for diferente de value não haver nada retorna vazio
    if (!inputTarefa.value) return;
    //se não é mostrado essa mensagem no console
    //console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

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


function addTarefasSlvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarega of listaTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSlvas()