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
  return object;
};
menor(object);

// --------------- parte c -----------------------

function suma(object) {
  // aux = [];
  for (let key in object) {
    object[key] = object[key].reduce((a, b) => a + b);
    aux.push(object[key][0]);
  }
  // aux.sort(function (a, b) {
  //   return a - b;
  // });
  // return aux;
}
suma(object);
//-------------- Parte d ----------------

function pares(object) {
  for (let key in object) {
    for (let i = 0; i < object[key].length; i++) {
      if (object[key][i] % 2 === 0) {
        par.push(object[key][i]);
      }
    }
  }
}
pares();
