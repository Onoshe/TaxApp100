$(function(){
	$('#addRuns').click(function(){
	$('page2Btn').css('background-color, aqua');
	});
});

function changePage2BtnColor(){
	document.getElementById("page2Btn").style.backgroundColor= "aqua";
}
//Tax Computations

var  tax_result = document.getElementsByClassName("taxResult");
var  tax_Details = document.getElementsByClassName("taxDetails");
var tax_Data = document.getElementsByClassName("taxdata");
var tax_Band = document.getElementsByClassName("grid3-Cont-S3");
var  tax_Details_1 = document.getElementsByClassName("taxDetails_1");
//var tax_ResultCheck = document.getElementById("taxResultCheck");


// -----Compute Tax ---------//
/*
$(function(){
	$('#taxDataBasic, #taxDataHouse, #taxDataTran, #taxDataOthers, #taxDataNonTax').keypress(function(event){
		var presKey = event.which || event.keyCode;
		if(presKey == '13' || presKey == 'Enter'){
			computeTaxFunction();
		}
	});
});
*/
$(function(){
	$('#computeTax').click(function(){
		computeTaxFunction();
	});
});	

//------- Format Input figures---------/
var bAllwOrig =0;
var hAllwOrig =0;
var tAllwOrig =0;
var oAllwOrig =0;
var nAllwOrig =0; 

$(function(){
	$('#taxDataBasic').blur(function(){
		$('#taxDataBasic').attr('type', 'text');
		bAllwOrig = parseFloat($('#taxDataBasic').val());

		var bAllwFig = $('#taxDataBasic').val();
		var bAllwFmt = new Number(bAllwFig);

		var bAllwFmtFinal = bAllwFmt.toLocaleString('en-US');
		$('#taxDataBasic').val(bAllwFmtFinal);
		computeTaxFunction();
	});
});
$(function(){
	$('#taxDataBasic').focus(function(){
		$('#taxDataBasic').attr('type', 'number');
		$('#taxDataBasic').val(bAllwOrig);
	});
});
$(function(){
	$('#taxDataHouse').blur(function(){
		$('#taxDataHouse').attr('type', 'text');
		hAllwOrig = parseFloat($('#taxDataHouse').val());

		var hAllwFig = $('#taxDataHouse').val();
		var hAllwFmt = new Number(hAllwFig);

		var hAllwFmtFinal = hAllwFmt.toLocaleString('en-US');
		$('#taxDataHouse').val(hAllwFmtFinal);
		computeTaxFunction();
	});
});
$(function(){
	$('#taxDataHouse').focus(function(){
		$('#taxDataHouse').attr('type', 'number');
		$('#taxDataHouse').val(hAllwOrig);
	});
});
$(function(){
	$('#taxDataTran').blur(function(){
		$('#taxDataTran').attr('type', 'text');
		tAllwOrig = parseFloat($('#taxDataTran').val());

		var tAllwFig = $('#taxDataTran').val();
		var tAllwFmt = new Number(tAllwFig);

		var tAllwFmtFinal = tAllwFmt.toLocaleString('en-US');
		$('#taxDataTran').val(tAllwFmtFinal);
		computeTaxFunction();
	});
});
$(function(){
	$('#taxDataTran').focus(function(){
		$('#taxDataTran').attr('type', 'number');
		$('#taxDataTran').val(tAllwOrig);
	});
});
$(function(){
	$('#taxDataOthers').blur(function(){
		$('#taxDataOthers').attr('type', 'text');
		oAllwOrig = parseFloat($('#taxDataOthers').val());

		var oAllwFig = $('#taxDataOthers').val();
		var oAllwFmt = new Number(oAllwFig);

		var oAllwFmtFinal = oAllwFmt.toLocaleString('en-US');
		$('#taxDataOthers').val(oAllwFmtFinal);
		computeTaxFunction();
	});
});
$(function(){
	$('#taxDataOthers').focus(function(){
		$('#taxDataOthers').attr('type', 'number');
		$('#taxDataOthers').val(oAllwOrig);
	});
});
$(function(){
	$('#taxDataNonTax').blur(function(){
		$('#taxDataNonTax').attr('type', 'text');
		nAllwOrig = parseFloat($('#taxDataNonTax').val());

		var nAllwFig = $('#taxDataNonTax').val();
		var nAllwFmt = new Number(nAllwFig);

		var nAllwFmtFinal = nAllwFmt.toLocaleString('en-US');
		$('#taxDataNonTax').val(nAllwFmtFinal);
		computeTaxFunction();
	});
});
$(function(){
	$('#taxDataNonTax').focus(function(){
		$('#taxDataNonTax').attr('type', 'number');
		$('#taxDataNonTax').val(nAllwOrig);
	});
});
//------- /Format Input figures---------/


