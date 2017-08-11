var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GoalSchema = new Schema({
    userName:String,
    goalName:String,
    description:String 
});
var goalModel = mongoose.model('Goal',GoalSchema);
module.export  = goalModel;