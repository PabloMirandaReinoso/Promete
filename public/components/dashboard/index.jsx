function handleRuntime(err) {
  console.log('Oh noooo!');
  console.log(err);
}

function saveActivity(data,setterActivity,setterModal)
{
	console.log('save',data);			   
	
	var url='/Activities/Save';
	PostData(url,data)
	 .then(
		   (result)=>
		   {			   
		       console.log('save' , result);	
			   setterActivity(result);			   
			   
		   })
	.catch(handleRuntime);		   
		
}

function loadActivity(id,setterActivity,setterModal)
{	
	
	var url='/Activities/Activity/'+ id ;	
	console.log('url',url);			   
	
	GetData(url)
	 .then(
		   (data)=>
		   {			   
			   setterActivity(data);			   
			   setterModal(true);
		   })
	.catch(handleRuntime);
		
}

function loadIdea(id,setterIdea,setterModal)
{	
	
	var url='/Ideas/Idea/'+ id ;	
	console.log('url',url);			   
	
	GetData(url)
	 .then(
		   (data)=>
		   {			   
			   setterIdea(data);			   
			   setterModal(true);
		   })
	.catch(handleRuntime);
		
}

function loadData(url,setter)
{
	GetData(url)
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setter(data);
		   })
    .catch(handleRuntime);
}

function loadSearch(setterActivity,setterModal)
{	
	
	var url='/Activities/Search';	
	console.log('url',url);			   
	
	PostData(url,activityDefault())
	 .then(
		   (data)=>
		   {			   
			   setterActivity(data);			   
			   setterModal(true);
		   })
	.catch(handleRuntime);		   
		
}

function activityDefault()
{
 return {"id":"", "what":"","when":"","where":"","who":"","cost":"0","priority":"0","state":"1","how":""}
}

function ideaDefault()
{
	return {"title":"Sin Ideas","what":"Ingresa una idea","state":"","id":""}
}

function saveIdea(data,setterIdea,setterModal)
{
	console.log('save-idea',data);			   
	
	var url='/Ideas/Save';
	PostData(url,data)
	 .then(
		   (result)=>
		   {			   
		       console.log('save' , result);	
			   setterIdea(result);			   
			   
		   })
	.catch(handleRuntime);		   
		
}