function computeTaxFunction(){
	//var bAllw = parseInt(tax_Data[0].value);
	var bAllw = parseInt(bAllwOrig);
	if (isNaN(bAllw) || bAllw == ""){bAllw = 0;
	} else {bAllw = bAllw;}
	tem_bAllw = bAllw;

	//var hAllw = parseInt(tax_Data[1].value);
	var hAllw = parseInt(hAllwOrig);
	if (isNaN(hAllw) || hAllw == ""){hAllw = 0;
	} else {hAllw = hAllw;}
	tem_hAllw = hAllw;

	//var tAllw = parseInt(tax_Data[2].value);
	var tAllw = parseInt(tAllwOrig);
	if (isNaN(tAllw) || tAllw == ""){tAllw = 0;
	} else {tAllw = tAllw;}
	tem_tAllw = tAllw;

	//var oAllw = parseInt(tax_Data[3].value);
	var oAllw = parseInt(oAllwOrig);
	if (isNaN(oAllw) || oAllw == ""){oAllw = 0;
	} else {oAllw = oAllw;}
	tem_oAllw = oAllw;

	//var nAllw = parseInt(tax_Data[4].value);
	var nAllw = parseInt(nAllwOrig);
	if (isNaN(nAllw) || nAllw == ""){nAllw = 0;
	} else {nAllw = nAllw;}
	tem_nAllw = nAllw;

	var pension_Box = document.getElementById("cbox1");
	var nHF_Box = document.getElementById("cbox2");
	var pension, nHF;
	if (pension_Box.checked == true){
	pension = "Yes";
	} else {pension	= "No"};

	if (nHF_Box.checked == true){
	nHF = "Yes";
	} else {nHF	= "No"};

	//Display Period Selection
	var aSelection = document.getElementById("aCheckmark");
	var mSelection = document.getElementById("mCheckmark");

	if (aSelection.checked == true){
	annualSel = "Yes";
	} else {annualSel	= "No"};

	if (mSelection == true){
	monthlySelect = "Yes";
	} else {monthlySelect	= "No"};


	//Allowances Period Selection
	var annualAllwSel, monthlyAllwSelect;
	var aFSelection = document.getElementById("aFCheckmark");
	var mFSelection = document.getElementById("mFCheckmark");

	if (aFSelection.checked == true){
	annualAllwSel = "Yes";
	} else {annualAllwSel	= "No"};

	if (mFSelection == true){
	monthlyAllwSelect = "Yes";
	} else {monthlyAllwSelect	= "No"};

	//Check if figures entered
	if (bAllw + hAllw + tAllw + oAllw + nAllw == 0){
	alert('Please enter your Allowances');
	} else {
	//Call payeeCalculator Function
	var tax_Result = payeeCalculator(pension, nHF, bAllw, hAllw, tAllw, oAllw, nAllw, annualSel, monthlySelect, annualAllwSel, monthlyAllwSelect);
	//returned tax_Result is [tgrossPay, taxableIncome, netPay,  penChr, nHFChr, taxPayable, minTax];
	//returned tax_Result is = [0.tgrossPayAnnual, 1.taxableIncomeAnnual, 2.netPayAnnual,  3.penChrAnnual, 4.nHFChrAnnual, 5.taxPayableAnnual, 6.minTaxAnnual, + 
			//7.fConsolRf, 8.first300, 9.next600, 10.next1100, 11.next1600, 12.next3200, 13.over3200, 14.tgrossPayAnnual, 15.taxableIncomeAnnual, 16.nonTaxable, + 
			// 17.minTaxAnnual, 18.taxPayableAnnual, 19.aEffectTax, 20.aDeductAllw, 21.aDeductAndRelief, 22.afirstTxbl300, 23.anextTxbl600, 24.anextTxbl1100, 25.anextTxbl1600, + 
			// 26.anextTxbl3200, 27.aoverTxbl3200, 28.aEarnedIncome, 29.aNetPay];
	//tax_ResultCheck.innerHTML = tax_Result;
	//alert(tax_Result);
	$('#taxResultCheck').text(tax_Result);

	tax_result[0].innerHTML = tax_Result[0];
	tax_result[1].innerHTML = tax_Result[1];
	tax_result[2].innerHTML = tax_Result[2];
	tax_result[3].innerHTML = tax_Result[3];
	tax_result[4].innerHTML = tax_Result[4];
	tax_result[5].innerHTML = tax_Result[5];
	tax_result[6].innerHTML = tax_Result[19]+'%';

	//Tax Details
	tax_Details_1[0].innerHTML = tax_Result[28]; //Earned Income
	tax_Details_1[1].innerHTML = tax_Result[16]; //Unearned Income

	tax_Details[0].innerHTML = tax_Result[14];
	tax_Details[1].innerHTML = tax_Result[29]; //aNetPay
	tax_Details[2].innerHTML = tax_Result[3];
	tax_Details[3].innerHTML = tax_Result[4];

	tax_Details[4].innerHTML = tax_Result[20]; //Tax_Result[] - Total deductions
	tax_Details[5].innerHTML = tax_Result[7];  //Tax_Result[7] - ConsolRelf
	tax_Details[6].innerHTML = tax_Result[21];
	tax_Details[7].innerHTML = tax_Result[15];
	tax_Details[8].innerHTML = tax_Result[18];
	tax_Details[9].innerHTML = tax_Result[17];

	tax_Details[10].innerHTML = tax_Result[8];  //First N300,000
	tax_Details[11].innerHTML = tax_Result[9];
	tax_Details[12].innerHTML = tax_Result[10];
	tax_Details[13].innerHTML = tax_Result[11];
	tax_Details[14].innerHTML = tax_Result[12];
	tax_Details[15].innerHTML = tax_Result[13];

	//Taxable Income Band
	tax_Band[0].innerHTML = tax_Result[22]+' @7%';  //Taxable Income: First N300,000
	tax_Band[1].innerHTML = tax_Result[23]+' @11%';
	tax_Band[2].innerHTML = tax_Result[24]+' @15%';
	tax_Band[3].innerHTML = tax_Result[25]+' @19%';
	tax_Band[4].innerHTML = tax_Result[26]+' @21%';
	tax_Band[5].innerHTML = tax_Result[27]+' @24%';
	}
}
//-------Attaching Events on the check/radio buttons-------/
$(function(){
	$('#aCheckmark').change(function(){
	computeTaxFunction();
	});
});
$(function(){
	$('#mCheckmark').change(function(){
	computeTaxFunction();
	});
});
$(function(){
	$('#aFCheckmark').change(function(){
	computeTaxFunction();
	});
});
$(function(){
	$('#mFCheckmark').change(function(){
	computeTaxFunction();
	});
});
$(function(){
	$('#cbox1').change(function(){
	computeTaxFunction();
	});
});
$(function(){
	$('#cbox2').change(function(){
	computeTaxFunction();
	});
});

