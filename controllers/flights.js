var Flight = require('../models/flight');
 module.exports = {
    index,
    new:newFlight,
    create,
    show
 };

 function index(req, res){
    Flight.find({},function(err, flights){
        res.render("flights/index",{
            flights,
            title: "All Flights",
        });
    });
 };
 function newFlight(req, res){
     res.render("flights/new",{
         title: "Adding Flights"
     });
 };
 function create(req, res){
    var flight = new Flight(req.body);
    flight.save(function(err){
        if (err){ 
            console.log(`kire khar ${err}`)
            return res.redirect("/flights/new") }
        console.log(flight);
        res.redirect("/flights");
    });
 };
 function show(req, res){
     Flight.findById(req.params.id, function(err, flight){
        res.render("flights/show",{
            title: `flight number ${flight.flightNo}`,
            flight
        });
     })
 }