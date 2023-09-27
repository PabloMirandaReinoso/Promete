var model = require('../models/activities.js');


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


exports.Today=
function(req, res, next)
{
	const doc = {date:"10/09/2023", total:"66" };
    console.log('con.Today',req.params);   
    res.json(doc);
   
}

exports.Prev=
function(req, res, next)
{
	const doc = {date:"10/09/2023", total:"55" };
    console.log('con.Today',req.params);   
    res.json(doc);
   
}

exports.Next=
function(req, res, next)
{
	const doc = {date:"10/11/2023", total:"77" };
    console.log('con.Next',req.params);   
    res.json(doc);
   
}

exports.Details=
function(req, res, next)
{
	const doc = [{id:"1", description:"A" }];
    console.log('con.Details',req.params);   
    res.json(doc);
   
}

exports.Urgent=
function(req, res, next)
{
	const doc = [{id:"2", description:"B" }];
    console.log('con.Urgent',req.params);   
    res.json(doc);
   
}

exports.Week=
function(req, res, next)
{
	const doc = [{id:"3", description:"C" }];
    console.log('con.Week',req.params);   
    res.json(doc);
   
}