/*
Operadores Lógicos
&& -> AND -> E    TODAS PRECISAM SER VERDADEIRA PARA SER TRUE
|| -> OR -> OU    UMA EXPRESSÃO PRECISA SER VERDADEIRA PARA DAR TRUE
!  -> NOT -> NÃO  
*/
const expressAnd = true && true && true;// true && flase && true = FALSE
const expressOr =  true || false;// false || false = false
const usuario = 'Will'
const senha = 123456
const login = usuario === 'Will' && senha === 12345
console.log(expressAnd,expressOr,login)