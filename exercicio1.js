// Imprima todos os números pares de 1 a 20 
// utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).
console.log("PARTE 1");


var numero = 2

do{
    if(numero % 2 == 0) {
        console.log(numero);

    }    
    numero++
     

}while( numero <= 20)

console.log("PARTE 2");


var nume = 2

while ( nume <= 20){
    if (nume % 2 == 0) {
        console.log(nume);
        
    }
    nume++
    
}

console.log("PARTE 3");


for ( var i = 2; i <= 20; i++ ){
    if (i % 2 == 0){
        console.log(i);
        
    }

}

