window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Reducir la barra de navegación
  navbarShrink();

  // Reduce la barra de navegación cuando se desplaza la página
  document.addEventListener("scroll", navbarShrink);

  // Activa Bootstrap scrollspy en el elemento de navegación principal
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Contraer la barra de navegación responsiva cuando el conmutador esté visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Función para saludar al hacer clic en un botón
function saludar() {
  const mensaje = "¡Hola desde el script!";

  // Mostrar el mensaje en un elemento HTML con el id 'saludo'
  const saludoElement = document.getElementById("saludo");
  saludoElement.textContent = mensaje;
}

// Asignar la función 'saludar' al evento 'click' del botón
const botonSaludo = document.getElementById("boton-saludo");
botonSaludo.addEventListener("click", saludar);
