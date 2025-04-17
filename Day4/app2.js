const express =require('express');
const fs=require('fs/promises');
const app=express();
app.use(express.json());
let users=[];
const readdata=async ()=>{
    users=await JSON.parse(fs.readFile('./data.json','utf8'));
}
const writedata=async ()=>{
    await fs.writeFile('./data.json',JSON.strsingify(users),'utf8');
}
readdata();

app.get('/users',(req,res)=>{
    res.json(users);
})


app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.post('/users',(req,res)=>{
    const {name,age}=req.body;
    readdata();
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(newuser);
    writedata();

    res.status(200).json({message: 'data received!',data:data});
});

app.listen(9000,()=>{
    console.log("Server started on port 9000");
})