document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const ingresar = document.getElementById("ingresar");
  const registroForm = document.getElementById("registro-form");
  const emailYaRegistrado = document.getElementById("email_ya_registrado");
  registroForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Obtener usuarios registrados del localStorage
    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    let usuarioRegistrado = false;
    let passwordCorrecta = false;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].email === email.value) {
        usuarioRegistrado = true;
        break;
      }
    }

    if (usuarioRegistrado) {
      emailYaRegistrado.innerHTML = `Este email ya se encuetra <a>registrado</a>.`;
    } else {
      // Agregar el nuevo usuario al array
      usuariosRegistrados.push({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        password: password.value,
      });

      // Guardar el array actualizado en el localStorage
      localStorage.setItem(
        "usuariosRegistrados",
        JSON.stringify(usuariosRegistrados)
      );

      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      window.location.href = "./registro_exitoso.html";
    }
  });
});
