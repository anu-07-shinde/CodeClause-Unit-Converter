var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;
function myResult(){


// when we change the input and output type vale we need to update the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula
// Meter conversion 
if(option_from === "meter" && option_to==="kilometer"){

		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}
	else if(option_from === "meter" && option_to==="Centimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}
	else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}
	else if(option_from === "meter" && option_to==="Foot"){
		//this is meter to formula 
		result.value = Number(input.value)*3.2808;
	}
	else if(option_from === "meter" && option_to==="Inch"){
		//this is meter to meter formula 
		result.value = Number(input.value)*39.37007;
	}

// Kilogram conversion 

    else if(option_from === "Kilogram" && option_to==="Grams"){
        result.value=Number(input.value)*1000;
    }
    else if(option_from === "Kilogram" && option_to==="Kilogram"){
        result.value=input.value;

    }
    else if(option_from === "Kilogram" && option_to==="Pound"){
        result.value=Number(input.value)*2.204;

    }

	// Pound Conversion 
    else if(option_from === "Pound" && option_to==="Pound"){
        result.value=Number(input.value);

    }
    else if(option_from === "Pound" && option_to==="Kilogram"){
        result.value=Number(input.value)*0.45359;

    }
    else if(option_from === "Pound" && option_to==="Grams"){
        result.value=Number(input.value)*453.59;

    }

// Gram Conversion

    else if(option_from === "Grams" && option_to==="Kilogram"){
        result.value=Number(input.value)*0.001;

    }
    else if(option_from === "Grams" && option_to==="Grams"){
        result.value=input.value;

    }
    else if(option_from === "Grams" && option_to==="Pound"){
        result.value=Number(input.value)*0.0022;

    }

	// Celsius conversion 
    else if(option_from === "Celsius" && option_to==="Celsius"){
        result.value=input.value;

    }
    else if(option_from === "Celsius" && option_to==="Fahrenheit"){
        result.value=(Number(input.value)*(9/5))+32;

    }

	// Fahrenheit Conversion 
    else if(option_from === "Fahrenheit" && option_to==="Fahrenheit"){
        result.value=input.value;

    }
    else if(option_from === "Fahrenheit" && option_to==="Celsius"){
        result.value=((Number(input.value))-32)*5/9;

    }
    

// Kilometer Conversion 
	if(option_from === "kilometer" && option_to==="meter"){ 
		result.value = Number(input.value) * 1000;
	}
	
	else if(option_from === "kilometer" && option_to==="Centimeter"){
		result.value = Number(input.value) * 100000;
	}
	
	else if(option_from === "kilometer" && option_to==="kilometer"){
		result.value = input.value
	}
	
	else if(option_from === "kilometer" && option_to==="Foot"){
		result.value = Number(input.value) * 3280.8399;
	}
	
	else if(option_from === "kilometer" && option_to==="Inch"){
		result.value = Number(input.value) *39370.0787;
	}

	// Centimeter Conversion 
	if(option_from === "Centimeter" && option_to==="kilometer"){
		result.value = Number(input.value) * 0.00001;
	}
	
	else if(option_from === "Centimeter" && option_to==="meter"){
		result.value = Number(input.value) * 0.01;
	}
	else if(option_from === "Centimeter" && option_to==="Foot"){
		
		result.value = Number(input.value)*0.0328084;
	}
	else if(option_from === "Centimeter" && option_to==="Centimeter"){
		
		result.value = input.value
	}
	else if(option_from === "Centimeter" && option_to==="Inch"){
		
		result.value = Number(input.value) * 0.39370079;
	}
	
	// Inch Conversion 
	else if(option_from === "Inch" && option_to==="Inch"){
		
		result.value = input.value ;
	}
	else if(option_from === "Inch" && option_to==="kilometer"){
		
		result.value = Number(input.value) * 0.0000254;
		
	}
	else if(option_from === "Inch" && option_to==="Centimeter"){
		
		
		result.value = Number(input.value) *2.54;
	}
	else if(option_from === "Inch" && option_to==="meter"){
		
		
		result.value = Number(input.value) *0.0254;
	}
	else if(option_from === "Inch" && option_to==="Foot"){
		
		result.value = Number(input.value) * 0.08333333;
	}

// Foot Conversion 

	else if(option_from === "Foot" && option_to==="Foot"){
		
		result.value = input.value ;
	}
	else if(option_from === "Foot" && option_to==="kilometer"){
		
		result.value = Number(input.value) * 0.0003048;
	}
	else if(option_from === "Foot" && option_to==="Centimeter"){
		result.value = Number(input.value) *30.48;
	}
	else if(option_from === "Foot" && option_to==="meter"){
		result.value = Number(input.value) *0.3048;
	}
	else if(option_from === "Foot" && option_to==="Inch"){
		result.value = Number(input.value) * 12;
	}
}