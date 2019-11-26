var Flight = require('../models/flight');
var Ticket = require("../models/ticket");
module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render("flights/index", {
            flights,
            title: "All Flights",
        });
    });
};
function newFlight(req, res) {
    res.render("flights/new", {
        title: "Adding Flights"
    });
};
function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) {
            console.log(`saving ${err}`)
            return res.redirect("/flights/new")
        }
        console.log(flight);
        res.redirect("/flights");
    });
};
function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        destination = flight.destination;
        let chosenAirports = [];
        destination.forEach(e => {
            chosenAirports.push(e.airport);
        });
        Ticket.find({ flight: req.params.id }, function (err, tickets) {
            res.render('flights/show', {
                title: `flight number ${flight.flightNo}`,
                flight,
                destination,
                airportList: ["LAX", "SEA", "SAN", "DAL", "AUS"],
                chosenAirports,
                tickets
            })
        });
    })
}