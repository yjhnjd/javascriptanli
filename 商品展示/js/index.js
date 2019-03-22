window.onload = function() {
	var up = document.getElementsByClassName('show-up')[0];
	var ig = document.getElementsByTagName('img');
	for (i=0;i<ig.length;i++) {
		(function(i){
			ig[i].onmouseover=function(){
				up.style.backgroundImage="url"+"("+'img/0'+(i+1)+'big.jpg'+')';
			}
		})(i);
	}
}