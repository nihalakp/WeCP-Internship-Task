var express = require('express');
var mongoose = require('mongoose');
var bodyparser =  require('body-parser');
var cors = require('cors');

var app = express();
const route = require('./route/route');
mongoose.connect('mongodb://localhost:27017/ShoppingList');
//on connection 
mongoose.connection.on('connected', ()=>{
	console.log('MongoDB connected at port 27017');

});

//on Connection Error
mongoose.connection.on('error',(err)=>{
	console.log(err);
});



//port on which server runs
const PORT = 3000;
//app adding middle layer
//between 300 and 4200
app.use(cors());
//body parser
app.use(bodyparser.json());
app.use('/api', route);//anything with api sent to route
app.get('/',(req,res)=>{
	res.send('response to nfdjf'); 
})
app.listen(PORT,()=>{
	console.log('Server has been startedat port:' + PORT);

});
