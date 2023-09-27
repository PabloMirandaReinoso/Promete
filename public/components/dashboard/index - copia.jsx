function Ideas()
{
return (
<div className="card ">
                    <div className="card-heading text-center">                        
                        <h4 className="card-title">Ideas </h4></div>
                    <div className="card-body">
                        <div className="jumbotron">
                            <h1>Heading text</h1>
                            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                            <p><a className="btn btn-default btn-redondo" role="button" href="#">+ </a></p>
                        </div>
                    </div>
                </div>
);				
}

function ActivityDetails({label},{list})
{

 const listItems = list.map(person =>
    <li key={person.id}>      
      <p>
        <b>{person.descripcion}</b>          
      </p>
    </li>
  );  
  
return(
<div className="card ">
                    <div className="card-heading text-center">
                        <h4 className="card-title">{label} </h4></div>
                    <div className="card-body">
                        <ul className="list-group">
							{listItems}
                        </ul>
                    </div>
                </div>
);					
}

function Activity({label,date,total})
{
return(
<div className="card ">
                    <div className="card-heading text-center mt-2">
                        <h5 className="card-title shadow pb-2">{date}</h5></div>
                    <div className="card-body text-center">
                        <div className="col"><span>{label}</span></div><button className="btn btn-warning btn-xs float-right btn-redondo" type="button">{total}</button></div>
                </div>
);				
}

function Navigator()
{
return (
<div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-default custom-header">
                    <div className="container-fluid">
                        <div className="navbar-header"><a className="navbar-brand navbar-link" href="#">Inicio</a>
                            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav links">
                                <li role="presentation"><a href="#">Overview </a></li>
                                <li role="presentation"><a href="#">Surveys </a></li>
                                <li role="presentation"><a href="#"> Reports</a></li>
                                <li role="presentation"><a href="#" className="custom-navbar"> Roles<span className="badge">new</span></a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#"> <span className="caret"></span><img src="assets/img/avatar.jpg" className="dropdown-image"></img></a>
                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                        <li role="presentation"><a href="#">Settings </a></li>
                                        <li role="presentation"><a href="#">Payments </a></li>
                                        <li role="presentation" className="active"><a href="#">Logout </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
);
}

function Default()
{
return(	
<div className="container-fluid">
		<Navigator/>
        <div className="row g-1">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <Activity label={'Anteriores'} date={'01/01/2023'} total={'1'} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <Activity label={'Actuales'} date={'09/01/2023'} total={'2'} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <Activity label={'Posteriores'} date={'01/01/2023'} total={'1'} />
            </div>
        </div>
		
        <div className="row mt-2">
		<div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <ActivityDetails/>
            </div>
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                <ActivityDetails/>
            </div>            
			
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                <ActivityDetails/>
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