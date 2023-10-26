function ActivityActions({label,open})
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
								id="btnAdd" 
								className="button-normal">
								Agregar
							</button>
				</div>
				<div className="col">
							<button onClick={() => handleBuscar()} 
								id="btnSearch" 
								className="button-normal">
								Buscar
							</button>
				</div>
			</div>
        </div>
);				
}