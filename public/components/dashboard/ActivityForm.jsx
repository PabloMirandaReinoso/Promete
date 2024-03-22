
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
        aria-h5ledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
		 <MaterialUI.Box className="MUI-Modal">
              
      <div className="container">
         <div className="row text-center card-bgc">
			<div className="col-10">
				<h4 className="">Manten tus Promesas</h4>
		    </div>
		    <div className="col-2">
				<button onClick={() => handleClose(activity)} 
            id="btnCierre"
            className="button-close">
            X
           </button>
		    </div>
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
           <h5>Cuando</h5>
           <input value={activity.when} onChange={handleChange} id="when" 
            className="input-form" >
           </input>           
          </div>          
          <div className="col-6 col-md-6">
           <h5>Cuanto</h5>
           <input value={activity.cost} onChange={handleChange} id="cost" type="text"
            className="input-form">
           </input>          
          </div>		  		  
         </div>
         
         <div className="row">
          <div className="col-12">
           <h5>De que se trata</h5>          
           <textarea value={activity.what} onChange={handleChange} id="what" rows="2"
           className="input-form"></textarea>
          </div>
         </div>	 
         
         <div className="row">
       <div className="col-12">
           <h5>Como</h5>          
           <textarea value={activity.how} onChange={handleChange} id="how" rows="2"
           className="input-form"></textarea>
          </div>
		 <div className="col-12">
           <h5>Donde</h5>          
           <textarea value={activity.where} onChange={handleChange} id="where" rows="2"
           className="input-form"></textarea>
          </div>
		  
		  <div className="col-12">
           <h5>Para Quien</h5>          
           <textarea value={activity.who} onChange={handleChange} id="who" rows="2"
           className="input-form"></textarea>
          </div>
		  
		  <div className="row">
		  <div className="col-6">
		  <h5>Estado</h5>          
		   <select id="state" defaultValue="0" value={activity.state} onChange={handleChange}>
			<option value="0">Cerrado</option>
			<option value="1">Abierto</option>
			<option value="-1">Pendiente</option>        
		   </select>
          </div>
		  
		  <div className="col-6 col-md-6">
           <h5>Prioridad</h5>           
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
           <button onClick={() => handleSave(activity)} 
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