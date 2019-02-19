var store = require('nedb');
var prom  = new store
    ({filename:'promesas.db'
     ,autoload:true});


 function buscar(db, opt)
{ return new Promise
  (function(resolve, reject)
   { 
    console.log('dal.Buscar');
    db.find(opt, function(err, doc)
    { if (err)
       { reject(err) }
       else
       { resolve(doc) } 
    }
    );
    }
   )
}

function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(buscar, delay);
        console.log('later 2');
    });
}



function guardar(db, opt)
{
 prom.insert(P,
  function(err, doc)
  { console.log('Inserted'
     , doc.Que,
     'with ID'
     , doc._id);
  }
  )
}

module.exports.Guardar = function(P)
{
 
    return P;
}

module.exports.Buscar =  function(P)
{

 var T = new Array();
 console.log('later 1');
 later(3000);
 console.log('later 3');
 //T = buscar(prom,{}).then
 //     (function (
 
 buscar(prom,{}).then
 (
  function(pro)
  {
   pro.forEach
   (
   function(p)
   {
    T.push(p);
   }
   )
   console.log(T);
   
  }
 );
 
 //console.log(T);
 return T;
}



module.exports.Traer = function(P)
{

     prom.insert(P,
     function(err, doc)
     { console.log('Inserted'
     , doc.Que,
     'with ID'
     , doc._id);
     });
     
     return P;
                                                   return P;
}


