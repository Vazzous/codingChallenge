// JavaScript Document
function openNav() {
	document.getElementById("translide-1").style.marginLeft = "250px";
  //document.getElementById("translide-2").style.marginLeft = "50%";
	document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
	document.getElementById("translide-1").style.marginLeft = "0%";
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

(function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('#nav');
	
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() > 30) {
          $navbar.addClass('hide');
		
        } else {
          $navbar.removeClass('hide');
        }
      }, 100);
    });
  }());

(function(){
    var timeout;
    var $window = $(window);
	var $part2 = $('#part2');

    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() > 30) {
          $part2.addClass('app');
		
        } else {
          $part2.removeClass('app');
        }
      }, 100);
    });
  }());

$(window).load(function() {
	$('.centre').fadeOut(1)
	$(".centre").fadeIn(1000);
})



var phrase = ["Bienvenue","sur", "mon", "super", "site"];
var counter = 0;
var inst = setInterval(change, 2000);

function change() {
  document.getElementById("text").innerHTML = phrase[counter];
  
  counter++;
  if (counter >= phrase.length) {
    counter = 0;
  
    Interval(inst);
  }
}
