var conn =require('../database/activities.js');

exports.Save=
function(prom)
{ return new Promise
 ( function (resolve,reject)
  {
  
   if (prom.id=='')
   {
    conn.Insert(prom)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   }
   else
   {
	prom._id=prom.id;
   conn.Update(prom)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   } 
  }
 )
}

exports.Traer=
function(P)
{ return new Promise
  (
   function (resolve,reject)
   {
    console.log('per.Traer',P);
    conn.Traer(P)
    .then(function(n){resolve(n);})
    .catch(function(err){reject(n);})
   }
  )
}

exports.BuscarRq=
function(P)
{ return new Promise
  (
   function (resolve,reject)
   {
    conn.Buscar(P)
    .then(function(n){resolve(n);})
    .catch(function(err){reject(err);})
   }
  )
}

