//=================================================================================================================//
function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);              // resultado es 2, 3
//=================================================================================================================//
function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2)); // RESULTADO ES 6, 10
//=================================================================================================================//
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
i = i + 3; 
console.log(i);
}                           //RESULTADO ES 3 , 7
//=================================================================================================================//
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);             // RESULTADO ES 15, 15, 10, 15
//=================================================================================================================//
for(var i=0; i<15; i+=2) {
    console.log(i);
}                           // RESULTADO ES 0, 2, 4, 6, 8, 10, 12, 14
//=================================================================================================================//
for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {      
        console.log(i*j);
    }
}                           // RESULTADO ES 0, 1, 0, 2
//=================================================================================================================//
function looping(x,y) {
    for(var i=0; i<x; i++) {
        for(var j=0; j<x; j++) {
            console.log(i*j);
        } 
    }
}
z = looping(3,3);
console.log(z);             //RESULTADO ES 0, 1, 2, 0, 2, 4
//=================================================================================================================//
function looping(x,y) {
    for(var i=0; i<x; i++) {
        for(var j=0; j<y; j++) {
            console.log(i*j);
        } 
    }
    return x*y;
}
z = looping(3,5);
console.log(z);              //0, 1, 2, 3, 4, 0, 2, 4, 6, 8 , 15

//=================================================================================================================//


//Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers)//
//de 1 a x. Si x es negativo, haz que se muestre (print/log) “número negativo” y que la función devuelva falso.//
function printUpTo(x) {
    if (x<0){
        console.log(false)
    }
    for(i=1;i<=x;i++){
        console.log(i)
        
        
    }
}
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false


//================================================================================================================//

//Completa el código de más abajo para que la función imprima enteros (integers)
//de 0 a x y donde cada entero imprima la suma (sum) parcial. Haz que la función
// entregue la suma final.

function printSum(x) {
    var sum = 0;
    for(i=0;i<=x;i++){
        console.log(i)
        sum=sum+i
        console.log(sum)
    }
    
    return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640

//===================================================================================================================//

//Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.

function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
    sum = x[i] + x.length;
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6
