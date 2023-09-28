var dal = require('../persistence/activities.js');
var eml = require('../services/email.js');

exports.BuscarRq =function(P){ return new Promise
 (
  function(resolve,reject)
  {   
   dal.BuscarRq(P)
   .then(function(n){resolve(n);})
   .catch(err =>{reject(err);})
  }
 ) 
}

exports.Activity =function(req){ return new Promise
 (
 function (resolve,reject)
  {
   var p;
   p=req.params.id;   
   dal.Activity(p)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
  }
 )
}

exports.Save= function (req){ return new Promise
 (
  function (resolve,reject)
  {
   var prom = new Object();
 
   prom.what     =req.body.what;
   prom.where    =req.body.where;
   prom.when     =req.body.when;
   prom.who      =req.body.who;
   prom.how      =req.body.how;
   prom.id       =req.body.id;
   prom.cost     =req.body.cost;
   prom.state    =req.body.state;
   prom.priority =req.body.priority;   
   
   dal.Save(prom)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   }
  )
}

exports.Today =function(req){ return new Promise
 (
 function (resolve,reject)
  {
   var p;
   p=req.params.Id;   
   dal.Today(p)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
  }
 )
}