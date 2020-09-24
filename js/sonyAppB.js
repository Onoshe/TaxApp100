/*$(function(){
	$('#dailyPassDiv').click(function(){
var fsize = $('#dailyPassDiv').css('font-size');
alert(fsize);})
})*/
//Delete from Favourite
$(document).one('pageinit', function(){
	// Delete Handler
	$('#favouriteSongsListHead').on('click', '#deleteLink', deleteFavs);

	function deleteFavs(){
		//alert("wanan to delete?");}
	//Set LS items
		if(confirm('Delete song?')){
	    	localStorage.setItem('currentTitle', $(this).data('title'));

	    	//Get current data
	    	currentTitle = localStorage.getItem('currentTitle');

			var myFavs = getmyFavsObject();

	    	//Loop through runs
	        //&& runs[i].date == currentDate
	    	for(var i = 0; i < myFavs.length; i++){
	    		if(myFavs[i].title == currentTitle){
	    			myFavs.splice(i, 1);
	    		}
	    		localStorage.setItem('myFavs', JSON.stringify(myFavs));
	    		//call showFavs()
	    			showMyFavs();
	    	}
	    	return false;
    	}
	}
});
//Home- Top Search Button
/*
$(function(){
	$('#songNoSearchBtn').click(function(){
	var val = $('#srch-TitleNo');
	//var valNo = $('#srchByNoDiv');
	val.toggle();
	//$("#srch-TitleNo").delay(10000);
	//$("#srchByNoDiv").delay(5000);
	//$("#srchByNoDiv").fadeOut(2000);
	//$("#srch-TitleNo").fadeOut(2000);
	});
});*/

function songNoSearchFun(){
var songNumber = document.getElementById("srchInputHomePg");

//Check for the first digit entered. It must not be Zero
var songNumbers = document.getElementById("srchInputHomePg").value;
var myArray = [];
myArray.push(songNumbers);
songNumber1 = songNumbers[0];

if(songNumber.value > 0 && songNumber.value <=709 && songNumber1 > 0){
	//Print song Number to Page 2 Screen
	var myNo =  suChorusesFunction();
	var selNum = suChoruseIndexFunction();
	//var myNo =  hymnFun2();
	//var selNum = hymnFunList2();
	document.getElementById("displayHymn").innerHTML= myNo[songNumber.value];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + songNumber.value;
	document.getElementById("suSongTitle").innerHTML= selNum[songNumber.value];

	//Page 2 Song No Catcher
	document.getElementById("hymnNoIndex").innerHTML = songNumber.value;
	
	//Redirect and Restore Initial background color
	location.replace("#page3");
	document.getElementById("srchInputHomePg").style.backgroundColor = "#203f4a";
	document.getElementById("songNoSearchBtn").style.backgroundColor = "#203f4a";
	document.getElementById("srchInputHomePg").style.border = "0px solid #203f4a";
	songNumber.value = "";
} };

//Home - Search By Title Button
$(function(){
	var hideDiv = $('#srchClassHmDivNew');
	$('#srchClassHmTNew').click(function(){
	//var goToSrch = $('#srchInputHm');
	location.replace("#page2");
	hideDiv.css('display', 'none');
	 //Restore initial Round Button
	$('#footerBtnNew').css('background-color','teal');
	$('#footerBtnNew').css('transform', '');
	//Restore Top Search Input initia settings- which may be have clicked
	$('#srchInputHomePg').css('background-color','#203f4a');
	$('#srchInputHomePg').css('border', '2px solid #203f4a');
	$('#songNoSearchBtn').css('background-color','#203f4a');
	});
});


/*Home-  Round Bottom Button */
$(function(){
	$('#footerBtnNew').click(function(){
	let val = $('#srchClassHmDivNew');
	if(val.is(':hidden')){
			$('#footerBtnNew').css('background-color','aqua');
			$('#footerBtnNew').css('transform', 'rotate(45deg)');
		}else{
		$('#footerBtnNew').css('background-color','teal');
		$('#footerBtnNew').css('transform', '');
	}
		val.toggle(1000, function(){
		});
	});
});

