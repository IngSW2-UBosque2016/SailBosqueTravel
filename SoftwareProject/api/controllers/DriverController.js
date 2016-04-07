module.exports = {

registration: function(req,res){

    res.view();
},

create: function(req,res,next){


   Driver.create(req.params.all(), function driverCreated(err,user){

        if(err){
            return next(err);
        }
        else{

        	res.json({msj:'YEAH!!!'});
        }

    });
 }
 }

