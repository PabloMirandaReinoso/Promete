var model = require('../models/ideas.js');

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

exports.Active=function(req, res, next)
{
	model.Active(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Actual',err);
   res.send(err);
   });      
}

exports.Idea=function(req, res, next)
{
	model.Idea(req)
   .then(function(doc)
   {    
    res.json(doc);    
   })
   .catch(function(err){
   console.log('con.Actual',err);
   res.send(err);
   });      
}
