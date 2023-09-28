var conn =require('../database/activities.js');

exports.Save=function(prom){ return new Promise
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

exports.Activity=function(P){ return new Promise
  (
   function (resolve,reject)
   {
    conn.Retrieve(P)
    .then(function(n){resolve(n);})
    .catch(function(err){reject(n);})
   }
  )
}

exports.BuscarRq=function(P){ return new Promise
  (
   function (resolve,reject)
   {
    conn.Select(P)
    .then(function(n){resolve(n);})
    .catch(function(err){reject(err);})
   }
  )
}

exports.Today=function(P){ return new Promise
  (
   function (resolve,reject)
   {
    conn.Select(P)
    .then(function(n)
	{
		resolve(n);
	})
    .catch(function(err){reject(err);})
   }
  )
}
