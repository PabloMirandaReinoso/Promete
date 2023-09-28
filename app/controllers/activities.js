var model = require('../models/activities.js');

exports.Traer=function(req, res, next)
{
   model.Traer(req)
   .then(function(doc)
   {
    console.log('con.Traer',doc);
    res.send(doc);  
   })
   .catch(function(err){
   console.log('con.Err',err);
   res.send(err);   
   });
}

exports.Save=function(req, res, next)
{   
   model.Save(req)
   .then(function(doc)
   {
    console.log('con.Save',doc);
    res.send(doc); 
   })
   .catch(function(err){
   console.log('Save',err);
   res.send(err);   
   });     
}

exports.Buscar=function(req, res, next)
{   
   model.BuscarRq(req)
   .then(function(doc)
   {
    console.log('con.Buscar');    
    res.render('../views/promesas.ejs',{prom:doc});    
   })
   .catch(function(err){
   console.log('con.Buscar',err);
   res.send(err);   
   });
}

exports.Today=function(req, res, next)
{
	const doc = {date:"10/09/2023", total:"66" };
    console.log('con.Today',req.params);   
    res.json(doc);   
}

exports.Prev=function(req, res, next)
{
	const doc = {date:"10/09/2023", total:"55" };
    console.log('con.Today',req.params);   
    res.json(doc);   
}

exports.Next=function(req, res, next)
{
	const doc = {date:"10/11/2023", total:"77" };
    console.log('con.Next',req.params);   
    res.json(doc);   
}

exports.Details=function(req, res, next)
{
	model.BuscarRq(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Buscar',err);
   res.send(err);
   });   
}

exports.Urgent=function(req, res, next)
{
	const doc = [{id:"2", description:"B" }];
    console.log('con.Urgent',req.params);   
    res.json(doc);   
}

exports.Week=function(req, res, next)
{
	const doc = [{id:"3", description:"C" }];
    console.log('con.Week',req.params);   
    res.json(doc);   
}

exports.Activity=function(req, res, next)
{
	model.Activity(req)
   .then(function(doc)
   {
    console.log('con.Activity',doc);
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Err',err);
   res.send(err);
   });
   
}