var oMain = document.getElementById('main');
var aImg = oMain.getElementsByTagName('img');
var searchBtn = document.getElementById('searchBtn');
var page = 0;

function getList(options){
	var search = options.search || false;
	var page = options.page || 1;
	var dataKey = options.datakey || '';
	var dataVal = options.dataval || '';
	var limite = options.limite || 0;
	Ajax({
		url: '/list',
		type: 'get',
		data: {
			//page: ++page
			page:page,
			datakey:dataKey,
			dataval:dataVal,
			limite:limite
		},
		success: function(data){
			console.log(data);
			var result = data.data;
			var str = '';
			if(result.length == 0){
				item = true;
			}
			if(data.code == 1){
				for(var i=0;i<result.length;i++){
					str += '<li>';
					str += '<img src="./img/logo.jpg"  data-src="'+ result[i].url +'">';
					str += '<div>';
					str += '<strong>'+ result[i].title +'</strong>';
					str += '<span>￥'+ result[i].price +'</span>';
					str += '</div>';
					str += '</li>';
				}
			}
			if(search){
				oMain.innerHTML = str;
			}else{
				oMain.innerHTML += str;
			}
			LazyImg(aImg)()
			
		}
	})
}

getList({
	page: ++page
});


searchBtn.onclick = function(){
	getList({
		dataval: search.value,
		datakey: pinpai.value,
		search: true,
		page: 1
	});
}

priceBtn.limite = 0;
priceBtn.onclick = function(){
	oMain.innerHTML = '';
	item = false;
	page = 0;
	if(this.limite == 1){
		this.limite = -1
	}else{
		this.limite = 1
	}
	getList({
		dataval: search.value,
		datakey: pinpai.value,
		//search: true,
		limite: this.limite,
		page: ++page
	});
}


var item = false;
window.onscroll = function(){
	LazyImg(aImg)()
	if(item){
		return false;
	}
	var cH = Tools.getW().clientHeight;
	var sT = Tools.getW().scrollTop;
	var mianH = oMain.offsetHeight;
	var mianT = Tools.offset(oMain).top;
	//console.log(mianH,mianT)
	if(mianH+mianT <= cH +sT){
		getList({
			page: ++page,
			limite: priceBtn.limite,
			dataval: search.value,
			datakey: pinpai.value
		});
	}
}

		
		