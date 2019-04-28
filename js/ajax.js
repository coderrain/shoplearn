var Ajax = (function(){
	return function(options){
		var type = options.type || 'get';
		var url = options.url;
		var async = options.async || false;
		var data = options.data || {};
		var success = options.success || function(){};
		var error = options.error || function(){};

		var dataStr = '';

		for(var key in data){
			dataStr += key + "=" + data[key] + '&';
		}

		var xhr = new XMLHttpRequest();
		if(type == 'get'){
			xhr.open(type, url+'?'+dataStr+'date='+new Date().getTime(), async);
		}else{
			xhr.open(type, url, async);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
		}

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var result = JSON.parse(xhr.responseText)
				success(result)
			}else{
				error()
			}
		}
		if(type == 'get'){
			xhr.send(null);
		}else{
			xhr.send(dataStr);
		}
	}
})()