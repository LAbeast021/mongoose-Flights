var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/flights",{
    useNewUrlParser: true ,
    useCreateIndex:true,
    useUnifiedTopology: true}
    );
    var db = mongoose.connection;
db.on("connected", function(){
    console.log(`connected to mangodb at ${db.host}:${db.port}`)
});