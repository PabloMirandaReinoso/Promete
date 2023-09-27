const Datastore = require('nedb-promises')
let datastore = Datastore.create('promesas.db')


module.exports.Agregar = function(P)
{
 return new Promise
 (
  function(resolve,reject)
  {
   console.log('dal.Agregar');
   datastore.insert(P)
  .then(function(doc){resolve(doc)})
  .catch(function(err){reject(err)})
  }
 )
}

module.exports.Actualizar = function(P)
{
 return new Promise
 (
  function(resolve,reject)
  {
   console.log('dal.Actualizar');
   datastore.update({_id:P.Id},P,{})
  .then(function(doc)
        {
        console.log('dal.Actualizar');
        resolve(P)
        })
  .catch(function(err)
         {
         console.log('dal.Actualizar');
         reject(err)
         })
  }
 )
}

module.exports.Buscar = function(P)
{
return new Promise
( 
function (resolve,reject)
{
//console.log('dal.Buscar ' + Date.now());
datastore.find({})
.then(function(docs)
 {
  var T = Array();
  docs.forEach
  (function(p){T.push(p);});
  console.log('dal.Buscar ' + Date.now() );
  resolve(T);
 }
 )
 .catch(function(err)
  {console.log(F);reject(T);}
  );
 }
)
}

module.exports.Traer = function(P)
{
return new Promise
(
function (resolve,reject)
{
  console.log('dal.Traer ',P);
  datastore.findOne({_id:P})
  .then(function(doc) {resolve(doc)})
  .catch(function(err){console.log('db.err');reject(err)})
}
)
}


module.exports.Today = function(P)
{
return new Promise
( 
function (resolve,reject)
{
console.log('db.Today ' + Date.now());
datastore.find({})
.then(function(docs)
 {
  var T = Array();
  docs.forEach
  (function(p){T.push(p);});
  console.log('db.Today ' + Date.now() );
  resolve(T);
 }
 )
 .catch(function(err)
  {console.log(F);reject(T);}
  );
 }
)
}