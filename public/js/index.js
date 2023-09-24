$(document).ready
 (function()
  {
   
    $('#btnGuardar').click(
    function() {    
    Guardar();});
    
    $body = $(document.body);
    $("#modLoader").remove();
    
    $body.append
    ('<div id="modLoader" class="loader"></div>');   
    
    $( "#txtCuando" ).datepicker({
      showOn: "button",
      buttonImage: "images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "+"
      ,format: "dd/mm/yy"
      ,dateFormat: "dd/mm/yy"
    });
    
    $("carPromesas").carousel();
    
    Buscar();   
    
  }
 );

$(document).ajaxStart
 (
 function() 
 {LoaderShow();});
    
$(document).ajaxStop
 (
 function()
  {LoaderHide();});

function Editar(sId)
{
Traer(sId);
}

function Asignar(P)
{

$('#txtCuando').val(P.Cuando);
$('#txtQue').val(P.Que);
$('#txtDonde').val(P.Donde);
$('#txtQuien').val(P.Quien);
$('#txtComo').val(P.Como);
$('#txtPrioridad').val(P.Prioridad);
$('#txtEstado').val(P._id);
$('#txtId').val(P._id);
        
$('#modPromesas').modal('show');
}

function Obtener ()
{
var P =  new Object();
P.Cuando=$('#txtCuando').val();
P.Que=$('#txtQue').val();
P.Donde=$('#txtDonde').val();
P.Quien=$('#txtQuien').val();
P.Como=$('#txtComo').val();
P.Prioridad=$('#txtPrioridad').val();
P.Estado=$('#txtEstado').val();
P.Id=$('#txtId').val();
return P;
}

function Traer(sId)
{
 $.get
 ('http://localhost:4000/prom/'+sId,
 function(data, status)
 {Asignar(data);}
 );
}

function Guardar()
{

var P; 
 P=Obtener(); 
 $.post
 ('http://localhost:4000/prom/',P,
 function(data, status)
 {
  Asignar(data);
  Buscar();
  }
 );
 
 }

function Buscar()
{
 $.get
 ('http://localhost:4000/prom/',null,
 function(data, status)
 {Promesas(data)}
 );
}

function Promesas(data)
{
 $('#divPromesas').remove();
 $('body').append($(data));
 $('#tabPromesas').DataTable
    (
      {
        "paging":   true,
        "ordering": false,
        "info":     false
        ,"bLengthChange" :false
      }
    );
 
}

function LoaderHide()
{
$(document.body).removeClass("loading");
}

function LoaderShow()
{
$(document.body).addClass("loading");
}