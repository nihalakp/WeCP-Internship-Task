var express = require('express');
var router = express.Router();

const item =  require('../model/photo_item');

//retrieving data from database
router.get('/items', (req,res,next)=>{
	item.find(function(err,items){
		if(err){
			res.json(err);

		}
		else{
			res.json(items)
		}
	});
});
//inserting
router.post('/item', (req,res,next)=>{
	let newPhoto = new item({
		PicName: req.body.PicName,
		PicLocation : req.body.PicLocation,
		PicColor : req.body.PicColor
	});
	newPhoto.save((err,item)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg : 'item has been added successfully'});
		}
	});
});
//updating
router.post('/iten/:id', (req,res,next)=>{
	//todo later
	item.findOneAndUpdate({_id: req.params.id},{
		$set:{
		PicName: req.body.PicName,
		PicLocation : req.body.PicLocation,
		PicColor : req.body.PicColor
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	}

	);
});
//deleting
router.delete('/item/:id', (req,res,next)=>{
	//todo later
	item.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else {
			res.json(result);
		}
	});
});


module.exports = router;
