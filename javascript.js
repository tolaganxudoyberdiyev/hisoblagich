

function kalkulatorFunction() { 


    let kun = document.getElementById("inputAydi").value; 

	let dob = new Date(kun);
     
	let sana = dob.getDate();

	let oy = dob.getMonth();
     
	let year = dob.getFullYear(); 


    let now = new Date(document.getElementById("kun").value);

	console.log(now); 

	let yilKiriting = now.getFullYear() - year; 

	let oylar = now.getMonth() - oy; 

	let kunlarOf = now.getDate() - sana; 


    if (yilKiriting < 0) console.log("noto'g'ri sana"); 

	else if (oylar > 0) { 

		console.log(yilKiriting);

	} else if (oylar === 0 && kunlarOf >= 0) 
	{ 
		console.log(yilKiriting); 
	}
	 else 
	{ 
		yilKiriting = yilKiriting - 1; 

		if (oylar <= 0)

			if (kunlarOf > 0) oylar = 12 + oylar; 

			else oylar = 11 - oylar; 
	} 
	if (kunlarOf < 0) 
	{ 
		kunlarOf = 30 + kunlarOf;

		oylar -= 1; 
	} 

	
	if (yilKiriting < 0) 

		document.getElementById("yoshKiriting").innerHTML = "noto'g'ri sana";

	else
		document.getElementById("yoshKiriting").innerHTML =

			"Sizning yoshingiz " + yilKiriting + " yil "

			+ oylar + " oy " + kunlarOf + " kun"; 
} 



function kunlarniKirit()
 { 
	console.log(formatlangan());

	let d = document.getElementById("kun");

	d.value = formatlangan(); 
} 

function formatlangan(date = new Date())
 { 
	return [ 
		date.getFullYear(),

		qisqa(date.getMonth() + 1),

		qisqa(date.getDate()), 

	].join("-"); 
} 
function qisqa(number) 
{ 
	return number.toString().padStart(2, "0"); 
} 

kunlarniKirit();


