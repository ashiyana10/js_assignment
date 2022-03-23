//this is for the addition operation
function addition() {
	let number1=document.getElementById("number1").value;
	let number2=document.getElementById("number2").value;
	
	try{
		//here check user mandatory to enter both values 
		if(number1=='' || number2 =='')
		{
			throw('Enter value');
		}
		else{
			/*number1 and number2 datatype is string so + operator perform concatenation.. 
			so here convert string to int datatype*/
			let ans=parseInt(number1)+parseInt(number2);
			document.getElementById('answer').innerHTML=ans;
		}
	}
	catch(e)
	{
		alert("Error : " +e);
	}

}

//this is for the subtraction operation
function subtraction() {

	let number1=document.getElementById("number1").value;
	let number2=document.getElementById("number2").value;
	try{
		//here check user mandatory to enter both values 
		if(number1=='' || number2 =='')
		{
			throw('Enter value');
		}
		else{
			let ans=number1-number2;
			document.getElementById('answer').innerHTML=ans;
		}
	}
	catch(e)
	{
		alert("Error : " +e);
	}
		
}

//this is for the multiplication operation
function multiplication() {
	let number1=document.getElementById("number1").value;
	let number2=document.getElementById("number2").value;
	try{
		//here check user mandatory to enter both values 
		if(number1=='' || number2 =='')
		{
			throw('Enter value');
		}
		else{
			let ans=number1*number2;
			document.getElementById('answer').innerHTML=ans;
		}
	}
	catch(e)
	{
		alert("Error : " +e);
	}
	
}

//this is for the division operation
function division() {
	let number1=document.getElementById("number1").value;
	let number2=document.getElementById("number2").value;
	try{
		//here check user mandatory to enter both values 
		if(number1=='' || number2=='')
		{
			throw("Enter value");
		}
		else {
			//first check user enter both value then check divide by zero
				if(number2==0){
					throw("divide by zero");
				}
				else{
					let ans=number1/number2;
					document.getElementById('answer').innerHTML=ans;
				}
			}
	}

	
	catch(e)
	{
		alert("Error : " +e);
	}
		
}
//this is for the modulo operation
function modulo() {
	
	let number1=document.getElementById("number1").value;
	let number2=document.getElementById("number2").value;
	try{
		//here check user mandatory to enter both values 
		if(number1=='' || number2=='')
		{
			throw("Enter value");
		}
		else {
			//first check user enter both value then check divide by zero
				if(number2==0){
					throw("divide by zero");
				}
				else{
					let ans=number1%number2;
					document.getElementById('answer').innerHTML=ans;
				}
			}
	}

	
	catch(e)
	{
		alert("Error : " +e);
	}
		
}
