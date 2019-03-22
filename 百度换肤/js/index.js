window.onload=function(){
		var img=document.getElementsByTagName('img');
		for (i=0;i<img.length;i++) {
			(function(i){
				img[i].onclick=function(){
					document.body.style.backgroundImage="url"+"("+'img/'+(i+1)+'.jpg'+')';
				}
			})(i);
		}

}
