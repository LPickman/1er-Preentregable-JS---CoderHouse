document.addEventListener("DOMContentLoaded", () => {
  // Recuperar el nombre del usuario del localStorage
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  // Mostrar el nombre del usuario en el documento HTML
  document.getElementById("bienvenida").innerHTML = nombreUsuario;
});
