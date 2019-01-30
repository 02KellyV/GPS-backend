const express = require('express');
const router = express.Router();
const Map = require("../models/maps.model");

/* GET users listing. */
router.get('/', function(req, res, next) {
    Map.find({}, (err, maps) => {
        res.status(200).send(maps);
    })
});

router.post('/', function(req, res, next) {
    const { lat, lng, date } = req.body;

    Map.create({lat, lng, date: new Date(date)}, function (err, map) {
        if (err) return handleError(err);

        Map.find({}).sort({date: -1}).limit(20).exec(function(err, maps) {
            res.status(200).send(maps);
        });
    });
});

module.exports = router;
