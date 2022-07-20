let object = {
  key1: [1, 4, 5],
  key2: [4, 10, 3],
  key3: [8, 2, 6],
};

function mayorm(object) {
  let max = 0;
  let keyp = 0;
  for (let prop in object) {
    for (let i = 0; i < object[prop].length; i++) {
      if (object[prop][i] > max) {
        max = object[prop][i];
        keyp = prop;
      }
    }
  }
  return `el maximo es ${max} y se en cuentra en la key ${keyp}`;
}
console.log(mayorm(object));

// -------------------- parte b ----------------

const menor = (object) => {
  for (let key in object) {
    object[key] = object[key].sort(function (a, b) {
      return a - b;
    });
  }
  console.log(object);
  return object;
};
menor(object);

// --------------- parte c -----------------------

function suma(object) {
  for (let key in object) {
    object[key] = object[key].reduce((a, b) => a + b);
  }
  let ordenar = Object.entries(object);
  let array = ordenar.sort(function (a, b) {
    return a[1] - b[1];
  });
  let final = {};
  for (let i = 0; i < array.length; i++) {
    final[array[i][0]] = array[i][1];
  }
  console.log(final);
  return final;
}
suma(object);
//-------------- Parte d ----------------

function pares(object) {
  let auxArray = [];
  let aux = Object.entries(object);
  for (let i = 0; i < aux.length; i++) {
    for (let j = 0; j < aux[i][1].length; j++) {
      if (aux[i][1][j] % 2 === 0) {
        auxArray.push(aux[i][1][j]);
      }
    }
  }
  object.key4 = auxArray;
  // console.log(auxArray);
  console.log(object);
  return object;
}
pares(object);
