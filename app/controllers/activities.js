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

exports.Save=
function(req, res, next)
{
   console.log('con.Save');
   model.Save(req)
   .then(function(doc)
   {
    console.log('con.Save',doc);
    res.send(doc);
    //resolve(doc)
   })
   .catch(function(err){
   console.log('Save',err);
   res.send(err);
   //reject(err)
   })  
   
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
	model.BuscarRq(req)
   .then(function(doc)
   {
    console.log('con.Buscar');      
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Buscar',err);
   res.send(err);
   //reject(err)
   });
   
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

exports.Activity=
function(req, res, next)
{
	const doc = ({"id":"1", "what":"2","when":"3","where":"4","who":"5","cost":"6","priority":"7","state":"8","how":"9"});
    console.log('con.Activity',req.params);   
    res.json(doc);
   
}