function Default()
{	
	const [next, setNext] =  React.useState({"date":"","total":"","activities":[]});
	const [actual, setActual] =  React.useState({"date":"","total":"","activities":[]});
	const [prev, setPrev] =  React.useState({"date":"","total":"","activities":[]});
	
	const [today,setToday] =  React.useState([]);
	const [pending, setPending] =  React.useState([]);
	const [week, setWeek] =  React.useState([]);
	
	
	
	const handleOpenActivity = (data) => 
	{	
		console.log ('modal-open',data);
		loadActivity(data,setActivityForm,setModalActivityState);
	}
    
	const handleCloseActivity = (data) =>
	{	
		console.log ('modal-close');			
		setModalActivityState(false);				
	}	
	
	const handleSaveActivity = (data) =>
	{	
		
		saveActivity(data,setActivityForm,setModalActivityState);
		setModalActivityState(true);	        
	}
	
	const handleAddActivity = (data) => 
	{	
		
		setActivityForm(activityDefault);
		setModalActivityState(true);				
	}
	
	const handleSearchActivity = () => 
	{	
		
		loadSearch(setActivitySearch,setModalSearchState);
		
	}
	
	const handleCloseSearch = () =>
	{	
		console.log ('modal-close');			
		setModalSearchState(false);				
	}
	
	const handleAddIdea = (data) => 
	{	
		console.log ('modal-idea');
		setIdeaForm(ideaDefault);
		setModalIdeaState(true);				
	}
	
	const handleOpenIdea = (data) => 
	{	
		console.log ('modal-idea',data);
		setIdeaForm(data);
		setModalIdeaState(true);				
	}
	
	const handleSaveIdea = (data) =>
	{	
		console.log ('modal-save-idea');		
		saveIdea(data,setIdeaForm,setModalIdeaState);
		setModalIdeaState(true);	        
	}
	
	const handleCloseIdea = (data) =>
	{	
		console.log ('modal-close');			
		setModalIdeaState(false);				
	}
	
	/*Session*/
	const [activityform, setActivityForm] =  React.useState(activityDefault);	
	
	const [modalactivitystate, setModalActivityState] = React.useState(false);    
	const [modalideastate, setModalIdeaState] = React.useState(false);    
	const [modalsearchstate, setModalSearchState] = React.useState(false);    
	
	const [sessionstate, setSessionState] = React.useState(true);	
	const [sessionform, setSessionForm] =  React.useState({"user":"","id":""});
	
	const [ideaform, setIdeaForm] =  React.useState(ideaDefault);
	const [ideas, setIdeas] =  React.useState([ideaDefault]);
	const [activitysearch, setActivitySearch] =  React.useState([activityDefault]);
	
	const handleForgotten = (data) =>
	{	
		console.log ('session-forgotten');	
	}
	
	const handleValidate = (data) => 
	{	
		console.log ('session-validate');		
	}	

	const handleActivities = (data) => 
	{	
		console.log ('activities');		
		setActivitySearch(data.activities);
		setModalSearchState(true);
	}	
	
	React.useEffect(() => 
	{	 		
			loadData('/Activities/Actual',setActual);
			loadData('/Activities/Pending',setPending);
			loadData('/Activities/Week',setWeek);
			
			loadData('/Activities/Next',setNext);
			loadData('/Activities/Today',setToday);
			loadData('/Activities/Previous',setPrev);	
			
			loadData('/Ideas/Active',setIdeas);	
		
	},[modalideastate,modalactivitystate]);	
	

	
return(	
<div className="container-fluid">
		<Navigator/>
        <div className="row g-0">
			<div className="row g-0">
				<div className="col card-bgc text-center"><h4 className="card-title mt-2">Actividades</h4></div>			
			</div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">			
                <Activity label={'Anteriores'} date={prev.date} total={prev.total}  activities={prev}  opener={handleActivities}  />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">			    
                <Activity label={'Actuales'} date={actual.date} total={actual.total} activities={actual}  opener={handleActivities}  />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">						
                <Activity label={'Posteriores'} date={next.date} total={next.total} activities={next}  opener={handleActivities}  />
            </div>			
        </div>		
		<div className="row g-1">
			<ActivityActions label={'Agregar'} open={handleAddActivity} search={handleSearchActivity}/>		
		</div>
        <div className="row mt-2">
		<div className="col-lg-12 col-md-12 col-sm-12 col-12">			    
                <ActivityDetails label={'Hoy'} list={today} open={handleOpenActivity}/>				
            </div>
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">			
                <ActivityDetails label={'Pendientes'} list={pending} open={handleOpenActivity}/>
            </div>            
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                <ActivityDetails label={'Semana'} list={week} open={handleOpenActivity}/>
            </div>			
            
        </div>
		<div className="row mt-2">
			<div className="col">
                <Ideas label="Ideas" list={ideas} opener={handleOpenIdea}/>
            </div>
		</div>
		<div className="row g-1">
			<IdeasActions label={'Agregar'} open={handleAddIdea}/>		
		</div>
		
		<div className="row">
		<ActivityForm activity={activityform} setter={setActivityForm} state={modalactivitystate} close={handleCloseActivity} save={handleSaveActivity} />
		<IdeaForm idea={ideaform} setter={setIdeaForm} state={modalideastate} close={handleCloseIdea} save={handleSaveIdea} />
		<ActivitySearch label={'Busqueda'} list={activitysearch} state={modalsearchstate} open={handleOpenActivity} close={handleCloseSearch} />-->
		</div>
		
		
		
</div>
);
}

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<Default />);