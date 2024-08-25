// recolectando datos 
const mayusRegex = /[A-Z]/g;
const caracteresEspecialesRegex = /^[a-z\s]+$/;
let textoUsuario = document.querySelector('textarea');
let mensajeCampoVacio = document.querySelector(".mensaje-vacio");
let cajaTextoFinal = document.querySelector("#textoFinal");
let nuevaCadena = '';
let letraE = 'enter',
letraI = 'imes',
letraA = 'ai',
letraO = 'ober',
letraU = 'ufat';


async function copiarContenido() {
  try {
    await navigator.clipboard.writeText(cajaTextoFinal.innerHTML);
    alert("Texto copiado en el portapapeles");
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

function validarTexto(cadena, tipoDeFuncion){
	
	let encontroMayus = cadena.match(mayusRegex);
	let encontroCaracteresEspeciales = caracteresEspecialesRegex.test(cadena);

	if (encontroMayus || !encontroCaracteresEspeciales) {
		alert("El texto no debe contener mayusculas ni caracteres especiales");
		nuevaCadena = '';
	}else{
		if (tipoDeFuncion == 'encriptar') {
			enciptarTexto(cadena);
			
		}else{
			desenciptarTexto(cadena);
		}
		document.querySelector(".boton-copiar").style.display = "block";
		mensajeCampoVacio.style.display = "none";
		cajaTextoFinal.innerHTML = nuevaCadena;
		nuevaCadena = nuevaCadena;
	}
	return;
}

function enciptarTexto(cadena){
	nuevaCadena = cadena
	.replace(/e/g, letraE)
	.replace(/i/g, letraI)
	.replace(/a/g, letraA)
	.replace(/o/g, letraO)
	.replace(/u/g, letraU);
	
	return;
}
function desenciptarTexto(cadena){
	nuevaCadena = cadena
	.replace(/enter/g, 'e')
	.replace(/imes/g, 'i')
	.replace(/ai/g, 'a')
	.replace(/ober/g, 'o')
	.replace(/ufat/g, 'u');
	return;
}

function encrypt(){
	let cadena = textoUsuario.value;
	validarTexto(cadena, 'encriptar');
}
function desencrypt(){
	let cadena = textoUsuario.value;
	validarTexto(cadena);
}


