//IIFE função que é criada e se auto chama
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

        function recebeEventoForm(evento){
        evento.preventDefault();
        /*console.log(`Form não foi ENIADO!${cont}`);
        cont++;*/
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

            pessoa.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });
            console.log(pessoa)

            resultado.innerHTML += `<p>Seu nome é ${nome.value} ${sobrenome.value}</p> ` +
            `<p> Seu peso é ${peso.value} e sua altura é de ${altura.value}</p>`;

        
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

/*form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1)
        console.log('Foi    Enviado')
    };*/
    //let cont = 1;