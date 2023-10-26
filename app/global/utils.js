module.exports.toStringShort=function(dato)
{
 var retorno=null; 
 var dia='01';var mes='01';var ano='1900'; 
 
	try {		
			dia   = (dato.getDate()).toString().padStart(2,'0');
			mes   = (dato.getMonth()+1).toString().padStart(2,'0'); 
			ano   = (dato.getFullYear()).toString().padStart(4,'0');			
		} 
		catch (error) 
		{
			dia   = '01';
			mes   = '01'; 
			ano   = '1900';			
		} 
		finally {
		retorno = dia +'/' + mes + '/' + ano;
		} 
 
 return retorno;
}

module.exports.ToDate=function(dato)
{
 var retorno=null;
 
 
 if (dato!==undefined)
 {
	var fecha = dato.split(' ')[0] ; 
	var dia   = fecha.substring(0,2);
	var mes   = parseInt(fecha.substring(3,5))-1; 
	var ano   = fecha.substring(6,12); 
	retorno = new Date(ano , mes , dia )
 }
 else
 {
	 retorno = new Date(1 , 0 , 1 )
 }
 console.log('ToDate',retorno); 
 return retorno;
}

module.exports.ToDay=function ()
{
   var fecha=new Date();   
   
   var dia   = fecha.getDate();
   var mes   = fecha.getMonth(); 
   var ano   = fecha.getFullYear();
      
   return new Date(ano,mes,dia);
}

module.exports.AddDays=function (fecha,dias)
{
   var Temp = new Date();	
   Temp.setDate(fecha.getDate() + dias);
   
   return Temp;
}