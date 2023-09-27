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