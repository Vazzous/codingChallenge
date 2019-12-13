// JavaScript Document

//censé fonctionner 
var titre = ["Bienvenue","Bienvenido","Welcome"];
var counter = 0;
setTimeout(change, 3000);

function change() {
	if (counter >= titre.length) {
		counter = 0;
	}
	else{
		document.getElementById("titreIndex").innerHTML = titre[counter];
		counter++;
	}
}

var slider = document.getElementById("monprix");
var prix = document.getElementById("prixchoisi");
prix.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	prix.innerHTML = this.value;	
	if (slider.value<10){
		document.getElementById('entreprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('poorkiddo').style.opacity = "0.5";
		
	}
	else if(slider.value<50){		
		document.getElementById('entreprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('poorkiddo').style.opacity = "1";
	}	
	else if(slider.value<79){	
		document.getElementById('entreprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "1";
		document.getElementById('poorkiddo').style.opacity = "0.5";
	}	
	else{		
		document.getElementById('entreprise').style.opacity = "1";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('poorkiddo').style.opacity = "0.5";
	}
}