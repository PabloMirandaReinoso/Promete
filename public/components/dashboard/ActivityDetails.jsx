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
        <ul className="list-group list-group-flush">			
			{Array.isArray(list) ? 
			list.map
			(
			 (item, index) =>
			 ( 
				<li className="list-group-item" key={item.id} data-id={item.id} onClick={() => handleOpen(item.id)} >      
				<p><b>{item.what}</b></p>
				<span className="badge badge-primary badge-pill">2</span>
				</li>
			 
			 )
			)
			: null}
        </ul>
    </div>
</div>
);					
}