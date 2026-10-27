// Calcule a soma de todos os números de 1 a 100 utilizando 
// um laço de repetição (USANDO O WHILE E FOR).

var numero = 1
let soma = 0

while (numero <= 100) {
    soma = soma + numero
    console.log(soma);
        
    numero ++
}


soma = 0
for(var i = 1; i <= 100; i++){
    soma = soma + i
    console.log(soma);
    
}