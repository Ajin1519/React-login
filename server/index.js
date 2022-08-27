const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();

const  PORT = 3002;
app.use(cors());
app.use(express.json())

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Sucess")
})

// Route to get 
app.get('/get', (req,res)=>{
    const email = req.query.email;
    const password = req.query.password;
    console.log(email,password);
db.query("SELECT firstname FROM user where email=? and password = ?",[email,password], (err,result)=>{
    if(err) {
    console.log(err)
    } 
    else{
        if(result.length>0){
            res.send(result.data);
        }
        else{
            res.send({firstname:"NotFound"});
        }
    }
    }
    );   
});


// Route for creating the post
app.post('/create', (req,res)=> {

const first = req.body.firstname;
const last = req.body.lastname;
const email = req.body.email;
const password = req.body.password;

console.log(first,last,email,password)
db.query("INSERT INTO user VALUES (?,?,?,?)",[first,last,email,password], (err,result)=>{
   if(err) {
       console.log(err)
   } 
   console.log(result)
}
);   
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})