//-------/Attaching Events on the check/radio buttons-------/
$(function(){
	$('#recallFigs').click(function(){
	tax_Data[0].value = tem_bAllw;
	tax_Data[1].value = tem_hAllw;
	tax_Data[2].value = tem_tAllw;
	tax_Data[3].value = tem_oAllw;
	tax_Data[4].value = tem_nAllw;

	bAllwOrig = tem_bAllw;
	hAllwOrig = tem_hAllw;
	tAllwOrig = tem_tAllw;
	oAllwOrig = tem_oAllw;
	nAllwOrig = tem_nAllw;
	});
});

$(function(){
	$('#page3HeaderIconL').click(function(){
		resetTaxDataFigures();
	});
});

var dataReset = false;
$(function(){
	$('#resetFigs').click(function(){
		resetTaxDataFigures();
	});
});

function resetTaxDataFigures(){
	tax_result[0].innerHTML = '00.00';
	tax_result[1].innerHTML = '00.00';
	tax_result[2].innerHTML = '00.00';
	tax_result[3].innerHTML = '00.00';
	tax_result[4].innerHTML = '00.00';
	tax_result[5].innerHTML = '00.00';
	tax_result[6].innerHTML = '0';
	tax_Data[0].value = "";
	tax_Data[1].value = "";
	tax_Data[2].value = "";
	tax_Data[3].value = "";
	tax_Data[4].value = "";
	bAllwOrig = "";
	hAllwOrig = "";
	tAllwOrig = "";
	oAllwOrig = "";
	nAllwOrig = ""; 

	dataReset = true;
}


