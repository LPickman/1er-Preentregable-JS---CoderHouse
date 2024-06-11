document.addEventListener("DOMContentLoaded", function () {
  const resultado_usuario = document.getElementById("resultado_usuario");
  const cuentas = document.getElementById("cuentas");
  const aceptar = document.getElementById("aceptar");
  const puntaje = document.getElementById("puntaje");
  const nro_pregunta = document.getElementById("nro_pregunta");
  const ingresar = document.getElementById("ingresar");
  const form = document.getElementById("login-form");
  const cerebroImg = document.getElementById("cerebro-img");
  const salir = document.getElementById("salir");

  let num1 = Math.round(Math.random() * 100) + 13;
  let num2 = Math.round(Math.random() * 100) + 11;
  let nivel = 1;
  let niveles = 10;
  let puntos = 0;
  let respuestas = [];

  function proximaPregunta() {
    if (nivel <= niveles) {
      cuentas.innerHTML = `¿Cuánto es ${num1 * nivel} + ${num2 * nivel}?`;
      nro_pregunta.innerHTML = `Pregunta ${nivel} de ${niveles} :`;
    } else {
      cuentas.innerHTML = ""; // Limpiar el contenido de cuentas
    }
  }

  function mostrarResultado() {
    respuestas.forEach((respuesta, index) => {
      puntaje.innerHTML += `<br>Pregunta ${index + 1}: ${
        respuesta.correcto ? "✅" : "❌"
      } (Tu respuesta: ${respuesta.respuesta_usuario}, Operación: ${
        respuesta.suma
      }, Respuesta correcta: ${respuesta.respuesta_real}) <br>`;
    });

    localStorage.setItem(
      "resultadosExamen",
      JSON.stringify({
        puntos: puntos,
        totalPreguntas: niveles,
        respuestas: respuestas,
      })
    );

    if (puntos <= 5) {
      cuentas.innerHTML = `Lamentablemente no ha aprobado el examen. Su nota fue ${puntos}.`;
      cuentas.style.color = "red";
      cuentas.style.fontWeight = "bold";
      salir.style.display = "block";
    } else {
      cuentas.innerHTML = `¡Felicitaciones! Ha aprobado el examen con un ${puntos}`;
      cuentas.style.color = "green";
      cuentas.style.fontWeight = "bold";
      salir.style.display = "block";
    }

    salir.addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  }

  function ultimapregunta() {
    if (nivel > niveles) {
      nro_pregunta.innerHTML = "";
      resultado_usuario.style.display = "none";
      aceptar.innerHTML = "Entregar";
      aceptar.removeEventListener("click", preguntasExamen);
      aceptar.addEventListener("click", entregarResultados);
    }
  }

  function entregarResultados() {
    mostrarResultado();
    aceptar.style.display = "none";
    cerebroImg.style.display = "none";
  }

  function preguntasExamen() {
    let resultado_usuario_num = parseInt(resultado_usuario.value);

    if (isNaN(resultado_usuario_num) || resultado_usuario.value.trim() === "") {
      // Mostrar el mensaje de dato inválido
      cuentas.innerHTML += "<br>Dato inválido. Por favor, ingresa un número.";
      return;
    }

    let resultado_real = num1 * nivel + num2 * nivel;

    respuestas.push({
      suma: `${num1 * nivel} + ${num2 * nivel}`,
      respuesta_usuario: resultado_usuario_num,
      respuesta_real: resultado_real,
      correcto: resultado_usuario_num === resultado_real,
    });

    if (resultado_usuario_num === resultado_real) {
      puntos += 1;
    }

    nivel++;

    if (nivel <= niveles) {
      proximaPregunta();
    } else {
      cuentas.innerHTML = `<br>Has terminado de resolver el examen. Tu resultado se mostrará automáticamente luego de hacer click en "Entregar".`;
      ultimapregunta();
    }

    resultado_usuario.value = "";
  }

  proximaPregunta();
  aceptar.addEventListener("click", preguntasExamen);
  resultado_usuario.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      preguntasExamen();
    }
  });

  localStorage.removeItem("resultadosExamen");
});
