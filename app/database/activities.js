const Datastore = require('nedb-promises')
let datastore = Datastore.create('promesas.db')

//ONLY CRUD 
module.exports.Insert = function(P){ return new Promise (
  function(resolve,reject)
  {
   console.log('dal.Insert');
   datastore.insert(P)
  .then(function(doc)
	  {	
		//This double call is because of nedb
	    P.id =doc._id;			    		
	    datastore.update({_id : doc._id},{ $set: { id: doc._id } },{ upsert: false })
       .then(function(doc)
        {
        console.log('dal.Actualizar');
        resolve(P)
        });		
	  })
  .catch(function(err){reject(err)})
  })}

module.exports.Update = function(P){ return new Promise (
  function(resolve,reject)
  {
   console.log('dal.Update');
   datastore.update({_id:P.id},P,{})
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
  })}

module.exports.Select = function(P){return new Promise( 
function (resolve,reject)
{
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
 })}

module.exports.Retrieve = function(P){return new Promise(
function (resolve,reject)
{
  console.log('dal.Traer ',P);
  datastore.findOne({_id:P})
  .then(function(doc) {resolve(doc)})
  .catch(function(err){console.log('db.err');reject(err)})
})}

