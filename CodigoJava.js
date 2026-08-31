let estado = 'claro';
let saludar = 'Buenos dias';
const botonCambio = document.querySelector('#Cambio');
const obtenerSaludo = document.querySelector('#Saludo');

function CambiarTema(){
    document.querySelector('.heroe').classList.toggle('Oscuro');
    estado = estado === 'claro' ? 'oscuro' : 'claro';
    botonCambio.textContent = estado === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}

function saludo(){

    const Horaoraora = new Date().getHours();
    document.getElementById('Saludo').textContent = Horaoraora < 12 ? 'Levantate ya amanecio' : Horaoraora < 18 ? 'Trabaja tiene que trabajar' : 'Duerme para trabajar mañana';
}

botonCambio.addEventListener('click', CambiarTema);
saludo();