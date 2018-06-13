(function() {
	"use strict";
	console.log("file connected");

var iconSet = document.querySelectorAll(".icons");
console.log(iconSet);

function i_am_a_function() {
	console.log("From i_am_a_function()");
	var targetSVG = evt.curentTarget.contentDocument; 
	console.log(targetSVG);
}


function logLoaded(evt) {
	//console.log("svg loaded");
	//console.log(evt);
	var targetSVG = evt.curentTarget.contentDocument; 
	console.log(targetSVG);
	var theIcon = targetSVG.queryselector(".mainIcon");
	//console.log(theIcon);
	theIcon.addEventListener("click", logClicked, false);
}	



for(var i=0; i<iconSet.length; i++); {
	console.log(i);
iconSet[i].addEventListener("load". 
logloaded, false);

}


function logLoaded(evt) {
	console.log(evt.currentTarget.id);
}

window .addEventListener("load", i_am_a_function, false);

})();