var util =require('../global/utils.js');
var conn =require('../database/generic.js');
const DB = require('nedb-promises');
var db = DB.create('ideas.db');


exports.Load=function(P){ return new Promise
  (
   function (resolve,reject)
   {
    conn.Select(db)
    .then(function(n){resolve(n);})
    .catch(function(err){reject(err);})
   }
  )
}
exports.Save=function(prom){ return new Promise
 ( function (resolve,reject)
  {  
   if (prom.id=='')
   {
    conn.Insert(prom,db)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   }
   else
   {
	prom._id=prom.id;
    conn.Update(prom,db)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   } 
  }
 )
}

exports.Idea=function(P){ return new Promise
  (
   function (resolve,reject)
   {
    conn.Retrieve(P,db)
    .then(function(n){resolve(n);})
    .catch(function(err){reject(n);})
   }
  )
}