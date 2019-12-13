// JavaScript Document
window.onscroll = function() {sticky()};

function sticky() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    var sticky = document.getElementById("nav-bar");
    sticky.classList.add("sticky")
  } else {
    var sticky = document.getElementById("nav-bar");
    sticky.classList.remove("sticky")
  }
}



function div (){
	var premierNombre = document.getElementById("div1").value;
	var secondNombre = document.getElementById("div2").value;
	var resultDiv = premierNombre / secondNombre;
    document.getElementById("res-div").innerHTML = resultDiv;
}


//Début ajout à 0
var valeur = "Entrez un nombre";

function depart(){
	document.getElementById("var-mod").innerHTML = valeur;
}
window.onload = depart();

function ajoutZero() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 0;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "0";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function ajoutUn() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 1;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "1";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function ajoutDeux() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 2;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "2";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function ajoutTrois() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 3;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "3";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function ajoutQuatre() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 4;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "4";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function ajoutCinq() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 5;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "5";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function ajoutSix() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 6;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "6";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}
function ajoutSept() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 7;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "7";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}
function ajoutHuit() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 8;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "8";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}
function ajoutNeuf() {
	if (valeur == "Entrez un nombre"){
		valeur = 0;
		valeur += 9;
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		valeur += "9";
		document.getElementById('var-mod').innerHTML = valeur;
	}
}

function div2(){
	var resConv;
	if (valeur == '' ){
		var rec = document.getElementById('var-mod').innerHTML = valeur;
		resConv = eval(rec);
		alert(resConv);
		document.getElementById('conv').innerHTML = resConv;
		valeur += "/";
		document.getElementById('var-mod').innerHTML = valeur;
	}
	else{
		var rec = document.getElementById('var-mod').innerHTML = valeur;
		var util =eval(rec);
		document.getElementById('var-mod').innerHTML = valeur;
}}