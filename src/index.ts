/*Comienzo con el tipeado de datos a pedir*/
let dimensionArray: number = Number(
  prompt("Ingrese cantidad de personas a analizar")
);
let nombres: string[] = new Array(dimensionArray);
let edades: number[] = new Array(dimensionArray);
let altura: number[] = new Array(dimensionArray);

/*Ejecuto funcion para cargar datos*/
function cargarDatos(
  nombres: string[],
  edades: number[],
  altura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice <= dimension - 1; indice++) {
    nombres[indice] = String(prompt("Ingrese el nombre"));
    edades[indice] = Number(prompt("Ingrese la edad"));
    altura[indice] = Number(prompt("Ingrese la altura"));
  }
}

/*Funcion para mostrar datos en consola*/
function mostrarDatos(
  nombres: string[],
  edades: number[],
  altura: number[],
  dimension: number
) {
  for (let indice = 0; indice < dimension; indice++) {
    console.log(
      "Nombre: " +
        nombres[indice] +
        " Edad: " +
        edades[indice] +
        " Altura: " +
        altura[indice] +
        " centimetros."
    );
  }
}

/*Funcion para que la funcion ordenamiento compare valores*/
function compararValores(edades: number[], altura: number[], i: number) {
  let comparar: number = 0;
  let j: number = i + 1;
  /*El primer filtro es la edad, si son iguales, ordenar segun altura*/
  if (edades[i] === edades[j]) {
    if (altura[i] === altura[j]) {
      comparar = 0;
    } else if (altura[i] < altura[j]) {
      comparar = -1;
    } else {
      comparar = 1;
    } /*Si las edades son diferentes, ordenar segun edad*/
  } else if (edades[i] < edades[j]) {
    comparar = -1;
  } else {
    comparar = 1;
  }
  return comparar;
}

/*Funcion para intercambiar valores dentro de la funcion ordenamiento*/
function intercambiarValores(arreglo: number[], i: number) {
  let ordenado: number;
  let b: number = i + 1;
  ordenado = arreglo[i];
  arreglo[i] = arreglo[b];
  arreglo[b] = ordenado;
}

/*Funcion de ordenamiento por burbuja*/
function ordenamientoPorBurbuja(
  nombres: string[],
  edades: number[],
  altura: number[]
) {
  for (let i = 0; i < nombres.length; i++) {
    for (let j = 0; j < nombres.length - 1 - i; j++) {
      if (compararValores(edades, altura, j) === 1) {
        intercambiarValores(nombres, j);
        intercambiarValores(edades, j);
        intercambiarValores(altura, j);
      }
    }
  }
}

/*Llamo a las funciones*/
console.log("Informacion original:");
cargarDatos(nombres, edades, altura, dimensionArray);
mostrarDatos(nombres, edades, altura, dimensionArray);
console.log("Informacion ordenada:");
ordenamientoPorBurbuja(nombres, edades, altura, dimensionArray);
mostrarDatos(nombres, edades, altura, dimensionArray);
