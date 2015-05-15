var x;
x = $(document);
x.ready(inicializarEventos);
var timer = 1;

function inicializarEventos() {
	var x;
	x = $("#btnAgregarSO");
	x.click(agregarSO);
	x = $("#btnEliminarUltimo");
	x.click(eliminarUltimo);
	x = $("#btnAgregarP1");
	x.click(agregarProcesoUno);
}

/* 
	Agrega de forma manual una entrada del sistema operativo.
	De igual manera, agrega un vacio en el resto de los campos.

*/
function agregarSO() {
	var x;
	x = $(".so");
	x.append('<li><a href="#">SO</a></li>');
	x = $(".p1");
	x.append('<li><a href="#">-</a></li>');
	x = $(".p2");
	x.append('<li><a href="#">-</a></li>');
	x = $(".p3");
	x.append('<li><a href="#">-</a></li>');
	x = $ (".timer")
	x.append('<li><a href="#">'+timer+'</a></li>');
	timer +=1;
}

/*
	Elimina el ultimo nodo ingresado, retrocediendo a su vez
	el timer de tiempo.
*/

function eliminarUltimo() {
	var x;
	x = $(".so li");
	var cantidad = x.length;
	x = x.eq(cantidad-1);
	x.remove();
	x = $(".p1 li");
	var cantidad = x.length;
	x = x.eq(cantidad-1);
	x.remove()
	x = $(".p2 li");
	var cantidad = x.length;
	x = x.eq(cantidad-1);
	x.remove();
	x = $(".p3 li");
	var cantidad = x.length;
	x = x.eq(cantidad-1);
	x.remove();
	x = $(".timer li");
	var cantidad = x.length;
	x = x.eq(cantidad-1);
	timer -=1;
	x.remove();
}

function agregarProcesoUno() {
	var x;
	x = $(".so");
	x.append('<li><a href="#">-</a></li>');
	x = $(".p1");
	x.append('<li><a href="#">P1</a></li>');
	x = $(".p2");
	x.append('<li><a href="#">-</a></li>');
	x = $(".p3");
	x.append('<li><a href="#">-</a></li>');
	x = $ (".timer")
	x.append('<li><a href="#">'+timer+'</a></li>');
	timer +=1;
}