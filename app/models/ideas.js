var dal = require('../persistence/ideas.js');
var util =require('../global/utils.js');

exports.Save= function (req){ return new Promise
 (
  function (resolve,reject)
  {
   var prom = new Object();
 
   prom.what     =req.body.what;
   prom.title    =req.body.title;
   prom.id       =req.body.id;
   prom.state    =req.body.state;
   
   dal.Save(prom)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
   }
  )
}

exports.Active=function(){ return new Promise
  (
   function (resolve,reject)
   {
    dal.Load()
    .then(function(docs)
	{		
		
		var T = [];
		docs.forEach
		(function(p)
		{			
		  
			T.push(p);
		  
		});
		console.log('Model.Pending' + Date.now() );		
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}


exports.Idea =function(req){ return new Promise
 (
 function (resolve,reject)
  {
   var p;
   p=req.params.id;   
   dal.Idea(p)
   .then(function(doc){resolve(doc)})
   .catch(function(err){reject(err)})
  }
 )
}