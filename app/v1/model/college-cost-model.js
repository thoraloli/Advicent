var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var collegeCostSchema = new Schema({
  name: { type: String, Required:  true },
  tuitionInState:    { type: Number, Required:  true},
  tuitionInState: { type: Number },
  roomBoard: { type: Number, Required: true }
});

mongoose.model('college_cost',collegeCostSchema);
module.exports = mongoose.model('college_cost', collegeCostSchema, 'college_cost');