var store = require('nedb');
var prom  = new store
    ({filename:'promesas.db'
     ,autoload:true});

module.exports.Guardar = function(P)
{
    
     prom.insert(P, 
     function(err, doc) 
     { console.log('Inserted'
     , doc.Que, 
     'with ID'
     , doc._id); 
     }); 
    
    return P;
}

module.exports.Buscar = function(P)
{
 var T = new Array();
 prom.find
 ({}
 ,function(err, docs) 
 { 
  docs.forEach
  (function(d) 
  { 
  T.push(d);
   console.log('db.prom :', d.Que); 
  }
  );
 }
 ); 
 
 return T;
}

module.exports.Traer = function(P)
{
....
     prom.insert(P,.
     function(err, doc).
     { console.log('Inserted'
     , doc.Que,.
     'with ID'
     , doc._id);.
     });
     
     return P;
....                                                   return P;
}


