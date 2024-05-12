// // Juego Matemático

// Se crea una función en donde se retorna el true o false del confirm(). Es decir, si el usuario acepta jugar el juego o no. Si acepta devolverá un true y si cancela devolverá un false.
const presentacionJuego = function () {
  return confirm(
    `¡Desafío Matemático!\n\nTe desafío a realizar cálculos mentales.\n¡Por cada respuesta correcta, ganarás 20 puntos!\n\n¿Aceptas el desafío?`
  );
};

// Se crea la función que se encargará de toda la lógica de juego.
const juegoMatematico = function () {
  let dificultad = 2; // Este número es el que multiplicará al número random dado por el objeto Math. Cuanto mas grande sea el número, mayor es al dificultad.
  let puntaje = 0; // Esta variable sumará 20 puntos cada que el usuario resuelva correctamente la operación matematica.
  let num1 = Math.round(Math.random() * 100 + 15); // Esta variable devuelve un número random dado por el objeto Math. Se lo múltiplica por 100 para que el rango sea mayor y se le suma 15 para aumentar tan solo un poquito mas la dificultad.
  let num2 = Math.round(Math.random() * 100) + 13; // Esta variable devuelve un número random dado por el objeto Math. Se lo múltiplica por 100 para que el rango sea mayor y se le suma 13 para aumentar tan solo un poquito mas la dificultad y que el número que genere el objeto Math.random no sea el mismo.
  if (presentacionJuego()) {
    // Este condicional pregunta si la función "presentacionJuego()" devolvió true. En caso de no ser así, devolverá automaticamente lo que contiene else.
    for (let etapa = 1; etapa <= 5; etapa++) {
      // Este for va a repetir el ciclo, hasta que etapa sea menor o igual a 5.
      if (
        // Este if valida que el resultado devuelto por el usuario sea correcto.
        parseInt(
          //Convierte el resultado del usuario en número entero.
          prompt(
            `Etapa ${etapa} de 5\n\nPuntaje actual: ${puntaje} de 100 puntos.\n\n¿Cuanto es ${
              num1 * dificultad
            } + ${num2 * dificultad}?`
          )
        ) ===
        num1 * dificultad + num2 * dificultad //Se realiza la cuenta para poder realizar la comparación entre el número dado por el usuario y el resultado de la cuenta real.
      ) {
        dificultad *= 3; //Si el resultado es correcto, se debe aumentar un poco la dificultad, tomando el valor de la variable "dificultad" y multiplicandola * 3 para que en el proximo recorrido del for, el número generado por Math.random sea mayor.
        puntaje += 20; // Si el resultado es correcto. Suma a la variable "puntaje" 20 puntos.
        continue;
      } else {
        alert(
          //En caso que el resultado dado por el usuario no sea correcto, devolverá el siguiente alert.
          `Uhh! Te quedaste en la etapa ${etapa} de 5. El resultado de la operación era: ${
            num1 * dificultad + num2 * dificultad
          }.\nTu puntaje final es: ${puntaje} de 100 puntos.`
        );
        break;
      }
    }
    if (puntaje === 100) {
      // Si el usuario llega a sumar 100 puntos, quiere decir que completo las 5 etapas. Ya que cada etapa vale 20 puntos y son 5 etapas, nos da un total de 100 puntos. En caso de ser así, se devuelve un alert de "Felicidades..."
      alert(
        `!!Felicidades!!! Has superado todas las etapas.\nTu puntaje final es: ${puntaje} puntos. `
      );
    }
  }
};

juegoMatematico();
