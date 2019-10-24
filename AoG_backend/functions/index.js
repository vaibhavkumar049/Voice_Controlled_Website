const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const engines = require('consolidate');
var express = require('express');
var app=express();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
// http.listen(3000, function(){
//     console.log('listening on localhost: 3000');
// });
app.use(express.static('public'));
app.engine('hbs',engines.handlebars);
app.set('views', './views')
app.set('view engine', 'hbs');
app.get('/',(req,res) =>{
    res.render('index');
}); 
// io.on('connection', (socket)=> {
//     console.log('connected');
//     socket.emit('scroll',{value: 'true'});
//     // socket.emit('news', { hello: 'world' });
//     // socket.on('my other event', (data)=> {
//     //   console.log(data);
//     // });
//   });

// io.on('connection',function(socket){
//     console.log('connected');
//     setTimeout(function() {
//         socket.emit('scroll',{value: 'true'});
//     },5000);
//     socket.on('disconnect',function(){
//         console.log('disonnected');
//     });
// });

// const listener = app.listen(process.env.PORT || 3000, () => {
//     console.log('Your app is listening on port ' + listener.address().port)
//   });

exports.app = functions.https.onRequest(app);
