function IdeasActions({label,open})
{
   const handleOpen = () => 
  { 
	open();	
  }
  
  const handleBuscar = () => 
  { 
	open();	
  }
return ( <div className="Buttons mt-3">
            <div className="row text-center">                                                
				<div className="col">
							<button onClick={() => handleOpen()} 
								id="btnAddIdea" 
								className="button-normal">
								Agregar
							</button>
				</div>				
			</div>
        </div>
);				
}