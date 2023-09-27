 async function GetData(url) 
 {
	return new Promise
	( 
		function (resolve,reject)
		{
		var id=Date.now();
		console.log('fetch' + id);

		fetch(url, 
			{
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
			  "Content-Type": "application/json",
			  // 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		  })
		   .then(function(response)
		    {
			 if (response.status == 200)
			 { 	
		      console.log('response-' + id);
			  
			  response.json()	 
			 .then(function(retrieve)
			  {
			   console.log('resolve-' + id);
			   resolve(retrieve);
			  });
			 }
			 else
			  {
				console.log('reject-' + id);				  
				reject(response.status);  
			  }
			})
		   .catch(function(err)
		    {
				console.log('catch-' + id);
				reject(T);
			});
		}
	)
}

async function PostData(url,data) 
 {
	return new Promise
	( 
		function (resolve,reject)
		{
		var id=Date.now();
		console.log('fetch ' + id);

		fetch(url, 
			{
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
			  "Content-Type": "application/json",
			  // 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		  })
		   .then(function(response)
		    {
			 if (response.status == 200)
			 { 	
		      console.log('response-' + id);
			  
			  response.json()	 
			 .then(function(retrieve)
			  {
			   console.log('resolve-' + id);
			   resolve(retrieve);
			  });
			 }
			 else
			  {
				console.log('reject-' + id);				  
				reject(response.status);  
			  }
			})
		   .catch(function(err)
		    {
				console.log('catch-' + id);
				reject(T);
			});
		}
	)
}
    
    



