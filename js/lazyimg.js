var LazyImg = (function(){

	var eventFn = function(){
		var sT = document.documentElement.scrollTop;
		var cH = document.documentElement.clientHeight;
		/*if(Tools.offset(aImg[9]).top < sT+cH-100){
			//aImg[9].src = aImg[9].getAttribute('data-src')
			var oImg = document.createElement('img');
			oImg.src = aImg[9].getAttribute('data-src');
			oImg.onload = function(){
				aImg[9].src = aImg[9].getAttribute('data-src');
			}
			oImg.onerror = function(){
				aImg[9].src = './img/logo.jpg'
			}
		}*/
		for(var i=0;i<aImg.length;i++){
			if(aImg[i].isLazy){
				continue;
			}
			aImg[i].style.opacity = 0;
			if(Tools.offset(aImg[i]).top < sT+cH-100){
				var oImg = document.createElement('img');
				oImg.src = aImg[i].getAttribute('data-src');
				oImg.index = i;
				oImg.onload = function(){
					aImg[this.index].src = aImg[this.index].getAttribute('data-src');
					aImg[this.index].style.opacity = 1;
					//aImg[this.index].style.transform = 'rotateY(720deg)';
				}
				oImg.onerror = function(){
					aImg[this.index].src = './img/logo.jpg'
					aImg[this.index].style.opacity = 1;
				}
				aImg[i].isLazy = true;
			}
		}
	}


	return function(aImg){
			/*var oMain = document.getElementById('main');
			var aImg = oMain.getElementsByTagName('img');*/
			//console.log(Tools.offset(aImg[0]).top);
			return eventFn;
			//window.onscroll = eventFn;
	}
})()