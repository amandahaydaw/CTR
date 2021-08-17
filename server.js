let express = require("express");
let app = express();
// import the CORS system
var cors = require('cors');
//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);



// enable CORS for all routes
app.use(cors());

var port = process.env.PORT || 4040;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));
app.get("/test", function(request, response) {
    var user_name = request.query.user_name;
    response.end("Hello " + user_name + "!");
});



// logout the user by clearing the current cookies and redirecting to the root
app.get('/logout', function(req, res) {
    res.clearCookie('session');
    res.clearCookie('gravatar');
    res.redirect('/home.html')
});



//socket test
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);

});


http.listen(port, () => {
    console.log("Listening on port ", port);
});

//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();