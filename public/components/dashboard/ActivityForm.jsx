
function ActivityForm({activity,setter,state,close,save})
{  
  
  const [changed, setChanged] =  React.useState(false);	      
  function handleChange(event)
  {    
	setChanged( true);	
	setter({...activity,[event.target.id]: event.target.value});    
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
		 <MaterialUI.Box className="MUI-Modal">
              
      <div className="container">
         <div className="row text-center">
           <h4 className="">
           Manten tus Promesas</h4>
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
          <input value={activity.id} onChange={handleChange} id="id" type="text"></input>
         </div>
         </div>
         
         <div className="row g-1">
          <div className="col-6 col-md-6">
           <label>Cuando</label>
           <input value={activity.when} onChange={handleChange} id="when" type="text"
            className="form-control">
           </input>
          </div>          
          <div className="col-6 col-md-6">
           <label>Cuanto</label>
           <input value={activity.cost} onChange={handleChange} id="cost" type="text"
            className="form-control">
           </input>          
          </div>		  		  
         </div>
         
         <div className="row">
          <div className="col-12">
           <label>De que se trata</label>          
           <textarea value={activity.what} onChange={handleChange} id="what" rows="2"
           className="form-control"></textarea>
          </div>
         </div>	 
         
         <div className="row">
       <div className="col-12">
           <label>Como</label>          
           <textarea value={activity.how} onChange={handleChange} id="how" rows="2"
           className="form-control"></textarea>
          </div>
		 <div className="col-12">
           <label>Donde</label>          
           <textarea value={activity.where} onChange={handleChange} id="where" rows="2"
           className="form-control"></textarea>
          </div>
		  
		  <div className="col-12">
           <label>Para Quien</label>          
           <textarea value={activity.who} onChange={handleChange} id="who" rows="2"
           className="form-control"></textarea>
          </div>
		  
		  <div className="row">
		  <div className="col-6">
		  <label>Estado</label>          
		   <select id="state" defaultValue="0" value={activity.state} onChange={handleChange}>
			<option value="0">Cerrado</option>
			<option value="1">Abierto</option>
			<option value="-1">Pendiente</option>        
		   </select>
          </div>
		  
		  <div className="col-6 col-md-6">
           <label>Prioridad</label>           
		   <select id="priority" defaultValue="0" value={activity.priority} onChange={handleChange}>
			<option value="0">Normal</option>
			<option value="1">Alta</option>
			<option value="-1">Baja</option>        
		   </select>
          </div>		  
		  </div>
      </div>           		  
         
         <div className="row mt-2 text-center mb-2">
		 <div className="col">
            <button onClick={() => handleClose(activity)} 
            id="btnCerrar" 
            className="btn btn-primary">
            Salir
           </button>
		 </div>
		 <div className="col">
           <button onClick={() => handleSave(activity)} 
            id="btnGuardar" 
            className="btn btn-primary">
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