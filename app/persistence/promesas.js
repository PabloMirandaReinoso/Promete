var conn =require('../database/promesas.js');

exports.Guardar=
function(prom)
{ return new Promise
 ( function (resolve,reject)
  {
  
   if (prom.Id=='')
   {
    conn.Agregar(prom)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   }
   else
   {
   conn.Actualizar(prom)
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

