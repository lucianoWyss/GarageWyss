window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    loader.style.opacity = "0"; // Animación de desvanecimiento
    setTimeout(() => {
      loader.style.display = "none"; // Ocultar el loader
      content.style.display = "block"; // Mostrar el contenido
    }, 500); // Espera a que termine la animación
  });