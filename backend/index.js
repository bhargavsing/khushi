const express = require('express');
const cors = require('cors');

const app = express();

app.get('/',(req,res)=>{
    res.send("hello ")
});

app.listen(5000,()=>{
    console.log('server started');
})