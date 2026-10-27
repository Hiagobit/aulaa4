// Imprima todos os números IMPARES de 1 a 50 utilizando
//  um laço de repetição (USANDO O DO WHILE, WHILE E FOR).
var numero = 1

do{
    if( numero % 2 >= 1){
        console.log(numero);
        
    }
    numero++
}while(numero <= 50)


var numero = 1

while(numero <= 50){
    if (numero % 2 >= 1){
        console.log(numero);
        
    }
    numero++
}

for( var i = 1; i <= 50; i++){
    if( i % 2 >= 1){
        console.log(i);
        
    }
}