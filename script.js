// Función para cambiar el color de fondo
document.getElementById('cambiarColorBtn').addEventListener('click', function () {
    // Generar un color aleatorio para la página
    const colores = ['#ffcccb', '#add8e6', '#98fb98', '#f0e68c', '#ff6347'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});