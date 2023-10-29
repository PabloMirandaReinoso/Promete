function ActivityDetails({label,list,open})
{  
  			 
  function handleOpen(data)
  {
    console.log('open-' + data );      
	open(data);	
  }
return(
<div className="card">
    <div className="card-heading text-center card-bgc">
        <h5 className="card-title mt-2">{label} </h5>
	</div>
    <div className="card-body">
        <div className="row list-group list-group-flush">			
			{Array.isArray(list) ? 
			list.map
			(
			 (item, index) =>
			 ( 
				<div className="col list-group-item" key={item.id} data-id={item.id} onClick={() => handleOpen(item.id)} >      
				<p><b>{item.what}</b></p>				
				</div>
			 
			 )
			)
			: null}
        </div>
    </div>
</div>
);					
}