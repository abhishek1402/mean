var chatModel = require('../model/chatModel.js')
class ContactDetails {
    static details(req,res,next){
       
        chatModel.find({'reciever.username':req.body.reciever.username,'sender.username':req.body.sender.username})
        .count((err,count)=>{
            console.log(req.body)
            if(err)
                console.log(err.message)
            else
                if(count==0){
                    var entry = new chatModel();
                    entry.sender.name = req.body.sender.name;
                    entry.sender.username = req.body.sender.username;
                    entry.sender.number = req.body.sender.number;
                
                    entry.reciever.name = req.body.reciever.name;
                    entry.reciever.username = req.body.reciever.username;
                    entry.reciever.number = req.body.reciever.number;

                    entry.save((err,data)=>{
                        if(err)
                            console.log(errN)
                        else
                            {console.log(data);
                            res.status(200).send(data)}
                    })
                }
                else
                     res.status(200).send('')
            
        })
        
    }
}

module.exports = ContactDetails;