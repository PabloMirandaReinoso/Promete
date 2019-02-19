var dal = require
('../persistence/promesas.js');

var eml = require
('../services/email.js');

exports.BuscarRq =
function(P)
{
 return new Promise
 (
  function(resolve,reject)
  {
   //console.log('mod.Buscar',p);
   dal.BuscarRq(P)
   .then(function(n){resolve(n);})
   .catch(err =>{reject(err);})
  }
 )
 //console.log('mod.Buscar',p);
}

exports.Traer =
function(req)
{
 return new Promise
 (
 function (resolve,reject)
  {
   var p;
   p=req.params.Id;
   console.log('mod.Traer',p);
   dal.Traer(p)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
  }
 )
}

exports.Guardar= function (req)
{
 return new Promise
 (
  function (resolve,reject)
  {
    //var p;
   //console.log('mod.Guardar');
   var prom = new Object();
 
   prom.Que    =req.body.Que;
   prom.Donde  =req.body.Donde;
   prom.Cuando =req.body.Cuando;
   prom.Quien  =req.body.Quien;
   prom.Como   =req.body.Como;
   prom.Id     =req.body.Id;
   
   dal.Guardar(prom)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   }
  )
}


exports.Email =
function(req)
{
 return new Promise
 (
 function (resolve,reject)
  {
   var p;
   //p=req.params.Id;
   console.log('mod.Email',1);
   eml.Enviar(p)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
  }
 )
}
