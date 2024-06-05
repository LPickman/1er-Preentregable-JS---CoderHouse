document.addEventListener("DOMContentLoaded", function () {
  const resultado_usuario = document.getElementById("resultado_usuario");
  const cuentas = document.getElementById("cuentas");
  const aceptar = document.getElementById("aceptar");
  const puntaje = document.getElementById("puntaje");
  const nro_pregunta = document.getElementById("nro_pregunta");
  const ingresar = document.getElementById("ingresar");
  const form = document.getElementById("login-form");

  let num1 = Math.round(Math.random() * 1000 + 13);
  let num2 = Math.round(Math.random() * 1000 + 11);
  let nivel = 1;
  let niveles = 10;
  let puntos = 0;

  function proximaPregunta() {
    cuentas.innerHTML = `¿Cuánto es ${num1 * nivel} + ${num2 * nivel}?`;
    nro_pregunta.innerHTML = `Pregunta ${nivel} de ${niveles} :`;
  }

  function ultimapregunta() {
    if (puntos === 200) {
      nro_pregunta.innerHTML = "";
      resultado_usuario.value = "";
      resultado_usuario.style.display = "none"; // Limpiar el campo de entrada
      aceptar.innerHTML = "Entregar";
      aceptar.removeEventListener("click", preguntasExamen);
      aceptar.addEventListener("click", recargarPagina);
    }
  }

  // Recargar la misma página
  function recargarPagina() {
    location.reload();
  }

  function preguntasExamen() {
    let resultado_usuario_num = parseInt(resultado_usuario.value);
    let resultado_real = num1 * nivel + num2 * nivel;

    if (resultado_usuario_num === resultado_real) {
      nivel++;
      puntos += 10;

      if (nivel <= niveles) {
        proximaPregunta();
      } else {
        //puntaje.innerHTML = `Puntaje: ${puntos}/100`; // Actualizar el puntaje
        cuentas.innerHTML = `Has terminado de resolver el exámen. Tu resultado se mostrará automáticamente luego de hacer click en "Entregar".`;
        ultimapregunta();
      }
    } else {
      cuentas.innerHTML = `Respuesta incorrecta. Intenta de nuevo: ¿Cuánto es ${
        num1 * nivel
      } + ${num2 * nivel}?`;
    }
    // Limpiar el campo de entrada
    resultado_usuario.value = "";
  }

  proximaPregunta();
  aceptar.addEventListener("click", preguntasExamen);

  //Formulario de registro
  //Guardar los datos ingresados en el localStorage
  localStorage.setItem();
});
