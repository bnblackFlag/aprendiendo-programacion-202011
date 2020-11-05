//Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers)
//de 1 a x. Si x es negativo, haz que se muestre (print/log) “número negativo” y que la función devuelva falso.
function printUpTo(x) {
    for(i=1;i<x;i++){
        console.log(i)
        if (x<=0)
        console.log(false)
    }
}
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false

