 //////////////////////////////////
// *** ENTRADAS DE TECLADO *** ///
window.onkeydown = function(e) {
	var evento = e || window.event;

	switch (evento.keyCode) {
		case 87: ARRIBA 	= true; break;
		case 83: ABAJO 		= true; break;
		case 65: IZQUIERDA	= true; break;
		case 68: DERECHA 	= true; break;
        
		case 32: ESPACIO 	= true; break;
	}
};

window.onkeyup = function(e) {
	var evento = e || window.event;

	switch (evento.keyCode) {
		case 87: ARRIBA 	= false; break;
		case 83: ABAJO 		= false; break;
		case 65: IZQUIERDA	= false; break;
		case 68: DERECHA 	= false; break;
        
		case 32: ESPACIO 	= false; break;
	}
};
 // *** FINAL ENTRADAS DE TECLADO *** ///
////////////////////////////////////////