var express = require('express');
var data = require('./data.json');

var app = express();

app.use(express.static('./'))


app.get('/list', function(req, res, next){
	//console.log(data.slice(0,10))
	var query = req.query;
	var page = query.page || 1;
	var dataVal = query.dataval || '';
	var dataKey = query.datakey || '';
	var limite = query.limite || 0;
	
	if(limite == 1){
		var data2 = Object.assign([],data);
		data2.sort(function(a, b){
			return a.price - b.price;
		})
		return res.json({
			code: 1,
			data: data2.slice((page-1)*10,page*10)
		})
	}else if(limite == -1){
		var data1 = Object.assign([],data);
		data1.sort(function(a, b){
			return b.price - a.price;
		})
		return res.json({
			code: 1,
			data: data1.slice((page-1)*10,page*10)
		})
	}
	
	if(dataVal && dataKey){
		console.log(1)
		var arr = [];
		for(var i=0;i<data.length;i++){
			for(var key in data[i]){
				if(key == dataKey && data[i][key] == dataVal){
					arr.push(data[i]);
					break;
				}
			}
		}
		return res.json({
			code: 1,
			data: arr
		})
	}else{
		res.json({
			code: 1,
			data: data.slice((page-1)*10,page*10)
		})
	}
	

	
})

app.listen(8080, function(){
	console.log('服务启动了你可以访问http://localhost:8080');
})