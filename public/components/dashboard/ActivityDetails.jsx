function ActivityDetails({label,list})
{  
return(
<div className="card ">
                    <div className="card-heading text-center">
                        <h4 className="card-title">{label} </h4></div>
                    <div className="card-body">
                        <ul className="list-group">
							{Array.isArray(list) ? 
								list.map
								(item => 
								<li key={item.id}>      
								<p><b>{item.description}</b></p>
							    </li>
							    )
							: null}
                        </ul>
                    </div>
                </div>
);					
}