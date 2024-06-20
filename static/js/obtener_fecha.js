// Obtener el elemento span donde se mostrará el año
var yearSpan = document.getElementById("year");

// Obtener el año actual
var currentYear = new Date().getFullYear();

// Actualizar el contenido del span con el año actual
yearSpan.textContent = currentYear;