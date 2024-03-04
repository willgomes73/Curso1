console.log('wILL Gomes' && true &&'Ana');
/*ele checou as informações e viu que era verdadeira eretounou a ultima


FALSY avaliam se falso quando necesario
falso valor falso no literal
0 FALSO
"" '' `` FALSO
null / undefined FALSO
NaN FALSO
*/
console.log('wILL' && 'Luiza')// verdadeiro
console.log('wILL' && '' &&'Luiza')// falso

function falaoi(){
    return 'oi';
}
const vaiExecutar = true;
console.log(vaiExecutar && falaoi());

console.log(0 || false || null || 'Will' || true);
// vai retornar o primeiro valor verdadeiro a String 'Will'
// ou ne não tiver um true vai retornar a ultima false

