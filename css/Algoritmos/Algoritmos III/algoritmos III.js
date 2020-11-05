/* 1 */
function a(x, y) { //x=5, y=5
    return 5;
}
a(5, 5)

console.log(a(5, 5)) //console.log(5); 5
function a(x, y) { //x=4, y=2
    return x + y;
}
console.log(a(4, 2))

function a(x, y, z, w, q, e, r, t, y, u, i, o) {
    return "hola";
}

console.log(a("a", "z", 1, 2, 3, 4, 5, 66, 7, 8, 9)) //"hola"

var x = 5 //x=15>23

function prueba(variable1) {

    x = x + 7
    return x
}

console.log(prueba(10))
prueba(8)
console.log(x) //23

console.log(prueba(1234))

function prueba2(x, y) { //x=3,y=2
    if (x > y) {
        return true
    } else {
        return false
    }
}

console.log(prueba2(2, 3)) //false
console.log(prueba2(3, 2)) //true

function division(a, b) { //a=9,b=3
    if (b != 0) {
        return a / b; //3
    } else {
        return "no se puede dividir por cero"
    }
}

console.log(division(3, 0)) //"no se puede dividir por cero"
console.log(division(9, 3)) //3
console.log(division(952341, 453)) //

/*** */
function a(x, y) { //x=6,y=8
    z = [] //z=[6,8,5]
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z); //[6,8,5]
    return z;
}

b = a(2, 2) //b = [2,2,5]
console.log(b); //console.log([2,2,5]);//[2,2,5]

console.log(a(6, 8)); //console.log([6,8,5]);//[6,8,5]


function matriz(x) { //x=2
    z = []; //z=[2,2]
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z; //[2,2]
}
y = matriz(2); //y = [2,2]
y.push(5); //y=[2,2,5]
console.log(y); //[2,2,5]
y.pop()
console.log(y); //[2,2]

/** */
function matriz2(x) { //x=[2, 3, 4, 5]
    if (x[0] < x[1]) { //if (2 < 3) {
        return true;
    } else {
        return false;
    }
}
b = matriz2([2, 3, 4, 5]) //b=true
console.log(b); //true
//[2, 3, 4, 5]
//length:4

function printUpTo(x) { //x=-10
    // your code here
    if (x < 0) {
        console.log(false)
        return false;
    }
    for (var i = 1; i <= 1000; i++) { //i=1>2>3>4...999>1000>1001
        console.log(i); //1,2,3...999,1000
    }

}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000

y = printUpTo(-10); // false
console.log(y);

function impares(){
    misimpares = []//[1,3,5,...49]
    for(var i = 1; i<=50; i+=2){
        misimpares.push(i);
    }
    return misimpares
}

y = impares()//y= [1,3,5,...49]
console.log(y) //[1,3,5,...49]