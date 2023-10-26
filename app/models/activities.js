var dal = require('../persistence/activities.js');
var util =require('../global/utils.js');

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

exports.Actual=function(){ return new Promise
  (
   function (resolve,reject)
   {
    dal.Load()
    .then(function(docs)
	{
		var c=0;
		var hoy=util.ToDay();
		var T = {"date":hoy,"total":0};
		docs.forEach
		(function(p)
		{			
		  if (util.ToDate(p.when)>util.AddDays(hoy,-7) && util.ToDate(p.when)<util.AddDays(hoy,7)) 
		  {
			c++;
		  }
		});
		console.log('Model.Actual ' + Date.now() );
		T.date=util.toStringShort(hoy);
	    T.total=c;
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}

exports.Next=function(){ return new Promise
  (
   function (resolve,reject)
   {
    dal.Load()
    .then(function(docs)
	{
		var c=0;
		var hoy=util.ToDay();
		var T = {"date":hoy,"total":0};
		docs.forEach
		(function(p)
		{			
		  if (util.ToDate(p.when)>util.AddDays(hoy,7))
		  {
			c++;
		  }
		});
		console.log('Model.Next ' + Date.now() );
		
		hoy=util.AddDays(hoy,7);
		T.date=util.toStringShort(hoy);
	    T.total=c;
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}

exports.Previous=function(){ return new Promise
  (
   function (resolve,reject)
   {    
    dal.Load()
    .then(function(docs)
	{
		var day=0;
		var c=0;
		var hoy=util.ToDay();		
		var T = {"date":hoy,"total":0};
		docs.forEach
		(function(p)
		{			
		  day=util.ToDate(p.when);
		  
		  if ( (day > util.AddDays(hoy, -7))  && (day < hoy ) )
		  {
			c++;
		  }
		});
		console.log('Model.Previous ' + Date.now() );
		T.date=util.toStringShort(util.AddDays(hoy, -7));
	    T.total=c;
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}


exports.Today=function(){ return new Promise
  (
   function (resolve,reject)
   {
    dal.Load()
    .then(function(docs)
	{		
		var hoy=util.ToDay();
		console.log('hoy',hoy);
		var T = [];
		docs.forEach
		(function(p)
		{	
		  console.log(util.ToDate(p.when));		
		  if ( (util.toStringShort(util.ToDate(p.when))==util.toStringShort(hoy)) )
		  {
			T.push(p);
		  }
		});
		console.log('Model.Today ' + Date.now() );		
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}

exports.Pending=function(){ return new Promise
  (
   function (resolve,reject)
   {
    dal.Load()
    .then(function(docs)
	{		
		var hoy=util.ToDay();
		var T = [];
		docs.forEach
		(function(p)
		{			
		  if ( p.state=='-1')
		  {
			T.push(p);
		  }
		});
		console.log('Model.Pending' + Date.now() );		
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}

exports.Week=function(){ return new Promise
  (
   function (resolve,reject)
   {
    dal.Load()
    .then(function(docs)
	{		
		var hoy=util.ToDay();
		var T = [];
		docs.forEach
		(function(p)
		{			
		  if (util.ToDate(p.when)>util.AddDays(hoy,-7) && util.ToDate(p.when)<util.AddDays(hoy,7)) 
		  {
			T.push(p);
		  }
		});
		console.log('Model.Week ' + Date.now() );		
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}