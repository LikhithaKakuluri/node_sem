const express=require('express');
const app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});
app.listen(3000,()=>{
  console.log('App listening on port 3000');
})