function payeeCalculator(pen, nHF, bAllow, hAllow, tAllow, oAllow, nonTaxable, annualResult, monthlyResult, annualAllowanceSel, monthlyAllowanceSel){
var grossPay, tgrossPay, netPay, consolRf, penChr, nHFChr, result, annualFResult, monthFResult;
var taxableIncome, taxPayable, minTax;
var tgrossPayAnnual, taxableIncomeAnnual, netPayAnnual,  penChrAnnual, nHFChrAnnual, taxPayableAnnual, minTaxAnnual;
var monGross, montaxableIncome, monNet, monPen, monNHF, monTax, monminTax;
var gradualTaxableIncome, fConsolRF;

//Annual or Month Figures?
if(annualAllowanceSel ==="Yes"){
	bAllow = bAllow;
	hAllow = hAllow;
	tAllow = tAllow;
	oAllow = oAllow;
	nonTaxable = nonTaxable;
	}
else{
	bAllow = bAllow * 12;
	hAllow = hAllow * 12;
	tAllow = tAllow * 12;
	oAllow = oAllow * 12;
	nonTaxable = nonTaxable * 12;
	}

grossPay = bAllow + hAllow + tAllow + oAllow;
consolRf = (0.2 * grossPay)  + (Math.max(0.01 * grossPay, 200000));
fConsolRF = consolRf;

if(pen==="Yes"){
	penChr = grossPay*0.08; consolRf = consolRf + penChr;}
else{penChr = 0; consolRf = consolRf;}

if(nHF==="Yes"){
	nHFChr = bAllow*0.025; consolRf = consolRf + nHFChr;} 
else{ nHFChr = 0; consolRf = consolRf;}

taxableIncome = grossPay - consolRf;
minTax = 0.01 * grossPay;
gradualTaxableIncome = taxableIncome;

var first300, next600, next1100, next1600, next3200, over3200;
if (taxableIncome <= 0){
   taxPayable = 0.01 * grossPay;
} else if (taxableIncome <= 300000){
	taxPayable = 0.07 * taxableIncome;
	first300 = taxPayable;
} else if (taxableIncome <= 600000){
   taxPayable = ((taxableIncome - 300000) *0.11) + 21000;
   next600 = taxPayable;
} else if (taxableIncome <= 1100000){
  taxPayable = ((taxableIncome - 600000)  * 0.15) + 54000;
  next1100 = taxPayable;
} else if (taxableIncome <= 1600000){
  taxPayable = ((taxableIncome - 1100000) *0.19) + 129000;
  next1600 = taxPayable;
} else if (taxableIncome <= 3200000){
  taxPayable = ((taxableIncome - 1600000) * 0.21) + 224000;
  next3200 = taxPayable;
} else if (taxableIncome > 3200000){
  taxPayable = ((taxableIncome - 3200000) * 0.24) + 560000;
  over3200 = taxPayable;
}
		
		//Get Tax Payable Amount for Each Tax band:
		var first300, first600, first1100, first1600, first3200, first6400;
		var firstTxbl300, nextTxbl600, nextTxbl1100, nextTxbl1600, nextTxbl3200, overTxbl3200; //Get taxable amount for each tax band
		//First Level: First N300,000
        if(taxableIncome <= 0){firstTxbl300 = 0; first300 = 0};
        if(taxableIncome < 300000){firstTxbl300 = taxableIncome; first300 = (0.07 * taxableIncome)}
        else {firstTxbl300 = 300000; first300 = 21000}
        
        //Second Level: Next N300,000 
        var cum600 = taxableIncome - 300000;
        if(cum600 <= 0){nextTxbl600 = 0; first600 = 0};
        if(cum600 > 0 && cum600 <= 300000){nextTxbl600 = cum600; first600 = 0.11* cum600}
        if(cum600 > 300000){nextTxbl600 = 300000; first600 = 33000};

         //Third Level: Next N500,000
        var cum1100 = taxableIncome - 600000;
        if(cum1100 <= 0){nextTxbl1100 = 0; first1100 = 0};
        if(cum1100 > 0 && cum1100 <= 500000){nextTxbl1100 = cum1100; first1100 = 0.15* cum1100}
        if(cum1100 > 500000){nextTxbl1100 = 500000; first1100 = 75000};

         //Forth Level: Next N500,000
        var cum1600 = taxableIncome - 1100000;
        if(cum1600 <= 0){nextTxbl1600 = 0; first1600 = 0};
        if(cum1600 > 0 && cum1600 <= 500000){nextTxbl1600 = cum1600; first1600 = 0.19* cum1600}
        if(cum1600 > 500000){nextTxbl1600 = 500000; first1600 = 95000};

         //Fifth Level: Next N1,600,000
        var cum3200 = taxableIncome - 1600000;
        if(cum3200 <= 0){nextTxbl3200 = 0; first3200 = 0};
        if(cum3200 > 0 && cum3200 <= 1600000){nextTxbl3200 = cum3200; first3200 = 0.21* cum3200}
        if(cum3200 > 1600000){nextTxbl3200 = 1600000; first3200 = 336000};

         //Sixth Level: Next N3,200,000
        var cum6400 = taxableIncome - 3200000;
        if(cum6400 <= 0){overTxbl3200 = 0; first6400 = 0};
        if(cum6400 > 0 ){overTxbl3200 = cum6400; first6400 = 0.24* cum6400}

//Minimum Tax?
if(minTax > taxPayable){
	taxPayable = minTax;
}else{
	taxPayable = taxPayable;
}

//It must not be undefined.

//Detailed Analyses
var aconsolRf, afirst300, anext600, anext1100, anext1600, anext3200, aover3200;
aconsolRf = consolRf.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
/*afirst300 = first300.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); */
anext600 = first600.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
anext1100 = first1100.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
anext1600 = first1600.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
anext3200 = first3200.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aover3200 = first6400.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

if(first300 < 0){afirst300 = '0.00'}
	else{afirst300 = first300.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}; 

//Annual Result
var effectTax, aEffectTax, deductAllw, aDeductAllw, deductAndRelief, aDeductAndRelief, aEarnedIncome, aUnearnedIncome, aNetPay;
effectTax = (taxPayable/grossPay) *100;
tgrossPay = grossPay + nonTaxable;
netPay = tgrossPay - penChr - nHFChr - taxPayable;
penChr = penChr;
nHFChr = nHFChr;
taxableIncome = taxableIncome;
deductAllw = penChr + nHFChr;
deductAndRelief = fConsolRF + deductAllw;
aEarnedIncome = grossPay;
aNetPay = netPay;

var afirstTxbl300, anextTxbl600, anextTxbl1100, anextTxbl1600, anextTxbl3200, aoverTxbl3200;
if(firstTxbl300 < 0){afirstTxbl300 = '0.00'}
	else{afirstTxbl300 = firstTxbl300.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')};

anextTxbl600 = nextTxbl600.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
anextTxbl1100 = nextTxbl1100.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
anextTxbl1600 = nextTxbl1600.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
anextTxbl3200 = nextTxbl3200.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aoverTxbl3200 = overTxbl3200.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');


tgrossPayAnnual = tgrossPay.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
netPayAnnual = netPay.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
penChrAnnual = penChr.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
nHFChrAnnual = nHFChr.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
taxPayableAnnual = taxPayable.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
minTaxAnnual = minTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
fConsolRF = fConsolRF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aEffectTax = effectTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aDeductAllw = deductAllw.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aDeductAndRelief = deductAndRelief.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
nonTaxable = nonTaxable.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aEarnedIncome = aEarnedIncome.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
aNetPay = aNetPay.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//Negative Taxable Income should be Nil
if(taxableIncome < 0){taxableIncomeAnnual = 'Nil'}
	else{taxableIncomeAnnual = taxableIncome.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')};

annualFResult = [tgrossPayAnnual, taxableIncomeAnnual, netPayAnnual,  penChrAnnual, nHFChrAnnual, taxPayableAnnual, minTaxAnnual, fConsolRF, afirst300, anext600, anext1100, anext1600, anext3200, aover3200, tgrossPayAnnual, taxableIncomeAnnual, nonTaxable, minTaxAnnual, taxPayableAnnual, aEffectTax, aDeductAllw, aDeductAndRelief, afirstTxbl300, anextTxbl600, anextTxbl1100, anextTxbl1600, anextTxbl3200, aoverTxbl3200, aEarnedIncome, aNetPay];
//Minimum Tax format
if(taxPayableAnnual === minTaxAnnual){
	//alert('Minimumtax');
 $('.grid1-item8').css('background-color', 'lime');
 $('.grid1-item8').css('border-radius', '10px');
 $('#taxResultTaxDueSpan').text('Minimum Tax');

}else{
	$('.grid1-item8').css('background-color', '');
	$('#taxResultTaxDueSpan').text('Tax Payable');
}


//Monthly Result
var mEffectTax, fmEffectTax;
monGross = tgrossPay/12;
montaxableIncome = taxableIncome/12;
monNet = netPay/12;
monPen = penChr/12;
monNHF = nHFChr/12;
monTax = taxPayable/12;
monminTax = minTax/12;
mEffectTax = (monTax/monGross) *100;


monGross = monGross.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
/*montaxableIncome = montaxableIncome.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');*/
monNet = monNet.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
monPen = monPen.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
monNHF = monNHF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
monTax = monTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
monminTax = monminTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
fmEffectTax = mEffectTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//Negative Taxable Income should be Nil
if(montaxableIncome < 0){montaxableIncome = 'Nil'}
	else{montaxableIncome = montaxableIncome.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')};


//annualFResult = [tgrossPayAnnual, taxableIncomeAnnual, netPayAnnual,  penChrAnnual, nHFChrAnnual, taxPayableAnnual, minTaxAnnual, consolRf, first300, next600, next1100, next1600, next3200, over3200, tgrossPayAnnual, taxableIncomeAnnual, nonTaxable, minTaxAnnual, taxPayableAnnual];
monthFResult = [monGross, montaxableIncome, monNet, monPen, monNHF, monTax,  minTax, fConsolRF, afirst300, anext600, anext1100, anext1600, anext3200, aover3200, tgrossPayAnnual, taxableIncomeAnnual, nonTaxable, minTaxAnnual, taxPayableAnnual, fmEffectTax, aDeductAllw, aDeductAndRelief, afirstTxbl300, anextTxbl600, anextTxbl1100, anextTxbl1600, anextTxbl3200, aoverTxbl3200, aEarnedIncome, aNetPay];

if(annualResult ==="Yes"){
	return annualFResult}
else{return monthFResult}

}
//View Tax Details Function:
$(function(){
	$('#viewTaxDetails').click(function(){
		var grossPay = $('#taxResultGross').text();
		//grossPay = grossPay+"";
		if(grossPay == '00.00'){alert("No details to display!")
		}else{location.replace("#page4")};
	});
});


$(function(){
	var test = $('#contTest').css("margin");
	$('#contTest').click(function(){
	alert(test);
	$('#contTest').css("margin", "3px 3px 3px 4px");
	});
});

/*
function testClick(){
	document.getElementById("taxResultGross").innerHTML = '2222';
}
*/

function goToPage2(){ location.replace("#page2"); }
function go2Prev(){	history.back(); }
function goSlashScrn(){	location.replace("#spashScreen2Page"); }

function goToPage9(){ location.replace("#page9"); }

function fadingVerses(){setInterval(function(){
	$("#dailyPass").hide();
    $("#dailyPass").html(randomBibleVerse()); //Set Bible verse in tis ID
    $("#dailyPass").fadeIn(2000);
    $("#dailyPass").delay(5000);
    $("#dailyPass").fadeOut(2000);
    }, 9100);
};


/*----- Responsive Page Definition -------*/
function myFunction(x){
	if (x.matches){
		$('.taxResult').css("font-size", "10px");
		$('.taxResultEffecTax').css("font-size", "14px");
		$('.resultViewSpanHome').css("font-size", "12px");
	}else{$('.taxResult').css("font-size", "14px"); 
		$('.resultViewSpanHome').css("font-size", "14px");}
}
function myFunction2(x){
	if (x.matches){
		$('.taxDetails').css("font-size", "10px");
		$('.taxDetails_1').css("font-size", "10px");
		$('.grid3-Cont-S3').css("font-size", "10px");
	}else{$('.taxDetails').css("font-size", "14px");
		 $('.taxDetails_1').css("font-size", "14px");
		 $('.grid3-Cont-S3').css("font-size", "14px"); }
}
function myFunction2b(x){
	if (x.matches){
		$('#grid3-Breakdown-Head').css("font-size", "12px");
	}else{$('#grid3-Breakdown-Head').css("font-size", "14px")  }
}

function myFunction3(x){
	if (x.matches){
		$('.grid3-container >div > span').css("font-size", "10px");
	}else{$('.grid3-container >div > span').css("font-size", "14px")  }
}
function myFunction4(x){
	if (x.matches){
		$('.responsivePg8').css("font-size", "10px");
		$('.responsivePg8').css("font-weight", "bolder");
	}else{$('.responsivePg8').css("font-size", "14px")  }
}
function myFunction5(x){
	if (x.matches){
		$('.navBtns-Home').css("font-size", "13px");
	}else{$('.navBtns-Home').css("font-size", "16px")  }
}
function myFunction6(x){
	if (x.matches){
		$('.pitDetails > a').css("font-size", "12px");
	}else{$('.pitDetails > a').css("font-size", "16px")  }
}

var x = window.matchMedia("(max-width: 400px)")
myFunction(x)
x.addListener(myFunction);
myFunction2(x)
x.addListener(myFunction2);
myFunction2b(x)
x.addListener(myFunction2b);
myFunction3(x)
x.addListener(myFunction3);
myFunction4(x)
x.addListener(myFunction4);
myFunction5(x)
x.addListener(myFunction5);
myFunction6(x)
x.addListener(myFunction6);

/*
grid3-container
$(function(){
	//var test = $('#contTest').css("margin");
	$('#taxDataNonTax').keydown(function(){
	var x = $('#taxDataNonTax').val();
	$('#taxDataNonTax').val(addCommas(x));
	});
});

function addCommas(x){
	var parts = x.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

$(function(){
	//var test = $('.navBtns-Home').css("margin");
	$("#viewTaxDetails").click(function(){
	//var x = $(".grid3-Cont-S3").css("font-size");
	//var x = typeof($("#taxResultGross"))
	var x = $("#taxResultGross").text();
	alert(x);
	});
});
*/
