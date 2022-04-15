let botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
let botonAceptarCookies2 = document.getElementById('btn-aceptar-cookies2');
let avisoCookies = document.getElementById('aviso-cookies');
let fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});


botonAceptarCookies2.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');
	localStorage.setItem('cookies-aceptadas', false);
})

let actualYear = document.write(new Date().getFullYear())
