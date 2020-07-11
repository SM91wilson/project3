const mongoose = require('mongoose');

const DogsSchema = new mongoose.Schema({
	// savedWalks: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Walks'
	// 	}
	// ],
	dogname: {
		type: String,
		trim: true,
		required: true
	},
	// picture: {
	//     type: Image
	// },
	breed: {
		type: String,
		trim: true
	},
	sex: {
		type: String
	},
	weight: {
		type: Number
	}
});

const Dog = mongoose.model('Dog', DogsSchema);
module.exports = Dog;
