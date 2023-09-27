function ActivityForm({data,state,close})
{  
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
         
         <div className="row">
         <div className="d-none">
          <input id="txtId" className="hidden"></input>
         </div>
         </div>
         
         <div className="row">
          <div className="col-4 col-md-4">
           <label>Cuando</label>
           <input id="txtCuando" type="text"
            className="form-control">
           </input>
          </div>          
          <div className="col-4 col-md-4">
           <label>Cuanto</label>
           <input id="txtCuanto" type="text"
            className="form-control">
           </input>          
          </div>		  
		  <div className="col-4 col-md-4">
           <label>Prioridad</label>
           <input id="txtPrioridad" type="text"
            className="form-control">
           </input>          
          </div>		  
         </div>
         
         <div className="row">
          <div className="col-12">
           <label>De que se trata</label>          
           <textarea id="txtQue" rows="2"
           className="form-control"></textarea>
          </div>
         </div>	 
         
         <div className="row">
       <div className="col-12">
           <label>Como</label>          
           <textarea id="txtComo" rows="2"
           className="form-control"></textarea>
          </div>
		 <div className="col-12">
           <label>Donde</label>          
           <textarea id="txtDonde" rows="2"
           className="form-control"></textarea>
          </div>
		  
		  <div className="col-12">
           <label>Para Quien</label>          
           <textarea id="txtQuien" rows="2"
           className="form-control"></textarea>
          </div>
		  
		  <div className="col-12">
           <label>Estado</label>          
           <textarea id="txtEstado" rows="2"
           className="form-control"></textarea>
          </div>
      </div>           
		  
         
         <div className="row text-center">
		 <div className="col">
           <button  type="button" 
            className="btn btn-default"
            data-dismiss="modal"
            >Cerrar
           </button>
		 </div>
		 <div className="col">
           <button type="button" 
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