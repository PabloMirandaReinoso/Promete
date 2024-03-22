function Default()
{
	return(	
	    <div className="top-content">        	
            <div className="inner-bg">
                <div className="container">                    
                    <div className="row">					
                        <div className="col-sm-6 col-sm-offset-3 form-box">
                        	<div className="form-top">
                        		<div className="form-top-left">
                        			<h3>Debes identificarte</h3>
                            		<p>Ingresa tu usuario y clave</p>
                        		</div>
                        		<div className="form-top-right">
                        			<i className="fa fa-key"></i>
                        		</div>
                            </div>
                            <div className="form-bottom">
                                
                                      
							<div className="alert alert-danger"></div>						 
							<div className="alert alert-success"></div>						 	
                                
			
                        <form role="form" action="/" role="form" method="post" method="post" className="login-form">
                                                
                                                
                  <div className="form-group">
	            <label for="username"  className="sr-only">Email</label>
	            <input type="text" name="username" id="username" className="form-control form-username"  required  placeholder="Email"/>
	           
	        </div>
   
			<div className="form-group" >
				<label for="password"  className="sr-only">clave</label> 
				<input type="password" name="password" id="password" className="form-control  form-username" ng-model="user.password" required  placeholder="clave"/>
			    
			</div>
			
			
			                        <button type="submit" className="btn">Sign in!</button>
			                    </form>
		                    </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
		);
}

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<Default />);
