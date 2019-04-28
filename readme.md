# 获取商品练习项目
`前提需要安装nodejs运行本项目`

## 安装依赖
```
npm install

```

## 运行项目
```
node server
```

## 项目目录
- server.js 后端mock服务
- index.html 入口文件
- js 脚本文件
- css 样式资源
- img 图片资源
- data.json 后端数据	


## 商品列表
- 按照热卖，价格去排序
- 价格，商品名称去搜索对应的商品
- 写页面
- 调取这些商品数据
- 懒加载


## 定义数据格式

```
	var data = [{
		title: '美女1',
		price: 100,
		id: 1,
		url: './img/1.jpg'
	},{
		title: '美女1',
		price: 100,
		id: 2,
		url: './img/2.jpg'
	}]
```



## 后端接口文档
- 列表接口
	- 地址 /list
	- 提交方式 get
	- 参数
		- page 页数
		- dataval 查询条件（要查询的值）
		- datakey 查询条件(要按什么查询）
	- 返回的数据
		{"code":1,"data":[{"title":"美女2","price":200,"id":2,"url":"./img/2.jpg"}]}