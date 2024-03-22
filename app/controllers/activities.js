var model = require('../models/activities.js');

exports.Auth=function(req, res, next)
{   
console.log("Auth",next.name);

if (req.session.logon) 
	{  
		next()
	}
	else
	{
		return res.status(403).send(null);		
	}


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

exports.Actual=function(req, res, next)
{
	model.Actual(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Actual',err);
   res.send(err);
   });      
}

exports.Previous=function(req, res, next)
{
	model.Previous(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Previous',err);
   res.send(err);
   });    
}

exports.Next=function(req, res, next)
{
	model.Next(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Next',err);
   res.send(err);
   });   
}


exports.Today=function(req, res, next)
{
	model.Today(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Today',err);
   res.send(err);
   });   
}

exports.Pending=function(req, res, next)
{
	model.Pending(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Pending',err);
   res.send(err);
   });   
}

exports.Week=function(req, res, next)
{
	model.Week(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Week',err);
   res.send(err);
   });    
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
   console.log('con.Activity',err);
   res.send(err);
   });
   
}

exports.Search=function(req, res, next)
{
	model.Search(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Week',err);
   res.send(err);
   });    
}