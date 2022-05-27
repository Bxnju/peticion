
function accionSi(){

	alert('Ya somos novios mi amor ♥')
	
}

function accionNo(){

	width = window.innerWidth;
	height = window.innerHeight;

	newWidth = (Math.random() * width);
	newHeight = (Math.random() * height);

	document.getElementById('btnNo').style.position = "absolute";
	document.getElementById('btnNo').style.left = newWidth + "px";
	document.getElementById('btnNo').style.top = newHeight + "px";

}

function nombe(){
	alert('no lograras atraparme jeje')
}