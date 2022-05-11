
// function bestätigungsseite() {
// 		var vorname1= document.getElementById("vorname").value;
// 		var nachname1= document.getElementById("nachname").value;
// 		var email1= document.getElementById("email").value;
// 		document.writeln("<h1>Deine Informationen</h1>");
// 		document.writeln("Vielen Dank!.");
// 		document.writeln("Der eingetragene Vorname lautet: " + vorname1);
// 		document.writeln("Der eingetragene Nachname lautet: " + nachname1);
// 		document,writeln("Die eingetragene Email lautet: " + email1)
// 	}

function valid(){
	var vorname1= document.getElementById("vorname").value;
	var nachname1= document.getElementById("nachname").value;
	var email1= document.getElementById("email").value;
		if (vorname1 === '' || nachname1 === '' || email1 === '') {
			alert("Please fill all fields!");
			return false;
		}
		else {
			return true;
		}
}


function submit_by_id() {
	var vorname1 = document.getElementById("vorname").value;
	var nachname1 = document.getElementById("nachname").value;
		if (valid()){
			document.getElementById("form_id").submit();
			alert(" Vorname : " + vorname1 + "\n Nachname : " + nachname1 +  "\n Email : " + email1 +  "\n Form Id : " + document.getElementById("form_id").getAttribute("id") + "\n\n Top passt alles ......");
	}
	}

