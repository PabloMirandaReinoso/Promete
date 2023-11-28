  function Ideas({label,list,opener}) {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = list.length;

  const handleNext = () => {
	  
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  function handleOpen(data)
  {
    console.log('open-' + data );      
	opener(data);	
  }

  return (
  
  <div className="card">
    <div className="card-heading text-center card-bgc">
        <h5 className="card-title mt-2">{label} </h5>
	</div>
	
    <div className="card-body">
	{Array.isArray(list) && list.length>0 ?
	
      <MaterialUI.Box sx={{ flexGrow: 1 }}  >
		  <MaterialUI.Paper
			square
			elevation={0}
			sx={{
			  display: 'flex',
			  alignItems: 'center',
			  height: 50,
			  pl: 2,
			  bgcolor: 'background.default',
			}}
		    >
			<MaterialUI.Typography>{list[activeStep].title}</MaterialUI.Typography>
          </MaterialUI.Paper>
          <MaterialUI.Box sx={{  width: '100%', p: 2 }} onClick={() => handleOpen(list[activeStep])}>
            {list[activeStep].what}
          </MaterialUI.Box>
      <MaterialUI.MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <MaterialUI.Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next            
          </MaterialUI.Button>
        }
        backButton={
          <MaterialUI.Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            
            Back
          </MaterialUI.Button>
        }
      />
    </MaterialUI.Box>
	: null}
    </div>
</div>

    
  );
}