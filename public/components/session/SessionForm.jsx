const isWindowContext = typeof window !== "undefined";




function SessionForm({session,setter,state,validate,forgotten})
{  
  
  const [changed, setChanged] =  React.useState(false);	      
  function handleChange(event)
  {    
	setChanged( true);	
	setter({...session,[event.target.id]: event.target.value});    
  }
    
  const handleValidate = (data) => 
  { 
    setChanged(false);  
	//save(data);
  }
    
  const handleForgotten = (data) => 
  {    
    setChanged(false);  
	//forgotten(data);	
  }
  

  const search = isWindowContext && window.location.href;  
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
           Inicio de Session</h4>
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
          <input value={session.id} onChange={handleChange} id="id" type="text"></input>
         </div>
         </div>
         
         <div className="row text-center g-1">
          <div className="col">
           <h5>Usuario</h5>
           <input value={session.user} onChange={handleChange} id="user" type="text"
            className="input-form">
           </input>
          </div>         
		  <div>Display the qs: {search || 'nothing'}</div>
		<div className="row text-center g-1">		  
          <div className="col">
           <h5>Código de acceso</h5>
           <input value={session.password} onChange={handleChange} id="password" type="text"
            className="input-form">
           </input>          
          </div>		  		  
		 </div>
         </div>         
         <div className="row mt-2 text-center mb-2">
		 <div className="col">
            <button onClick={() => handleValidate(session)} 
            id="btnValidate" 
            className="button-normal">
            Validar
           </button>
		 </div>
		 <div className="col">
           <button onClick={() => handleForgotten(session)} 
            id="btnForgotten" 
            className="button-normal">
            Olvido
           </button>
		  </div>
          </div>
		  </div>  
 
        </MaterialUI.Box>
		</MaterialUI.Modal>      
    </div>
  );
}