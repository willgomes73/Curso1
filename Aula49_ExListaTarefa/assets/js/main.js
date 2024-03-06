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

function criaTarefa(textoInput){
    // li vai receber a lista criada
    const li = criali();
    //essa lista vai receber só o texto do input
    li.innerText = textoInput;
    //adiciona a tarefa na parte de baixo com a lista
    tarefas.appendChild(li);
    limpaInput();
}


// para capiturar o evento clck utiliza-se esse addEventListener('click',function(e){})
btdTarefa.addEventListener('click',function(){
    //se o inputTarefa for diferente de value não haver nada retorna vazio
    if (!inputTarefa.value) return;
    //se não é mostrado essa mensagem no console
    //console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);
});