//Home- Search By Number Button 
$(function(){
	$('#srchClassHmNNew').click(function(){
	var hideDiv = $('#srchClassHmDivNew');
	//$('#srchBtnHm').css('background-color', 'lime');
	//$('#srchBtnHm').css('opacity', '1');
	$('#srchInputHomePg').css('background-color', 'silver');
	$('#srchInputHomePg').css('color', 'blue');
	$('#srchInputHomePg').css('opacity', '0.7');
	$('#srchInputHomePg').css('border', '2px solid white');
	$('#songNoSearchBtn').css('background-color', 'silver');
	$('#footerBtnNew').css('background-color','teal');
	$('#footerBtnNew').css('transform', '');
	hideDiv.css('display', 'none');
	});
});

$(function(){
	var setTest = $('#setBtn').css('background-color');
	$('#setBtn').click(function(){
	alert(setTest);
	});
});


/*Round Home button */
$(function(){
	var hideDiv = $('#srchClassHmDiv');
	$('#srchClassHmT').click(function(){
	var goToSrch = $('#srchInputHm');
	location.replace("#page2");
	hideDiv.css('display', 'none');
	});
});

$(function(){
	$('#srchClassHmT').click(function(){
	var goToSrch = $('#srchInputHm');
	location.replace("#page2");
	hideDiv.css('display', 'none');
	});
});

/* Home Song Panel- Play Audio & Display */
var music = new Audio();
function playHomeSong(file){
	document.getElementById('homeSongDiv').style.visibility = 'visible';
	document.getElementById('homeSongBtnCheck').innerHTML = 1;
	music.pause();
	music = new Audio(file);
	music.play();
	music.loop = true;
}

/* Play Home Song Only---
var music = new Audio();
function playHomeSongOnly(file){
	document.getElementById('homeSongBtnCheck').innerHTML = 1;
	music.pause();
	music = new Audio(file);
	music.play();
	music.loop = true;
}

---Pause Home Song Only---
var music = new Audio();
function pauseHomeSongOnly(file){
	document.getElementById('homeSongBtnCheck').innerHTML = 0;
	music.pause();
	music = new Audio(file);
	music.pause();
}
*/

/* Home Song Stop Control */
$(function(){
	var homeSongDiv = $('#homeSongDiv');
	var songCheck = $('#homeSongCheck');
	$('#homeSongBtnStop').click(function(){
	homeSongDiv.css('visibility', 'hidden');
	music.pause();
	music = new Audio(file);
	music.pause();
	document.getElementById('homeSongBtnCheck').innerHTML = 0;
	});
});


/*Toggle Home Song*/
function toggleHomeSong(file){
	//document.getElementById('homeSongDiv').style.visibility = 'visible';
	var songCheck = $('#homeSongBtnCheck').text();
	if(songCheck == 1){
		$('#homeSongBtnCheck').text(0);
		music.pause();
		music = new Audio(file);
		music.pause();
		$('#homeSongBtnPause').css('display', 'none');
		$('#homeSongBtnPlay').css('display', 'inline-block');
	}
	if(songCheck == 0){
		$('#homeSongBtnCheck').text(1);
		music.pause();
		music = new Audio(file);
		music.play();
		music.loop = true;
		$('#homeSongBtnPause').css('display', 'inline-block');
		$('#homeSongBtnPlay').css('display', 'none');
	}
};

/*Zoom Out*/
$(function(){
	$('#zoomInDS').click(function(){
	var currentFontSize = $('#displayHymn').css('font-size');
	var currentSize = $('#displayHymn').css('font-size');
	if(currentSize >= "12px"){
	var currentSize = parseFloat(currentSize)-5;
	$('#displayHymn').css('font-size', currentSize);

	if(currentSize >= "25px"){
		$('#zoomOutDS').css('background-color', '');
		$('#zoomInDS').css('background-color', '');
	}else{
		$('#zoomOutDS').css('background-color', '');
		$('#zoomInDS').css('background-color', 'aqua');
	}
	return false;
	};
	});
});
/*Zoom In*/
$(function(){
	$('#zoomOutDS').click(function(){
	var currentFontSize = $('#displayHymn').css('font-size');
	var currentSize = $('#displayHymn').css('font-size');
	if(currentSize <= "60px"){
	var currentSize = parseFloat(currentSize)+5;
	$('#displayHymn').css('font-size', currentSize);

	if(currentSize >= "25px"){
		$('#zoomOutDS').css('background-color', '');
		$('#zoomInDS').css('background-color', '');
	}else{
	$('#zoomInDS').css('background-color', '');
	$('#zoomOutDS').css('background-color', 'aqua');
	}
	return false;
	};
	});
});

