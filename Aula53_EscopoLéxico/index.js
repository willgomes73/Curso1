const nome = 'Will';

function falaNome(){
    console.log(nome);
}
//falaNome();//Escopo léxico estou buscando nome na bolha até o escopo global

function usaFalaNome() {
    const nome = 'Gomes';
    falaNome();
}
usaFalaNome();
//continuara executando will pois ela lembra doseu escopo e seus vizinhos onde enconrtou o nome 