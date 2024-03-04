// (condição) ? 'Valor Verdadeiro' : 'Valor Falso'
const pontuacaoUsuario = 9999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? ' Vip' : ' Normal';

const corUsuario = 'Amarelo';

const corPadrao = corUsuario || 'Vermelho';

// se usuário não informar uma cor 'null' altomaticamente ora ser vermelho
console.log('O nivel do usuário é '+ nivelUsuario +' e sua cor é '+corPadrao);

/*if (pontuacaoUsuario >= 1000){
    console.log('Usuario Vip');
} else{
    console.log('Usuario Normal');
}*/

