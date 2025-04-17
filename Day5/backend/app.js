const express=require('express');
const cors=require('cors');
const fs=require('fs/promises');

const app=express();
let users=[]

app.use(cors());
app.use(express.json());
const readdata=async () => {
    users=await JSON.parse(fs.readFile('./data.json','utf8'));
}
const writedata=async () => {
    await fs.writeFile('./data.json',JSON.stringify(users));
}
readdata();

app.get('/users',async (req,res) =>{
    res.json(users);
});

app.post('./users',async (req,res) =>{
    const { name, age }
})