/*Populate & Print CI Chorus to Screen. Assurance ID -3000.*/
function printAssuranceCI(num){
	num = num;
	num = parseInt(num)-3000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIAssurance(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = assuranceCategory();
document.getElementById("p7CIClass").innerHTML = 'Assurance and Certainty';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+3000)+'" onclick="printAssuranceCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Assurance ID -3000.*/

/*Populate & Print CI Chorus to Screen. Bible ID -4000.*/
function printBibleCI(num){
	num = num;
	num = parseInt(num)-4000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIBible(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = bibleCategory();
document.getElementById("p7CIClass").innerHTML = 'Bible (Word of God)';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+4000)+'" onclick="printBibleCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Bible ID -4000.*/

/*Populate & Print CI Chorus to Screen. Christmas ID -5000.*/
function printChristmasCI(num){
	num = num;
	num = parseInt(num)-5000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIChrist(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = christmasCategory();
document.getElementById("p7CIClass").innerHTML = 'Christmas';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+5000)+'" onclick="printChristmasCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Christmas ID -5000.*/

/*Populate & Print CI Chorus to Screen. Conflict ID -6000.*/
function printConflictCI(num){
	num = num;
	num = parseInt(num)-6000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCICon(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = conCategory();
document.getElementById("p7CIClass").innerHTML = 'Conflict';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+6000)+'" onclick="printConflictCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Conflict ID -6000.*/

/*Populate & Print CI Chorus to Screen. Cross ID -7000.*/
function printCrossCI(num){
	num = num;
	num = parseInt(num)-7000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCICross(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = crossCategory();
document.getElementById("p7CIClass").innerHTML = 'Cross';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+7000)+'" onclick="printCrossCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Cross ID -7000.*/

/*Populate & Print CI Chorus to Screen. Forgiveness ID -8000.*/
function printForgCI(num){
	num = num;
	num = parseInt(num)-8000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIForg(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = forgCategory();
document.getElementById("p7CIClass").innerHTML = 'Forgiveness';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+8000)+'" onclick="printForgCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Forgiveness ID -8000.*/

/*Populate & Print CI Chorus to Screen. Faith ID -9000.*/
function printFaithCI(num){
	num = num;
	num = parseInt(num)-9000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIFaith(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = faithCategory();
document.getElementById("p7CIClass").innerHTML = 'Faith';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+9000)+'" onclick="printFaithCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Faith ID -9000.*/

/*Populate & Print CI Chorus to Screen. Gospel Call ID -10000.*/
function printGospCI(num){
	num = num;
	num = parseInt(num)-10000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIGosp(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = gospelCategory();
document.getElementById("p7CIClass").innerHTML = 'Gospel Call';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+10000)+'" onclick="printGospCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Gospel Call ID -10000.*/

/*Populate & Print CI Chorus to Screen. Guidance ID 11000.*/
function printGuidCI(num){
	num = num;
	num = parseInt(num)-11000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIGuid(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = guidCategory();
document.getElementById("p7CIClass").innerHTML = 'Guidance';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+11000)+'" onclick="printGuidCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Guidance ID 11000.*/

/*Populate & Print CI Chorus to Screen. Heaven ID -12000.*/
function printHeavCI(num){
	num = num;
	num = parseInt(num)-12000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIHeav(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = heavCategory();
document.getElementById("p7CIClass").innerHTML = 'Heaven';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+12000)+'" onclick="printHeavCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Heaven ID -12000.*/

/*Populate & Print CI Chorus to Screen. Joy ID -13000.*/
function printJoyCI(num){
	num = num;
	num = parseInt(num)-13000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIJoy(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = joyCategory();
document.getElementById("p7CIClass").innerHTML = 'Joy';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+13000)+'" onclick="printJoyCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Joy ID -13000.*/

/*Populate & Print CI Chorus to Screen. Life ID -14000.*/
function printLifeCI(num){
	num = num;
	num = parseInt(num)-14000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCILife(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = lifeCategory();
document.getElementById("p7CIClass").innerHTML = 'Life';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+14000)+'" onclick="printLifeCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Life ID -14000.*/

/*Populate & Print CI Chorus to Screen. Lord Jesus ID -15000.*/
function printLordCI(num){
	num = num;
	num = parseInt(num)-15000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCILord(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = lordCategory();
document.getElementById("p7CIClass").innerHTML = 'Lord Jesus';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+15000)+'" onclick="printLordCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Lord Jesus ID -15000.*/

/*Populate & Print CI Chorus to Screen. Love of God ID -16000.*/
function printLoveCI(num){
	num = num;
	num = parseInt(num)-16000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCILove(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = loveCategory();
document.getElementById("p7CIClass").innerHTML = 'Love of God';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+16000)+'" onclick="printLoveCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Love of God ID -16000.*/

/*Populate & Print CI Chorus to Screen. Missionary ID -17000.*/
function printMissCI(num){
	num = num;
	num = parseInt(num)-17000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIMiss(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = missCategory();
document.getElementById("p7CIClass").innerHTML = 'Missionary';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+17000)+'" onclick="printMissCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Missionary ID -17000.*/

/*Populate & Print CI Chorus to Screen. Praise ID -18000.*/
function printPraiseCI(num){
	num = num;
	num = parseInt(num)-18000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIPraise(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = praiseCategory();
document.getElementById("p7CIClass").innerHTML = 'Praise';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+18000)+'" onclick="printPraiseCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Praise ID -18000.*/

/*Populate & Print CI Chorus to Screen. Prayer ID -19000.*/
function printPrayCI(num){
	num = num;
	num = parseInt(num)-19000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIPray(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = prayCategory();
document.getElementById("p7CIClass").innerHTML = 'Prayer';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+19000)+'" onclick="printPrayCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Prayer ID -19000.*/

/*Populate & Print CI Chorus to Screen. Salvation ID -20000.*/
function printSalCI(num){
	num = num;
	num = parseInt(num)-20000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCISal(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = salCategory();
document.getElementById("p7CIClass").innerHTML = 'Salvation';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+20000)+'" onclick="printSalCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Salvation ID -20000.*/

/*Populate & Print CI Chorus to Screen. Sanctification ID -21000.*/
function printSanCI(num){
	num = num;
	num = parseInt(num)-21000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCISan(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = sanCategory();
document.getElementById("p7CIClass").innerHTML = 'Sanctification';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+21000)+'" onclick="printSanCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Sanctification ID -21000.*/

/*Populate & Print CI Chorus to Screen. Second Coming ID -22000.*/
function printSecondCI(num){
	num = num;
	num = parseInt(num)-22000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCISecond(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = secondCategory();
document.getElementById("p7CIClass").innerHTML = 'Second Coming';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+22000)+'" onclick="printSecondCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Second Coming ID -22000.*/

/*Populate & Print CI Chorus to Screen. Service ID -23000.*/
function printServeCI(num){
	num = num;
	num = parseInt(num)-23000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIServe(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = serveCategory();
document.getElementById("p7CIClass").innerHTML = 'Service';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+23000)+'" onclick="printServeCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Service ID -23000.*/

/*Populate & Print CI Chorus to Screen. SIN ID -24000.*/
function printSINCI(num){
	num = num;
	num = parseInt(num)-24000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCISIN(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = sinCategory();
document.getElementById("p7CIClass").innerHTML = 'SIN';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+24000)+'" onclick="printSINCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. SIN ID -24000.*/

/*Populate & Print CI Chorus to Screen. Strength ID -25000.*/
function printStrengthCI(num){
	num = num;
	num = parseInt(num)-25000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIStrength(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = strengthCategory();
document.getElementById("p7CIClass").innerHTML = 'Strength';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+25000)+'" onclick="printStrengthCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Strength ID -25000.*/

/*Populate & Print CI Chorus to Screen. Surrender ID -26000.*/
function printSurrCI(num){
	num = num;
	num = parseInt(num)-26000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCISurr(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = surrCategory();
document.getElementById("p7CIClass").innerHTML = 'Surrender';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+26000)+'" onclick="printSurrCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Surrender ID -26000.*/

/*Populate & Print CI Chorus to Screen. Thanksgiving ID -27000.*/
function printThanksCI(num){
	num = num;
	num = parseInt(num)-27000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIThanks(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = thanksCategory();
document.getElementById("p7CIClass").innerHTML = 'Thanksgiving';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+27000)+'" onclick="printThanksCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Thanksgiving ID -27000.*/

/*Populate & Print CI Chorus to Screen. Victory ID -28000.*/
function printVictoryCI(num){
	num = num;
	num = parseInt(num)-28000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIVictory(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = victoryCategory();
document.getElementById("p7CIClass").innerHTML = 'Victory';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+28000)+'" onclick="printVictoryCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Victory ID -28000.*/

/*Populate & Print CI Chorus to Screen. Witness ID -29000.*/
function printWitCI(num){
	num = num;
	num = parseInt(num)-29000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIWit(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = witCategory();
document.getElementById("p7CIClass").innerHTML = 'Witness';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+29000)+'" onclick="printWitCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Witness ID -29000.*/

/*Populate & Print CI Chorus to Screen. Younger Children ID -30000.*/
function printYoungCI(num){
	num = num;
	num = parseInt(num)-30000;
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
function populateCIYoung(){
var arrayT = suChoruseIndexFunction();
var cIndex1 = youngCategory();
document.getElementById("p7CIClass").innerHTML = 'Children';
var ciAssu = $('#classifiedIndexp7');
ciAssu.empty();   //To prevent duplication
	for(var i of cIndex1){
		ciAssu.append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+30000)+'" onclick="printYoungCI(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
/* /Populate & Print CI Chorus to Screen. Younger Children ID -30000.*/




/*
function populateCIBible(){
var arrayT = hymnFunList2();
var cIndex2 = [5, 16, 7, 12, 9, 22, 3, 1, 11];
document.getElementById("p7CIClass").innerHTML = 'Bible (The Word of God)';
	for(var i of cIndex2){
		$('#classifiedIndexp7').append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+1000)+'" onclick="printCIndexSelected(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
function populateCIChrist(){
var arrayT = hymnFunList2();
var cIndex3 = [15, 6, 4, 1, 19, 20, 21, 17, 8];
document.getElementById("p7CIClass").innerHTML = 'Christmas';
	for(var i of cIndex3){
		$('#classifiedIndexp7').append('<li><a class="ui-btn classifiedIndexCon" id="'+
			(i+1000)+'" onclick="printCIndexSelected(this.id)" href ="#page3">'+
			i + '. ' + arrayT[i]+ '<span class="ui-icon-arrow-r ui-btn-icon-right"></span></a><hr></li>');
	}	location.replace("#page7")
}
*/


/*Print Favourite Choruses to Screen. ID must be from 1- 709.
It must check to ensure number is within this range. 
Note that IDs for classified choruses are over 709*/
/*function printFavChoruse(num){
	num = num;
	num = parseInt(num);
	if(num > 0 && num < 1000){num = num;}
	else if(num >= 1000 && num < 2000){num = num - 1000;}
	else if(num >= 2000 && num < 3000){num = num - 2000;}
	else if(num >= 3000 && num < 4000){num = num - 3000;}
	else if(num >= 4000 && num < 5000){num = num - 4000;}
	else if(num >= 5000 && num < 6000){num = num - 5000;}
	else if(num >= 6000 && num < 7000){num = num - 6000;}
	else if(num >= 7000 && num < 8000){num = num - 7000;}
	else if(num >= 8000 && num < 9000){num = num - 8000;}
	else if(num >= 9000 && num < 10000){num = num - 9000;}
	else if(num >= 10000 && num < 11000){num = num - 10000;}
	else if(num >= 11000 && num < 12000){num = num - 11000;}
	else if(num >= 12000 && num < 13000){num = num - 12000;}
	else if(num >= 13000 && num < 14000){num = num - 13000;}
	else if(num >= 14000 && num < 15000){num = num - 14000;}
	else if(num >= 15000 && num < 16000){num = num - 15000;}
	else if(num >= 16000 && num < 17000){num = num - 16000;}
	else if(num >= 17000 && num < 18000){num = num - 17000;}
	else if(num >= 18000 && num < 19000){num = num - 18000;}
	else if(num >= 19000 && num < 20000){num = num - 19000;}
	else if(num >= 20000 && num < 21000){num = num - 20000;}
	else if(num >= 21000 && num < 22000){num = num - 21000;}
	else if(num >= 22000 && num < 23000){num = num - 22000;}
	else if(num >= 23000 && num < 24000){num = num - 23000;}
	else if(num >= 24000 && num < 25000){num = num - 24000;}
	else if(num >= 25000 && num < 26000){num = num - 25000;}
	else if(num >= 26000 && num < 27000){num = num - 26000;}
	else if(num >= 27000 && num < 28000){num = num - 27000;}
	else if(num >= 28000 && num < 29000){num = num - 28000;}
	else if(num >= 29000 && num < 30000){num = num - 29000;}
	else if(num >= 30000 && num < 31000){num = num - 30000;}

	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
*/