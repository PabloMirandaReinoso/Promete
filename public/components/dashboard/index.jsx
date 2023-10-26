function saveActivity(data,setterActivity,setterModal)
{
	console.log('save',data);			   
	
	var url='http://localhost:4000/Activities/Save';
	PostData(url,data)
	 .then(
		   (result)=>
		   {			   
		       console.log('save' , result);	
			   setterActivity(result);			   
			   
		   });		   
		
}

function loadActivity(id,setterActivity,setterModal)
{	
	
	var url='http://localhost:4000/Activities/Activity/'+ id ;	
	console.log('url',url);			   
	
	GetData(url)
	 .then(
		   (data)=>
		   {			   
			   setterActivity(data);			   
			   setterModal(true);
		   });		   
		
}

function loadData(url,setter)
{
	GetData(url)
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setter(data);
		   });		   
}
function activityDefault()
{
 return {"id":"", "what":"","when":"","where":"","who":"","cost":"0","priority":"0","state":"1","how":""}
}

function Default()
{	
	const [next, setNext] =  React.useState({"date":"","total":""});
	const [actual, setActual] =  React.useState({"date":"","total":""});
	const [prev, setPrev] =  React.useState({"date":"","total":""});
	
	const [today,setToday] =  React.useState([]);
	const [pending, setPending] =  React.useState([]);
	const [week, setWeek] =  React.useState([]);
	
	console.log ('setter-init');
	const [activityform, setActivityForm] =  React.useState(activityDefault);	
	const [modalstate, setModalState] = React.useState(false);
    
	const handleOpen = (data) => 
	{	
		console.log ('modal-open');
		loadActivity(data,setActivityForm,setModalState);
	}
    
	const handleClose = (data) =>
	{	
		console.log ('modal-close');			
		setModalState(false);				
	}
	
	const handleSave = (data) =>
	{	
		console.log ('modal-save');		
		saveActivity(data,setActivityForm,setModalState);
		setModalState(true);	        
	}
	
	const handleAdd = (data) => 
	{	
		console.log ('modal-add');
		setActivityForm(activityDefault);
		setModalState(true);				
	}
	
	React.useEffect(() => 
	{	 		
			loadData('http://localhost:4000/Activities/Actual',setActual);
			loadData('http://localhost:4000/Activities/Pending',setPending);
			loadData('http://localhost:4000/Activities/Week',setWeek);
			
			loadData('http://localhost:4000/Activities/Next',setNext);
			loadData('http://localhost:4000/Activities/Today',setToday);
			loadData('http://localhost:4000/Activities/Previous',setPrev);	
		
	},[modalstate]);	
	

	
return(	
<div className="container-fluid">
		<Navigator/>
        <div className="row g-0">
			<div className="row g-0">
				<div className="col card-bgc text-center"><h4 class="card-title mt-2">Actividades</h4></div>			
			</div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">			
                <Activity label={'Anteriores'} date={prev.date} total={prev.total} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">			    
                <Activity label={'Actuales'} date={actual.date} total={actual.total} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">						
                <Activity label={'Posteriores'} date={next.date} total={next.total} />
            </div>			
        </div>		
		<div className="row g-1">
			<ActivityActions label={'Agregar'} open={handleAdd}/>		
		</div>
        <div className="row mt-2">
		<div className="col-lg-12 col-md-12 col-sm-12 col-12">			    
                <ActivityDetails label={'Hoy'} list={today} open={handleOpen}/>				
            </div>
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">			
                <ActivityDetails label={'Pendientes'} list={pending} open={handleOpen}/>
            </div>            
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                <ActivityDetails label={'Semana'} list={week} open={handleOpen}/>
            </div>
			
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
                <Ideas/>
            </div>
        </div>
		<div className="row">
		<ActivityForm activity={activityform} setter={setActivityForm} state={modalstate} close={handleClose} save={handleSave} />
		</div>
</div>
);
}

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<Default />);