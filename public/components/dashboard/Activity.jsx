function Activity({label,date,total})
{
return(
<div className="card">
                    <div className="card-heading text-center mt-2">
                        <h5 className="card-title shadow pb-2">{date}</h5></div>
                    <div className="card-body text-center">
                        <div className="col"><span>{label}</span></div><button className="btn btn-warning btn-xs float-right btn-redondo" type="button">{total}</button></div>
                </div>
);				
}