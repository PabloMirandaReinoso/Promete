function renderSwitch(param) {
  switch(param) {
    case '0':
      return 'Cerrado';
	case '1':
      return 'Abierto';
	case '-1':
      return 'Pendiente';
    default:
      return 'No lo sé';
  }
}

function ActivitySearch({label,list,state,open,close})
{  
  			 
  function handleOpen(data)
  {
    console.log('open-' + data );      
	open(data);	
  }
  
  function handleClose()
  {
    console.log('close-');      
	close();	
  }

return (
    <div><MaterialUI.Modal
        open={state}
        onClose={close}
        aria-h5ledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
		 <MaterialUI.Box className="MUI-Modal">
              
			<div className="container container-modal">
				<div className="row text-center card-bgc">
					<div className="col-10">
						<h4 className="">{label}</h4>
					</div>				
					<div className="col-2">
						<button onClick={() => handleClose()} 
						id="btnCierre"
						className="button-close">
						X
						</button>
					</div>
				</div>              
				<div className="">					
					<div className="">
						<div className="">			
							{Array.isArray(list) ? 
							list.map
							(
								(item, index) =>
								( 
								<div className="row item-search" key={item.id} data-id={item.id} onClick={() => handleOpen(item.id)}>
								<div className="col-6"  >
									<p><b>{item.when}</b></p>									
								</div>
								<div className="col-6" >									
									<p><b>{renderSwitch(item.state)}</b></p>
								</div>
								
								<div className="col">
									<p>{item.what}</p>
								</div>
								</div>
								)
							)
							: <div><h3>Nada para hacer</h3></div>}
						</div>
					</div>
				</div>
			</div> 
        </MaterialUI.Box>
	</MaterialUI.Modal>      
    </div>
  );
}

