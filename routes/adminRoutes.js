// get the api route
const api = (process.env.apiUrl === undefined ? 'http://localhost:4041' : process.env.apiUrl);

// create the express router system
var express = require('express');
const router = express.Router();
var got = require('got');
router.use(express.urlencoded({ extended: true }));
// below require more work 
router.get('/name', function(req, res) {
    got(api + '/api/user/' + req.params.name + '/exist').then(response => {
        res.json(JSON.parse(response.body));
    }).catch(error => {
        res.json({ 'status': 'failure', 'message': error });
    });
});