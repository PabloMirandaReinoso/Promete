
function IdeaForm({idea,setter,state,close,save})
{  
  
  const [changed, setChanged] =  React.useState(false);	      
  function handleChange(event)
  {    
	setChanged( true);	
	setter({...idea,[event.target.id]: event.target.value});    
  }
    
  const handleSave = (data) => 
  { 
    setChanged(false);  
	save(data);
  }
    
  const handleClose = (data) => 
  {    
    setChanged(false);  
	close(data);	
  }
  
  return (
    <div><MaterialUI.Modal
        open={state}
        onClose={close}
        aria-h5ledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
		 <MaterialUI.Box className="MUI-Modal">
              
      <div className="container">
         <div className="row text-center card-bgc">
           <h4 className="">
           Recuerda tus Ideas</h4>
         </div>        
         {changed &&
		 <div className="row">
			<div className="col">
			<MaterialUI.Alert severity="warning">
				<MaterialUI.AlertTitle>Atención</MaterialUI.AlertTitle>				
			</MaterialUI.Alert>
			</div>
		 </div>
		 }
         <div className="row">
         <div className="d-none">
          <input value={idea.id} onChange={handleChange} id="id" type="text"></input>
         </div>
         </div>
         
		 <div className="row">
          <div className="col-12">
           <h5>Titulo</h5>          
           <textarea value={idea.title} onChange={handleChange} id="title" rows="2"
           className="input-form"></textarea>
          </div>
         </div>	 
		 
         <div className="row">
          <div className="col-12">
           <h5>De que se trata</h5>          
           <textarea value={idea.what} onChange={handleChange} id="what" rows="2"
           className="input-form"></textarea>
          </div>
         </div>	 
		  
		  <div className="row">
			  <div className="col-6">
			  <h5>Estado</h5>          
			   <select id="state" defaultValue="0" value={idea.state} onChange={handleChange}>
				<option value="0">Cerrado</option>
				<option value="1">Abierto</option>
				<option value="-1">Pendiente</option>        
			   </select>
			  </div>
		  </div>
         
         <div className="row mt-2 text-center mb-2">
			 <div className="col">
				<button onClick={() => handleClose(idea)} 
				id="btnCerrar" 
				className="button-normal">
				Salir
			   </button>
			 </div>
			 <div className="col">
			   <button onClick={() => handleSave(idea)} 
				id="btnGuardar" 
				className="button-normal">
				Guardar
			   </button>
			  </div>
          </div>
		</div>  
 
        </MaterialUI.Box>
		</MaterialUI.Modal>      
    </div>
  );
}