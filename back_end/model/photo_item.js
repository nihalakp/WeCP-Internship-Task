const mongoose = require('mongoose');
const photoGallerySchema = mongoose.Schema({
	PicName : {
		type : String,
		required :  true

	},
	PicLocation : {
		type : String,
		required :  true

	},
	PicColor: {
		type: Boolean, 
		requried: true

	}
});
const item = module.exports = mongoose.model('Item',photoGallerySchema);
  