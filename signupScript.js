//getting a handle on ALL sports
var outdoorTrackRad = document.getElementById("outdoorTrackRad");
var outdoorTrackLabel = document.getElementById("outdoorTrackLabel");
var outdoorTackDIV = document.getElementById("outdoorTackDIV");

var baseballRad = document.getElementById("baseballRad");
var baseballLabel = document.getElementById("baseballLabel");
var baseballDIV = document.getElementById("baseballDIV");

var softballRad = document.getElementById("softballRad");
var softballLabel = document.getElementById("softballLabel");
var softballDIV = document.getElementById("softballDIV");

var nordicSkiRad = document.getElementById("nordicSkiRad");
var nordicSkiLabel = document.getElementById("nordicSkiLabel");
var nordicSkiDIV = document.getElementById("nordicSkiDIV");

var basketballRad = document.getElementById("basketballRad");
var basketballLabel = document.getElementById("basketballLabel");
var basketballDIV = document.getElementById("basketballDIV");

var indoorTrackRad = document.getElementById("indoorTrackRad");
var indoorTrackLabel = document.getElementById("indoorTrackLabel");
var indoorTackDIV = document.getElementById("indoorTackDIV");

var cheeringRad = document.getElementById("cheeringRad");
var cheeringLabel = document.getElementById("cheeringLabel");
var cheeringDIV = document.getElementById("cheeringDIV");

var alpineSkiRad = document.getElementById("alpineSkiRad");
var alpineSkiLabel = document.getElementById("alpineSkiLabel");
var alpineSkiDIV = document.getElementById("alpineSkiDIV");

var hockeyRad = document.getElementById("hockeyRad");
var hockeyLabel = document.getElementById("hockeyLabel");
var hockeyDIV = document.getElementById("hockeyDIV");

var fieldHockeyRad = document.getElementById("fieldHockeyRad");
var fieldHockeyLabel = document.getElementById("fieldHockeyLabel");
var fieldHockeyDIV = document.getElementById("fieldHockeyDIV");

var swimmingRad = document.getElementById("swimmingRad");
var swimmingLabel = document.getElementById("swimmingLabel");
var swimmingDIV = document.getElementById("swimmingDIV");

var crossCountryRad = document.getElementById("crossCountryRad");
var crossCountryLabel = document.getElementById("crossCountryLabel");
var crossCountryDIV = document.getElementById("crossCountryDIV");

var footballRad = document.getElementById("footballRad");
var footballLabel = document.getElementById("footballLabel");
var footballDIV = document.getElementById("footballDIV");

var soccerRad = document.getElementById("soccerRad");
var soccerLabel = document.getElementById("soccerLabel");
var soccerDIV = document.getElementById("soccerDIV");

var golfRad = document.getElementById("golfRad");
var golfLabel = document.getElementById("golfLabel");
var golfDIV = document.getElementById("golfDIV");

var lacrossRad = document.getElementById("lacrossRad");
var lacrossLabel = document.getElementById("lacrossLabel");
var lacrosseDIV = document.getElementById("lacrosseDIV");
//end of sport variables

//creating arrays for Rad & Labels
var sportRadArray = [outdoorTrackRad, baseballRad, softballRad, nordicSkiRad, basketballRad, indoorTrackRad, cheeringRad, alpineSkiRad, hockeyRad, fieldHockeyRad, swimmingRad, crossCountryRad, footballRad, soccerRad, golfRad, lacrossRad];
var sportLabelArray = [outdoorTrackLabel, baseballLabel, softballLabel, nordicSkiLabel, basketballLabel, indoorTrackLabel, cheeringLabel, alpineSkiLabel, hockeyLabel, fieldHockeyLabel, swimmingLabel, crossCountryLabel, footballLabel, soccerLabel, golfLabel, lacrossLabel];
var sportsArray = ["outdoor track", "baseball", "softball", "nordic ski", "basketball", "indoor track", "cheering", "alpine ski", "hockey", "field hockey", "swimming", "cross country", "football", "soccer", "golf", "lacrosse"];
var seasonArray = ["spring", "fall", "winter"];
var springSeason = [lacrosseDIV, softballDIV, baseballDIV, outdoorTackDIV];
var fallSeason = [crossCountryDIV, footballDIV, soccerDIV, golfDIV, fieldHockeyDIV];
var winterSeason = [nordicSkiDIV, basketballDIV, indoorTackDIV, cheeringDIV, alpineSkiDIV, hockeyDIV, swimmingDIV];

