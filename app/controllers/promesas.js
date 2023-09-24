var model = require
('../models/promesas.js');


exports.Traer=
function(req, res, next)
{
   //console.log('con.Traer',req.params);
   
   model.Traer(req)
   .then(function(doc)
   {
    console.log('con.Traer',doc);
    res.send(doc);
    //resolve(doc)
   })
   .catch(function(err){
   console.log('con.Err',err);
   res.send(err);
   //reject(err)
   });
}

exports.Guardar=
function(req, res, next)
{
   console.log('con.Guardar');
   model.Guardar(req)
   .then(function(doc)
   {
    console.log('con.Guardar',doc);
    res.send(doc);
    //resolve(doc)
   })
   .catch(function(err){
   console.log('Guardar',err);
   res.send(err);
   //reject(err)
   })
   
   //res.send(model.Guardar(req,res,next));
}

exports.Buscar=
function(req, res, next)
{
   //console.log('con.Traer',req.params);

   model.BuscarRq(req)
   .then(function(doc)
   {
    console.log('con.Buscar');
    
    res.render('../views/promesas.ejs',{prom:doc});
    
    //res.render(doc);
    //resolve(doc)
   })
   .catch(function(err){
   console.log('con.Buscar',err);
   res.send(err);
   //reject(err)
   });
}

exports.Email=
function(req, res, next)
{
   //console.log('con.Traer',req.params);
   model.Email(req)
   .then(function(doc)
   {
    console.log('con.Traer',doc);
    res.send(doc);
    //resolve(doc)
   })
   .catch(function(err){
   console.log('con.Err',err);
   res.send(err);
   //reject(err)
   });
}
