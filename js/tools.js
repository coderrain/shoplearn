var Tools = (function(){

	function offset(box){
		var l = box.offsetLeft;
		var t = box.offsetTop;
		var p = box.offsetParent;

		while(p.tagName != 'BODY'){
			l += p.clientLeft + p.offsetLeft;
			t += p.clientTop + p.offsetTop;
			p = p.offsetParent;
		}
		return {
			left: l,
			top: t
		}
	}


	function getW(){
		return document.documentElement || document.body
	}

	return {
		offset: offset,
		getW: getW
	}
})()