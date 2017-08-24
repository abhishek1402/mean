var newVote = require ('.././model/newVote.js');

class newvote{
    static create(req,res,next){
        console.log("dd")
       var entry = new newVote({
           memerName:req.body.name,
           project:req.body.project,
           workYesterday:req.body.workYesterday,
           workToday:req.body.workToday,
           impediment:req.body.Impediments,
           discount:req.body.discount
       })
        entry.save(function(err,data){
            if(err)
                console.log(err);
            //   res.status(400).json({ error: 'message' });
            else
            console.log("savend")
            
        });
       
       newVote.find(function(err,res){
        //    console.log(res);
       })
        newVote.find({memerName:'fds'},'memerName project',function(err,res){
        //    console.log(res);
       })
        newVote.findOne({memerName:'fds'},'memerName',function(err,res){
        //    console.log(res);
       })
        // you can also use newvote.find({discount:{$gte:10},function(err,data){
            // console.log(results);
        // }})where gte means greater then
        //various operator are 
        // $gt greater than
        // $in exists in 
        // $lt tess than
        // $ne not equal to 
        // $nin does not exist
        
        //update query

        var condition = {memerName:'fds'};
        var update = {impediment:'none'}

        newVote.update(condition,update,function(err,data){
            // console.log(data);
        })
        newVote.find({memerName:'dfsf'})
        .then((res)=>{
           return newVote.findByIdAndUpdate(res[0].id,update)})
        .then((response)=>{
           var promisDemo = new Promise(
              (resolve,reject)=>{
                   resolve({response});
               }
           ) 
            return promisDemo
           
        })
        .then((resp)=>{return Promise.resolve("resolved")})
        .then((res)=>{console.log(res)})
        .catch(err=>{
            console.log(err);
        })
             



        newVote.find().sort({createdOn:'desc'}).limit(0).exec((err,data)=>{
            // console.log(data);
        })
    }

}
// sorted in assending order 
module.exports = newvote;