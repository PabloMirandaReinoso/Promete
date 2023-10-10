function ActivityDetails({label,list,open})
{  
  			 
  function handleOpen(data)
  {
    console.log('open-' + data );      
	open(data);	
  }
return(
<div className="card ">
    <div className="card-heading text-center">
        <h4 className="card-title">{label} </h4>
	</div>
    <div className="card-body">
        <ul className="list-group">			
			{Array.isArray(list) ? 
			list.map
			(
			 (item, index) =>
			 ( 
				<li key={item.id} data-id={item.id} onClick={() => handleOpen(item.id)} >      
				<p><b>{item.what}</b></p>
				</li>
			 
			 )
			)
			: null}
        </ul>
    </div>
</div>
);					
}