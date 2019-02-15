var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));
app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/views/index.html')
}); 
io.on('connection',function(socket){
    console.log('user connected');
    socket.on('disconnect',function(){
        console.log('user disconected');
    });
});

// io.on('connection',function(socket){
//     console.log('connected');
//     setTimeout(function() {
//         socket.emit('scroll',{value: 'true'});
//     },5000);
//     socket.on('disconnect',function(){
//         console.log('disonnected');
//     });
// });
// http.listen(3000, function(){
//     console.log('listening on localhost: 3000');
// });
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  });