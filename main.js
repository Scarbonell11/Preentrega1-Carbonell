let resultado = 0;
let opcion;
 
// esta funcion sirve para sumar los valores ingresados: numeroA + numeroB
function sumar() {
  let numeroA = parseInt(prompt("ingresa un numero"));
  let numeroB = parseInt(prompt("ingresa otro numero"));
  resultado = numeroA + numeroB;
  if (isNaN(numeroA)  || isNaN(numeroB)) {
    // Si se ingresa un valor que no es un numero -> Error: escriba un numero
    return alert("Error: Escriba un numero");
  }
  alert("El resultado de tu operacion es: " + resultado);
}

// esta funcion sirve para restar los valores ingresados: numeroA - numeroB
function restar() {
  let numeroA = parseInt(prompt("ingresa un numero"));
  let numeroB = parseInt(prompt("ingresa otro numero"));
  resultado = numeroA - numeroB;
  if (isNaN(numeroA) || isNaN(numeroB)) {
    // Si se ingresa un valor que no es un numero -> Error: escriba un numero
    return alert("Error: Escriba un numero");
  }
  alert("El resultado de tu operacion es: " + resultado);
}

// esta funcion sirve para multiplicar los valores ingresados: numeroA * numeroB
function multiplicar() {
  let numeroA = parseInt(prompt("ingresa un numero"));
  let numeroB = parseInt(prompt("ingresa otro numero"));
  resultado = numeroA * numeroB;
  if (isNaN(numeroA) || isNaN(numeroB)) {
    // Si se ingresa un valor que no es un numero -> Error: escriba un numero
    return alert("Error: Escriba un numero");
  }
  alert("El resultado de tu operacion es: " + resultado);
}

// esta funcion sirve para dividir los valores ingresados: numeroA / numeroB
function dividir() {
  let numeroA = parseFloat(prompt("ingresa un numero"));
  let numeroB = parseFloat(prompt("ingresa otro numero"));
  resultado = numeroA / numeroB;
  if (numeroB === 0) {
    // No se puede dividir por 0
    return alert("No se puede dividir por 0");
  } else if (isNaN(numeroA) || isNaN(numeroB) ) {
    // Si se ingresa un valor que no es un numero -> Error: escriba un numero
    return alert("Error: Escriba un numero");
  }
  alert("El resultado de tu operacion es: " + resultado);
}

do {
  opcion = parseInt(
    prompt(
      "Que operacion desea realizar? \n\n 1:Sumar \n\n 2:Restar \n\n 3:Multiplicar \n\n 4:Dividir \n\n 0:Salir"
    )
  );

  if (opcion === 1) {
    sumar();
  } else if (opcion === 2) {
    restar();
  } else if (opcion === 3) {
    multiplicar();
  } else if (opcion === 4) {
    dividir();
  } else if (opcion > 4) {
    alert("Elija una opcion de las disponibles");
  }
} while (opcion != 0); // Si se ingresa 0 -> se termina el bucle.
