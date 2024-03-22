
exports.Default =
 function(req, res, next)
 { 
    
    if (req.session.logon) 
	{  
		res.render('../views/default.ejs');    
	}
	else
	{		
	    res.render('../views/session/logon.ejs');    
		
	}
 }

exports.Logon =
 function(req, res, next)
 {    
    
	req.session.logon="##$$";
	res.render('../views/default.ejs');     
		
	
 }

