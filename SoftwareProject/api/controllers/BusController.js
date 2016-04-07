module.exports = {

registration: function(req,res){

    res.view();
},

create: function(req,res,next){


  Bus.create(req.params.all(), function busCreated(err,user){

        if(err){
            return next(err);
        }
        else{

        	res.json({msj:'YEAH!!!'});
        }

    });
 }
 }