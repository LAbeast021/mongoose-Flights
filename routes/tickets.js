var express = require('express');
var router = express.Router();
var ticketCtrl= require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketCtrl.new);
router.post('/tickets/:id/new', ticketCtrl.createticket);

// router.post('/movies/:id/performers', ticketCtrl.addToTicket);

module.exports = router;