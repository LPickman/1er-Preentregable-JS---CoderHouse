document.addEventListener("DOMContentLoaded", () => {
  const emailRegistrado = document.getElementById("email_registrado");
  const passwordRegistrado = document.getElementById("password_registrado");
  const ingresar = document.getElementById("ingresar");
  const loginForm = document.getElementById("login-form");
  const datoIncorrecto = document.getElementById("dato-incorrecto");
  const emailDesconocido = document.getElementById("email_desconocido");
  const passwordDesconocida = document.getElementById("password_desconocida");
  const crearCuenta = document.getElementById("crear_cuenta");
  const textoBienvenida = document.getElementById("bienvenida");
  let nombreUsuario = "";
  let apellidoUsuario = "";

  loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    // // Limpiar mensajes de error anteriores
    // emailDesconocido.innerHTML = "";
    // passwordDesconocida.innerHTML = "";
    // datoIncorrecto.innerHTML = "";

    let usuarioEncontrado = false;
    let passwordCorrecta = false;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].email === emailRegistrado.value) {
        usuarioEncontrado = true;
        if (usuariosRegistrados[i].password === passwordRegistrado.value) {
          passwordCorrecta = true;
          nombreUsuario = usuariosRegistrados[i].nombre;
          apellidoUsuario = usuariosRegistrados[i].apellido;
          break; // Salir del bucle si encontramos una coincidencia
        } else {
          passwordDesconocida.innerHTML = "Contraseña Incorrecta";
          break; // Salir del bucle ya que hemos encontrado el usuario pero la contraseña es incorrecta
        }
      }
    }

    if (!usuarioEncontrado) {
      emailDesconocido.innerHTML = `El correo electrónico que has introducido no se encuentra registrado.`;
    } else if (usuarioEncontrado && passwordCorrecta) {
      // Guardar el nombre del usuario en localStorage
      localStorage.setItem("nombreUsuario", nombreUsuario);
      localStorage.setItem("apellidoUsuario", apellidoUsuario);
      // Redirigir a la página de presentación
      window.location.href = "pages/presentacion.html";
    }

    // Establecer el texto de bienvenida después de que nombreUsuario tenga un valor asignado
    textoBienvenida.innerHTML = nombreUsuario;
  });

  crearCuenta.addEventListener("click", () => {
    window.location.href = "pages/registro.html";
  });
});
