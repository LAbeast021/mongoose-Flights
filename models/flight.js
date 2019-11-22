var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var destinationSchema = new Schema({
    airport:{
        type:String,
        enum:['AUS', 'DAL', 'LAX', 'SAN' , 'SEA']
    },
    arrival:{
        type:Date
    }
});

var flightSchema = new Schema ( {
    airline: {
        type : String ,
        enum:['American' , 'Southwest' , 'United']
    } ,
    flightNo : {
        type : Number ,
        required : true ,
        min : 10 ,
        max : 9999 
    } ,
    departs :{
        type: Date,
        required: true,
        default: function() {
            return new Date().getFullYear();
          }
    },
    airport:{
        type:String,
        enum:['AUS', 'DAL', 'LAX', 'SAN' , 'SEA'],
        default: "LAX"
    },
    destination:[destinationSchema]
});

module.exports = mongoose.model("Flight",flightSchema);
    

    
