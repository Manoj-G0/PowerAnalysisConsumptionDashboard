
const mongoose = require("mongoose")
const costSchema = new mongoose.Schema({
  date:{ 
    type: String, required: true 
    },
  time:{ 
    type: String, required: true
    },
  units: {
    type:Number, required: true
    },
  comments: { 
    type: String
    }
  
});
module.exports = mongoose.model('Cost',costSchema);;