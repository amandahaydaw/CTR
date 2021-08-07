// get the api route
const api = (process.env.apiUrl === undefined ? 'http://localhost:4041' : process.env.apiUrl);

// create the express router system
var express = require('express');
const router = express.Router();

// import the got system to handle backend webcalls (was using request)
var got = require('got');

// parse values from submitted forms
router.use(express.urlencoded({ extended: true }));

// check if a username/email already exists
router.get('/exist/:name', function(req, res) {
    // perform a get to the API system to check if the user exists
    got(api + '/api/user/' + req.params.name + '/exist').then(response => {
        res.json(JSON.parse(response.body));
    }).catch(error => {
        res.json({ 'status': 'failure', 'message': error });
    });
});