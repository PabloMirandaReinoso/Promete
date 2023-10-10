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
		  if (util.ToDate(p.when).getTime()===hoy.getTime())
		  {
			c++;
		  }
		});
		console.log('dal.Today ' + Date.now() );
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
		  if (util.ToDate(p.when).getDate()>hoy.getDate()+7)
		  {
			c++;
		  }
		});
		console.log('dal.Today ' + Date.now() );
		
		hoy.setDate(hoy.getDate()+7)
		T.date=util.toStringShort(hoy.getDate());
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
		var days=0;
		var c=0;
		var hoy=util.ToDay();
		var T = {"date":hoy,"total":0};
		docs.forEach
		(function(p)
		{			
		  days=util.ToDate(p.when).getTime()-hoy.getTime();
		  console.log('days');
		  console.log(days/1000/60/60/24);
		  if ( days > -7 && days < 0 )
		  {
			c++;
		  }
		});
		console.log('dal.Today ' + Date.now() );
		T.date=util.toStringShort(hoy.getTime()-7);
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
		var T = [{"id":"","what":""}];
		docs.forEach
		(function(p)
		{			
		  if ( (util.ToDate(p.when).getTime()===hoy.getTime()) && p.state==='0')
		  {
			T.push(p);
		  }
		});
		console.log('dal.Today ' + Date.now() );		
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
		var T = [{"id":"","what":""}];
		docs.forEach
		(function(p)
		{			
		  if ( (util.ToDate(p.when).getTime()<hoy.getTime()) && p.state==='-1')
		  {
			T.push(p);
		  }
		});
		console.log('dal.Pending' + Date.now() );		
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
		var T = [{"id":"","what":""}];
		docs.forEach
		(function(p)
		{			
		  if ( (util.ToDate(p.when).getTime()>hoy.getTime()) && p.state==='0')
		  {
			T.push(p);
		  }
		});
		console.log('dal.Week ' + Date.now() );		
		resolve(T);
	})
    .catch(function(err){reject(err);})
   }
  )
}