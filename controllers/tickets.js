var Ticket = require('../models/ticket');
var Flight = require("../models/flight");

module.exports = {
    new: newTicket,
    createticket,
};

function newTicket(req,res){
    res.render("tickets/new",{
        title: "New Ticket",
        id: req.params.id
    });
};

function createticket(req,res){
    req.body.flight = req.params.id;
    console.log(req.body.flight);
    // req.body.flight = req.params.id
    Ticket.create(req.body, function(err,ticket){
        res.redirect(`/flights/${req.params.id}`);
    })

};

