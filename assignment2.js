//this is for the addition operation
function addition() {
	
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	
	try{

		//Here check user mandatory to enter both values 
		if(number1 == '' || number2 == '')
		{
			throw('Enter Values');
		}
		else{
				//Convert string datatype to integer datatype
				number1 = parseInt(number1);
				number2 = parseInt(number2);

				//Check enter values integer or not
				if(Number.isInteger(number1)  &&  Number.isInteger(number2)){
				
					/*Here let have block level scope that means it only accesible in inner if statement part*/
					let ans = `${number1 + number2}`;//here use template literal
					document.getElementById('answer').innerHTML = ans;//display answer
					document.getElementById('errormsg').innerHTML = '';//clear the previous any error msg	
					}
					else //execute when enter value is not integer
					{
						throw("Enter Integer Values");
					}
		}
		
	}
	catch(e)
	{
		document.getElementById('answer').innerHTML = '';//clear the previous answer
		document.getElementById('errormsg').innerHTML = `Error : ${e}`;//here use template literal
	}

}




//this is for the subtraction operation
function subtraction() {
	
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	
	try{

		//Here check user mandatory to enter both values 
		if(number1 == '' || number2 == '')
		{
			throw('Enter Values');
		}
		else{
				//Convert string datatype to integer datatype
				number1 = parseInt(number1);
				number2 = parseInt(number2);

				//Check enter values integer or not
				if(Number.isInteger(number1)  &&  Number.isInteger(number2)){
				
					/*Here let have block level scope that means it only accesible in inner if statement part*/
					let ans = `${number1 - number2}`;//here use template literal
					document.getElementById('answer').innerHTML = ans;//display answer
					document.getElementById('errormsg').innerHTML = '';//clear the previous any error msg	
					}
					else //execute when enter value is not integer
					{
						throw("Enter Integer Values");
					}
		}
		
	}
	catch(e)
	{
		document.getElementById('answer').innerHTML = '';//clear the previous answer
		document.getElementById('errormsg').innerHTML = `Error : ${e}`;//here use template literal
	}

}



//this is for the multiplication operation
function multiplication() {
	
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	
	try{

		//Here check user mandatory to enter both values 
		if(number1 == '' || number2 == '')
		{
			throw('Enter Values');
		}
		else{
				//Convert string datatype to integer datatype
				number1 = parseInt(number1);
				number2 = parseInt(number2);

				//Check enter values integer or not
				if(Number.isInteger(number1)  &&  Number.isInteger(number2)){
				
					/*Here let have block level scope that means it only accesible in inner if statement part*/
					let ans = `${number1 * number2}`;//here use template literal
					document.getElementById('answer').innerHTML = ans;//display answer
					document.getElementById('errormsg').innerHTML = '';//clear the previous any error msg	
					}
					else //execute when enter value is not integer
					{
						throw("Enter Integer Values");
					}
		}
		
	}
	catch(e)
	{
		document.getElementById('answer').innerHTML = '';//clear the previous answer
		document.getElementById('errormsg').innerHTML = `Error : ${e}`;//here use template literal
	}

}




//this is for the addition operation
function division() {
	
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	
	try{

		//Here check user mandatory to enter both values 
		if(number1 == '' || number2 == '')
		{
			throw('Enter Values');
		}
		else{
				//Convert string datatype to integer datatype
				number1 = parseInt(number1);
				number2 = parseInt(number2);

				//Check enter values integer or not
				if(Number.isInteger(number1)  &&  Number.isInteger(number2))
				{
					// check divide by zero
					if(number2==0)
					{
						throw("Can not be divide by zero");

					}
					else{
							/*Here let have block level scope that means it only accesible in inner if statement part*/
							let ans = `${number1 / number2}`;//here use template literal
							document.getElementById('answer').innerHTML = ans;//display answer
							document.getElementById('errormsg').innerHTML = '';//clear the previous any error msg	
						}
				}
				else //execute when enter value is not integer
				{
						throw("Enter Integer Values");
				}
		}
		
	}
	catch(e)
	{
		document.getElementById('answer').innerHTML = '';//clear the previous answer
		document.getElementById('errormsg').innerHTML = `Error : ${e}`;//here use template literal
	}

}




//this is for the modulo operation
function modulo() {
	
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	
	try{

		//Here check user mandatory to enter both values 
		if(number1 == '' || number2 == '')
		{
			throw('Enter Values');
		}
		else{
				//Convert string datatype to integer datatype
				number1 = parseInt(number1);
				number2 = parseInt(number2);

				//Check enter values integer or not
				if(Number.isInteger(number1)  &&  Number.isInteger(number2))
				{
					//check divide by zero 	
					if(number2==0)
					{
						throw("Can not be divide by zero");

					}
					else{
							/*Here let have block level scope that means it only accesible in inner if statement part*/
							let ans = `${number1 % number2}`;//here use template literal
							document.getElementById('answer').innerHTML = ans;//display answer
							document.getElementById('errormsg').innerHTML = '';//clear the previous any error msg	
						}
				}
				else //execute when enter value is not integer
				{
						throw("Enter Integer Values");
				}
		}
		
	}
	catch(e)
	{
		document.getElementById('answer').innerHTML = '';//clear the previous answer
		document.getElementById('errormsg').innerHTML = `Error : ${e}`;//here use template literal
	}

}
