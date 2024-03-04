function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        //console.log('quero café');
        throw  new TypeError('Esperando instância de Date.')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', { hour12: false})  
}
try{
    const data = new Date('07-05-2002 12:45:07')
    const hora = retornaHora();
    console.log(hora);
} catch (err){
    // trarar erro
    console.log(err,'         erro na formatação da Data');
} finally {
    console.log ('Bom dia!!');
}


//retornaHora(new Date); vai passar por conta que passei a instância new Date como data



/*try {
    // É executado quando não há erros 
    console.log('abri uma arquivo');
    console.log(a);
    console.log('Manipulei o arquivo e gerou erro');
    //console.log('Fechei o arquivo');
} catch(err) {
    // É executado quando há erros
    console.log('Tratando erro');
} finally {
    //sempre
    console.log('Eu sempre sou executado');
    console.log('Fechei o arquivo');
}*/
// No try foi acusado um erro no ex o programa abriu um arquivo
// É concelhavel que independente do caso o arquivo ou etc se
// feicha sózinho é usado o FINALLY que é ececutado sempre
// temdo erro ou não