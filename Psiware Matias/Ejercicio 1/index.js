function mayor() {
  let array = [1, 10, 6, 8, 15, 2];
  let mayor = 0;
  let posicion = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
      posicion = i;
    } else {
      mayor = mayor;
      posicion = posicion;
    }
  }
  return mayor, posicion;
}
mayor();

let array = [1, 10, 6, 8, 15, 2];
let m = Math.max(...array);
console.log(m);

// ------------ Parte 2 --------------
function ordenar(array) {
  let array = [1, 10, 6, 8, 15, 2];
  let flag = true;
  while (flag === true) {
    flag = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        flag = true;
      }
    }
  }
  return array;
}
ordenar();
//----------------- 2a ------------------------
function parpos() {
  let array = [1, 10, 6, 8, 15, 2];
  let par = [];
  let posicion = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      par.push(array[i]);
      posicion.push(i);
    } else {
      par = par;
      posicion = posicion;
    }
  }
  return par, posicion;
}
parpos();

function arraypar() {
  let array = [1, 10, 6, 8, 15, 2];
  let par = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      par.push(array[i]);
    } else {
      par = par;
    }
  }
  return par;
}
arraypar();
