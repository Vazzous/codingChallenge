// JavaScript Document
var pano = document.getElementById("panoramique");
var titre = document.getElementById("headline");
//servent de comparaison pour les déplacement de souris
var x_moins_1 = 0;
var y_moins_1 = 0;

var translateX = 0;
var translateY = 0;
var head_X = 0;
var head_Y = 0;

function getMouse(){
	
	var x = event.clientX;
	var y = event.clientY;
	
	if (x_moins_1 == 0){
		x_moins_1 = x;
		y_moins_1 = y;
	}
		if( x < x_moins_1){
			head_X += 0.5;
			translateX -=0.5;
			titre.style.marginLeft = head_X+"px";
			pano.style.marginLeft = translateX+"px";
			x_moins_1 = x;
		}
		else if( x > x_moins_1){
			head_X -= 0.5;
			translateX += 0.5;
			titre.style.marginLeft = head_X+"px";
			pano.style.marginLeft = translateX+"px";
			x_moins_1 = x;
		}	
		if( y < y_moins_1){
			head_Y += 0.5;
			translateY -=0.5;
			titre.style.marginTop = head_Y+"px";
			pano.style.marginTop = translateY+"px";
			y_moins_1 = y;
		}
		else if( y > y_moins_1){
			head_Y -= 0.5;
			translateY += 0.5;
			titre.style.marginTop = head_Y+"px";
			pano.style.marginTop = translateY+"px";
			y_moins_1 = y;
		}
}