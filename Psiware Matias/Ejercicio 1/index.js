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
function pares() {
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
pares();
