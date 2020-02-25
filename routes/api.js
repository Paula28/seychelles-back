const router = require('express').Router();
const fetch = require('node-fetch');
// const _ = require('lodash');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const moment = require('moment');
// const validateToken = require('../_helpers/tokenValidator.js').validateToken;

module.exports = () => {

    router.get('/', function (req, res) {
        const key = '553954bab2706054d3387e124c1a76fd';
        fetch(`http://api.weatherstack.com/current?access_key=${key}&query=Seychelles`)
            .then(response => response.json())
            .then(data => {
                return res.status(200).json({ status: 'OK', data });
            })
            .catch(err => {
                return res.status(500).json({ status: 'Error', err });
            });
    });

    return router;
};
