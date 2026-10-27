// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

var antecessor = 0
var anterior = 1

var i = 8
var nume = 1

console.log(antecessor);
console.log(anterior);

while( nume <= i){
    var atual = antecessor + anterior
    console.log(atual);
    antecessor = anterior
    anterior = atual

    nume++
}

