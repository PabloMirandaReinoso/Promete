var model = require('../models/promesas.js');

exports.Default =
 function(req, res, next)
 {
   
   res.render('../views/default.ejs');
   model.BuscarRq(req)
   .then
   (
   function Buscar(n)
   {
   res.render('../views/index.ejs',{prom:n});    
  }
   )
   .catch( 
   err =>{}
   ) ;

    //model.Email(req)
    //.then
    //(
    //function Buscar(n)
    //{
    //res.render('../views/index.ejs',{prom:n});
    //}
    //)
    //.catch(err =>{}) ;
    
    
   }

