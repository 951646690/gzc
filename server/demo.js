var express= require('express')
var bodyParser = require('body-parser')
var url = require('url')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/get/:id&:n',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");  //响应头 请按照自己需求添加。
  var lists=[
    {
      title:'标题1',
      content:'内容内容'
    },
    {
      title:'标题1',
      content:'内容内容'
    },
    {
      title:'标题2',
      content:'内容内容'
    },
    {
      title:'标题3',
      content:'内容内容'
    },
    {
      title:'标题4',
      content:'内容内容'
    },
    {
      title:'标题5',
      content:'内容内容'
    },
    {
      title:'标题6',
      content:'内容内容'
    },
    {
      title:'标题7',
      content:'内容内容'
    },
    {
      title:'标题8',
      content:'内容内容'
    },
    {
      title:'标题9',
      content:'内容内容'
    },
    {
      title:'标题10',
      content:'内容内容'
    },
    {
      title:'标题11',
      content:'内容内容'
    },
    {
      title:'标题12',
      content:'内容内容'
    },
    {
      title:'标题13',
      content:'内容内容'
    },
    {
      title:'标题14',
      content:'内容内容'
    },
    {
      title:'标题15',
      content:'内容内容'
    },
    {
      title:'标题16',
      content:'内容内容'
    },
    {
      title:'标题17',
      content:'内容内容'
    },
    {
      title:'标题18',
      content:'内容内容'
    },
    {
      title:'标题19',
      content:'内容内容'
    },
    {
      title:'标题3',
      content:'内容内容'
    },
    {
      title:'标题4',
      content:'内容内容'
    },
    {
      title:'标题5',
      content:'内容内容'
    },
    {
      title:'标题6',
      content:'内容内容'
    },
    {
      title:'标题7',
      content:'内容内容'
    },
    {
      title:'标题8',
      content:'内容内容'
    },
    {
      title:'标题9',
      content:'内容内容'
    },
    {
      title:'标题10',
      content:'内容内容'
    },
    {
      title:'标题11',
      content:'内容内容'
    },
    {
      title:'标题12',
      content:'内容内容'
    },
    {
      title:'标题13',
      content:'内容内容'
    },
    {
      title:'标题14',
      content:'内容内容'
    },
    {
      title:'标题15',
      content:'内容内容'
    },
    {
      title:'标题16',
      content:'内容内容'
    },
    {
      title:'标题17',
      content:'内容内容'
    },
    {
      title:'标题18',
      content:'内容内容'
    },
    {
      title:'标题191',
      content:'内容内容'
    }
  ]
  
 let id=Number (req.params.id)
 let n=Number (req.params.n)

 if(isNaN(id)&&isNaN(n)){

  res.json(id)
  return false
 }
 
 let nlist=Math.floor(lists.length/n)
 let _list=lists.length%n 
 
 let data={
    count:nlist,
    lists:[],
    code:'',
    msg:'' 
  }
  if(_list!=0){
    data.count=nlist+1
  }
  if(id==nlist+1){

    let n1=lists.length-_list
    for(let i=n1;i<lists.length;i++){
      lists[i].checked=false
      data.lists.push(lists[i])
    }
  }
  else{
    let n1=(id-1)*n+1
      for(let i=n1;i<n1+n;i++){
        if(lists[i-1]==null) break
        lists[i-1].checked=false
        data.lists.push(lists[i-1])
      }
  }
  if(data.lists.length<=0){
    data.code=0
    data.msg='获取失败，参数错误'
  }
  else{
    data.code=1
    data.msg='获取成功'
  }
        
  res.json(data)

})
app.listen(3000,function(){
  
  console.log('server is running')
})