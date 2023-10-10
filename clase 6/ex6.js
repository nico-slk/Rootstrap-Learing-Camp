// Ejercicio 1
const nombre = 'Nicolas';
let edad = 32;
console.log(nombre);
console.log(edad);

// Ejercicio 2
const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Ejercicio 3
let sum = (a, b) => a + b;
console.log(sum(5, 8));

// Ejercicio 4
let numbers = [2, 8, 7, 6, 1, 4, 9];
let doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);

// Ejercicio 5
let pares = numbers.filter(num => num % 2 === 0);
console.log(pares);

// Ejercicio 6
let total = numbers.reduce((a, b) => a + b);
console.log(total);

// Ejercicio 7
let all_numbers = [...numbers, 45, 78, 33, 66];
console.log(all_numbers);

// Ejercicio 8
const movieObj = {
  movieName: 'Star Wars',
  year: 1977,
  gender: 'fiction'
};

const { movieName, year, gender } = movieObj;
console.log(movieName);
console.log(year);
console.log(gender);

// Ejercicio 9
let movieInfo = (movie) => {
  const { movieName, year, gender } = movie;
  return `The movie name is ${movieName}, was filmed in the ${year} and is a ${gender}`;
};

console.log(movieInfo(movieObj));

// Ejercicio 10
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
}

// Ejercicio 11
import { elevadoAlCuadrado } from './elev';

// Ejercicio 12
const resultElevadoAlCuadrado = async () => {
  try {
    const resultado = await elevadoAlCuadrado(4);
    console.log(resultado);
    return resultado;
  } catch (error) {
    throw new Error(error);
  }
};

resultElevadoAlCuadrado();

// Ejercicio 13
const fnConError = (num) => {
  if (num < 0) {
    throw new Error(`El número ${num} es negativo`);
  }
};

const numPositivo = (num) => {
  try {
    fnConError(num);
  } catch (error) {
    console.error(error);
  }
};

numPositivo(-1);

// Ejercicio 13
localStorage.setItem("resultadoElevadoAlCuadrado", resultElevadoAlCuadrado(2));
const result = localStorage.getItem("resultadoElevadoAlCuadrado");
console.log(result);
