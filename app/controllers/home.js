var model = require('../models/promesas.js');

exports.Default =
 function(req, res, next)
 {
   console.log('con.Buscar ' + Date.now());


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

