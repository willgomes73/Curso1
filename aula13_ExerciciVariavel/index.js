let varA = 'A';
let varB = 'B';
let varC = 'C';
let varAuxiliar;
/*
varAuxiliar = varA;
varA = varB;
varB = varC;
varC = varAuxiliar;
*/
[varA, varB, varC] = [varB, varC, varA] //moderno
console.log(varA, varB, varC)