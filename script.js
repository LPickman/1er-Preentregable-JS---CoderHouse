// // Juego Matemático

// // El juego consiste en realizar cuentas matemáticas mentalmente y escribir el resultado en un tiempo máximo de 5 segundos.

// //CONDICIONALES Y VALIDACIONES.

// //INCICIO DEL JUEGO
// // let num1 = Math.round(Math.random() * 1000);
// // let num2 = Math.round(Math.random() * 1000);

// // let inicioDeJuego = confirm("Haga click en 'Aceptar' para iniciar el juego.");

// // let resultadoDeUsuario = parseFloat(prompt("Ingrese su resultado"));

// // console.log(num1);
// // console.log(num2);

// const juegoMatematico = function () {
//   const tiempoLimite = 10; // Tiempo límite en segundos
//   let puntaje = 0;

//   const mostrarMensajeInicio = () => {
//     return confirm(
//       `¡Desafío Matemático!\n\nTe desafío a realizar cálculos mentales. Tienes ${tiempoLimite} segundos para escribir el resultado.`
//     );
//   };

//   const realizarEtapa = () => {
//     const num1 = Math.round(Math.random() * 100);
//     const num2 = Math.round(Math.random() * 100);
//     const respuestaUsuario = generarPregunta(num1, num2);
//     const respuestaCorrecta = num1 * num2;

//     if (respuestaUsuario === respuestaCorrecta) {
//       puntaje++;
//       alert(`¡Respuesta correcta! Puntaje actual: ${puntaje}`);
//     } else {
//       alert(
//         `Respuesta incorrecta. La respuesta correcta era ${respuestaCorrecta}.`
//       );
//     }
//   };

//   const juego = () => {
//     if (mostrarMensajeInicio()) {
//       for (let etapa = 1; etapa <= 5; etapa++) {
//         alert(`Etapa ${etapa} de 5`);
//         realizarEtapa();
//       }
//       alert(`Juego terminado. Tu puntaje final es ${puntaje}.`);
//     } else {
//       alert("¡Una lástima! Te esperamos para el próximo desafío.");
//     }
//   };

//   const generarPregunta = (num1, num2) => {
//     return parseFloat(prompt(`¿Cuánto es ${num1} x ${num2}?`));
//   };
//   juego();
// };

// // Ejecutar el juego
// juegoMatematico();

// const juegoMatematico = function () {
//   puntaje = 0;
//   console.log(`Antes de la condición el puntaje es ${puntaje}`);
//   let aceptar = prompt("Hacé click en OK");
//   if (aceptar !== null) {
//     puntaje++;
//   }
// };
// juegoMatematico();
// console.log(`Después de la condición el puntaje es ${puntaje}`);

const presentacionJuego = function () {
  return confirm(
    `¡Desafío Matemático!\n\nTe desafío a realizar cálculos mentales.\n¡Por cada respuesta correcta, ganarás 20 puntos!\n\n¿Aceptas el desafío?`
  );
};

let operaciones = ["+"];

const juegoMatematico = function () {
  let dificultad = 2;
  let puntaje = 0;
  let num1 = Math.round(Math.random() * 100 + 15);
  let num2 = Math.round(Math.random() * 100) + 13;
  console.log(num1, num2);
  if (presentacionJuego()) {
    for (let etapa = 1; etapa <= 5; etapa++) {
      if (
        parseInt(
          prompt(
            `Etapa ${etapa} de 5\n\nPuntaje actual: ${puntaje} de 100 puntos.\n\n¿Cuanto es ${
              num1 * dificultad
            } + ${num2 * dificultad}?`
          )
        ) ===
        num1 * dificultad + num2 * dificultad
      ) {
        dificultad *= 3;
        puntaje += 20;
        continue;
      } else {
        alert(
          `Uhh! Te quedaste en la etapa ${etapa} de 5. El resultado de la operación era: ${
            num1 * dificultad + num2 * dificultad
          }.\nTu puntaje final es: ${puntaje} de 100 puntos.`
        );
        break;
      }
      dificultad *= 2;
    }
    if (puntaje === 100) {
      alert(
        `!!Felicidades!!! Has superado todas las etapas.\nTu puntaje final es: ${puntaje} puntos. `
      );
    }
  }
};

juegoMatematico();
