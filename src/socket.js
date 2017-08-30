module.exports = function(server)
{   
    var users = [];
    var io  = require('socket.io')(server);
    var chat = require('./api/chat')
    io.on('connection', function(socket){

    console.log('A user connected');
    socket.emit('message', "dssdf");
    socket.on('message',function(message){
        var toId
       
        chat.chatEntry(message)
        for(var i = 0;i<users.length;i++){
            console.log(users)
            if(message.reciver.username==users[i].userName)
                toId=users[i].senderid
            
        }
        socket.broadcast.to(toId).emit('sendMsg',message.msg)
    })
     
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('A user disconnected');
       
       for(let i=0; i < users.length; i++){
		        	if(users[i].senderid === socket.id){
		          		users.splice(i,1); 
		        	}
		      	}
        
    });
    socket.on('user',(data)=>{
        users.push({
            senderid:socket.id,
            userName:data.sender
        });
        let len = users.length;
        len--;
        console.log(users)
       io.emit('userList',users); 
    })
    
    });
}