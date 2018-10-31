$(document).ready(function(){
	shake();
});
/* Efecto sacudida al boton interna con las libreria jQuery
   y la funcionalidad Shake
	Con un delay de 3seg y duracion de efecto Shake de 1seg
	con distancia lateral de 50px y de 4 cliclos
*/
function shake() {
    $("#boton").effect("shake", {times: 4, distance: 50}, 1000);
    setTimeout(shake, 3000);
}