//functions for the changed values for radio buttons
var gender = 0;
function handleClick(genderRad) {
	gender = genderRad.value;
	console.log(gender);
}
var sport = 0;
function handleClick2(sportRad) {
	sport = sportRad.value;
	console.log(sport);
}


function signUp () {
	//Declaring all variables
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var position = document.getElementById("position").value;
	var form = document.getElementById("sportsForm");

	//displaying content in the fields
	console.log(firstName + " " + lastName + " is a " + gender + " and wants to participate in " + sport + ". They can be reached at " + phoneNumber);

	//clearing the form
	form.reset();

	var baseurl = "https://script.google.com/macros/s/AKfycbyOyRnqIM0q214Z2IfnY0_2EL_ByKVhId7UKBkjPgWtWt6HwRI/exec?";
	var hi = document.createElement("iframe");
	hi.style.display = "none";
	document.body.appendChild(hi);
	console.log(hi);


	var iframeError;

	function submit() {   
	    
	    url = baseurl + "First="+firstName+"&Last="+lastName+"&Number="+phoneNumber+"&Sex="+gender+"&Sport="+sport+"&Position="+position;
	    console.log(url);
	    hi.src = url;
	    iframeError = setTimeout("error()", 5000);  
	}

	function load(e) {
	    console.log('success');
	    alert("Thank you. Your form has been submitted.")
	   
	}

	function error() {
	    console.log('error');
	    alert("Error. Please try again later.")
	}

	hi.onload = function (e) {
	        load(e);
	        clearTimeout(iframeError);
	    };

	    submit();
}

var sBackBtn = document.getElementById("sBackBtn");
  sBackBtn.addEventListener("click", function () {
    location.href="index.html";
});

var attempts = 0;
var parent = document.getElementById("parent");
var pass1 = "p1";
var recoveryPass = "asdR3c0very";
var springDIV = document.getElementById("springDIV");
var winterDIV = document.getElementById("winterDIV");
var fallDIV = document.getElementById("fallDIV");
var editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", function() {
	var password = prompt("Please enter password:", ""); //asking for password
	//checking to see if password is correct
	if (password == pass1) {
		//access granted
		var indexResult;
		var seasonChange = prompt("What season would you like to display?", "winter").toLowerCase();
		for (var i = 0; i < seasonArray.length; i++) {
			var result = seasonArray[i].toString().startsWith(seasonChange);
			if (result) {
				console.log("Found it!");
				indexResult = i;
			}
		}
		//sport is not found
		if (indexResult == null) {
			alert("Please make sure the season is spelled correctly!");
		}

		if (indexResult == 0) {
			//spring
			springDIV.style.display = "inline";
			fallDIV.style.display = "none";
			winterDIV.style.display = "none";

		} else if (indexResult == 1) {
			//fall
			springDIV.style.display = "none";
			fallDIV.style.display = "inline";
			winterDIV.style.display = "none";

		} else if (indexResult == 2) {
			//winter
			springDIV.style.display = "none";
			fallDIV.style.display = "none";
			winterDIV.style.display = "inline";

		}
		
	} 
	//recovery password initiated
	if (password == recoveryPass) {
		var newPass = prompt("You have initiated the recovery password. What would you like to change the existing password to?", "");
		pass1 = newPass;
		alert("Password has been successfully changed.")
	}
	//password was entered incorrectly
	else if (password !== pass1 && password !== recoveryPass) {
		alert("Password Incorrect.");
		attempts++;
		//locking user out for too many failed attempts
		if (attempts > 3) {
			editBtn.style.display = "none";
			alert("You've been locked out.");
		}
	}
	
});

