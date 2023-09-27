function Default()
{
    const [loaded, setLoaded] =  React.useState(false);
	
	const [next, setNext] =  React.useState({"date":"","total":""});
	const [today, setToday] =  React.useState({"date":"","total":""});
	const [prev, setPrev] =  React.useState({"date":"","total":""});
	
	const [details,setDetails] =  React.useState([]);
	const [urgent, setUrgent] =  React.useState([]);
	const [week, setWeek] =  React.useState([]);
	
	React.useEffect(() => {	 
	 GetData('http://localhost:4000/Activities/Details')
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setDetails(data);
		   });		   
	 
	 GetData('http://localhost:4000/Activities/Urgent')
	.then(
		   (data)=>
		   {
			   console.log(data);
			   setUrgent(data);
		   });	 		   
	 
	 GetData('http://localhost:4000/Activities/Week')
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setWeek(data);
		   });		   
	
	 GetData('http://localhost:4000/Activities/Next')
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setNext(data);
		   });		   
	 
	 GetData('http://localhost:4000/Activities/Today')
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setToday(data);}		   
		   );		   
	 
	 GetData('http://localhost:4000/Activities/Prev')
	 .then(
		   (data)=>
		   {
			   console.log(data);
			   setPrev(data);
		   });
	console.log (details,urgent,week,next,today,prev,loaded); 
	},[]);	
	
return(	
<div className="container-fluid">
		<Navigator/>
        <div className="row g-1">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">			
                <Activity label={'Anteriores'} date={prev.date} total={prev.total} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">			    
                <Activity label={'Actuales'} date={today.date} total={today.total} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">						
                <Activity label={'Posteriores'} date={next.date} total={next.total} />
            </div>
        </div>
		
        <div className="row mt-2">
		<div className="col-lg-12 col-md-12 col-sm-12 col-12">			    
                <ActivityDetails label={'Hoy'} list={details}/>
				<MaterialUI.Button variant="contained">Hello world</MaterialUI.Button>
            </div>
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">			
                <ActivityDetails label={'Urgentes'} list={urgent}/>
            </div>            
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                <ActivityDetails label={'Semana'} list={week}/>
            </div>
			
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
                <Ideas/>
            </div>
        </div>
		
        <div className="row">
            <div className="col-md-12">
                <footer>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 footer-navigation">
                            <h4><a href="#">Company<span>logo </span></a></h4>
                            <p className="links"><a href="#">Home</a><strong> · </strong><a href="#">Blog</a><strong> · </strong><a href="#">Pricing</a><strong> · </strong><a href="#">About</a><strong> · </strong><a href="#">Faq</a><strong> · </strong><a href="#">Contact</a></p>
                            <p
                            className="company-name">Company Name © 2015 </p>
                        </div>
                        <div className="col-md-4 col-sm-6 footer-contacts">
                            <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                                <p><span className="new-line-span">21 Revolution Street</span> Paris, France</p>
                            </div>
                            <div><i className="fa fa-phone footer-contacts-icon"></i>
                                <p className="footer-center-info email text-left"> +1 555 123456</p>
                            </div>
                            <div><i className="fa fa-envelope footer-contacts-icon"></i>
                                <p> <a href="#" target="_blank">support@company.com</a></p>
                            </div>
                        </div>
                        <div className="clearfix visible-sm-block"></div>
                        <div className="col-md-4 footer-about">
                            <h4>About the company</h4>
                            <p> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                            </p>
                            <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-github"></i></a></div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
</div>
);
}

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<Default />);