/*aquí va tu código*/
function guardarDatos(){
	if (document.getElementById("clave").value != "" && document.getElementById("valor").value != "") {

		var n = localStorage.length/2;
		localStorage['nombre-' + n] = document.getElementById("clave").value;
		localStorage['comentario-' + n] = document.getElementById("valor").value;

		document.getElementById("clave").value = "";
		document.getElementById("valor").value = "";

		refrescar();
	}
	
}

function refrescar(){

	var padre = document.getElementById("comentarios");
	while (padre.lastChild) {
	    padre.removeChild(padre.lastChild);
	}

	var n = localStorage.length/2;
	for (var i = 0; i < n; i++) {
		var caja = document.createElement("div");
		var nombre = document.createElement("h3");
		var comentario = document.createElement("p");

		var nombreTxt = document.createTextNode(localStorage["nombre-" + i]);
		var comentarioTxt = document.createTextNode(localStorage["comentario-" + i]);

		nombre.appendChild(nombreTxt);
		comentario.appendChild(comentarioTxt);

		caja.appendChild(nombre);
		caja.appendChild(comentario);

		padre.appendChild(caja);
	}
}

function limpiar(){
	localStorage.clear();

	refrescar();
}

refrescar();