const express = require('express');
const path = require('path');

const app = express();

const port = 4091;

const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentday = currentDate.getDay();

const dayVerif=(req,res,next)=>{
   
    if(currentday == 0 || currentday == 6 || currentHour >17 || currentHour<6){
    
    
        return res.sendFile(path.join(__dirname,'public','ServerClosed.html'));
                 
       
    }

next()

}

app.use(express.static('public'))

app.use(dayVerif)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Homepage.html'))
  
})

app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','OurServices.html'))
    console.log(currentday)
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Contactus.html'))
})

app.listen(port,console.log(`Checkpoint server running on the port : ${port}`));