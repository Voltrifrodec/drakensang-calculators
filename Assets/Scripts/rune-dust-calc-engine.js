var stringArr = ['Normal','Improved','Magical','Extraordinary','Legendary'];

var requir_rarity_off = [0,3126,8596,17188,28908];
var requirROff_count = 57818;
var melt_rarity_off = [1563,4298,8594,14454,21875];

var requir_rarity_deff = [0,2500,6876,13750,23126];
var requirRDeff_count = 46252;
var melt_rarity_deff = [1250,3438,6875,11563,17500];

var requir_rarity_oth = [0,250,688,1375,2313];
var requirROth_count = 4626;
var melt_rarity_oth = [125,344,688,1156,1750];

var table01 = getID('table-rarity-stats');
var table02 = getID('table-melt-stats');
var result = getID('result');
var result_long = getID('result-long');

window.onload = () => {

    generateTables(table01,requir_rarity_off,requir_rarity_deff,requir_rarity_oth);
    generateTables(table02,melt_rarity_off,melt_rarity_deff,melt_rarity_oth);
}

window.onchange = () => generateResult();

function generateTables(table,array1,array2,array3){

    for(let i = 0; i < array1.length; i++){
        
        let row = table.insertRow();
        let td_name = row.insertCell();
        let td_value_off = row.insertCell();
        let td_value_deff = row.insertCell();
            td_value_deff.setAttribute('class','td-center');
        let td_value_oth = row.insertCell();
            td_value_oth.setAttribute('class','td-center');

        td_name.innerHTML = stringArr[i];
        td_value_off.innerHTML = array1[i];
        td_value_deff.innerHTML = array2[i];
        td_value_oth.innerHTML = array3[i];
        
    }
    
}

var resultNum1 = 0;
var resultNum2 = 0;
var resultNum3 = 0;

function generateResult(){

    var runeT0 = parseInt(getID('rune0').value);
    var runeT1 = parseInt(getID('rune1').value);
    var runeT2 = parseInt(getID('rune2').value);
    var runeT3 = parseInt(getID('rune3').value);
    
    if(runeT0 == NaN) runeT0 = 0;
    if(runeT1 == NaN) runeT1 = 0;
    if(runeT2 == NaN) runeT2 = 0;
    if(runeT3 == null) runeT3 = 0;
    
    
    
    console.log('Offensive rune dust ->' + resultNum1);
    console.log('Deffensive rune dust -> ' + resultNum2);
    console.log('Other rune dust ->' + resultNum3);
    
    var type = parseInt(getID('rune-type-sel').value);
    switch(type){
        case 0:
        {
            getID('result').innerHTML = 'Enter rune type!';
            break;
        }
        case 1:
        {
            resultNum1 = (runeT0 * requirROff_count) + (runeT1 * (requirROff_count - 3126)) + (runeT2 * (requirROff_count - 11722)) + (runeT3 * (requirROff_count - 28910));
            // result += (runeT0 * requirROff_count) + (runeT1 * (requirROff_count - 3126)) + (runeT2 * (requirROff_count - 11722)) + (runeT3 * (requirROff_count - 28910));
            result.innerHTML = 'You will need <b>' + numFormatDE(resultNum1) + '</b> rune dust for upgrade your runes.';
            result_long.innerHTML = `For t0 - t4 runes you will need <b>${numFormatDE(runeT0 * requirROff_count)}</b> rune dust, for t1 - t4 <b>${numFormatDE(runeT1 * (requirROff_count - 3126))}</b> rune dust, for t2 - t4 <b>${numFormatDE(runeT2 * (requirROff_count - 11722))}</b> rune dust and for t3 - t4 <b>${numFormatDE(runeT3 * (requirROff_count - 28910))}</b> rune dust.`;
            break;
        }
        case 2:
        {
            resultNum2 = (runeT0 * requirRDeff_count) + (runeT1 * (requirRDeff_count - 2500)) + (runeT2 * (requirRDeff_count - 9376)) + (runeT3 * (requirRDeff_count - 23126));
            // result += (runeT0 * requirRDeff_count) + (runeT1 * (requirRDeff_count - 2500)) + (runeT2 * (requirRDeff_count - 7376)) + (runeT3 * (requirRDeff_count - 21126));
            result.innerHTML = 'You will need <b>' + numFormatDE(resultNum2) + '</b> rune dust for upgrade your runes.';
            result_long.innerHTML = `For t0 - t4 runes you will need <b>${numFormatDE(runeT0 * requirRDeff_count)}<b> rune dust, for t1 - t4 <b>${numFormatDE(runeT1 * (requirRDeff_count - 2500))}</b> rune dust, for t2 - t4 <b>${numFormatDE(runeT2 * (requirRDeff_count - 9376))}</b> rune dust and for t3 - t4 <b>${numFormatDE(runeT3 * (requirRDeff_count - 23126))}</b> rune dust.`;
            break;
        }
        case 3:
        {
            resultNum3 = (runeT0 * requirROth_count) + (runeT1 * (requirROth_count - 250)) + (runeT2 * (requirROth_count - 938)) + (runeT3 * (requirROth_count - 2313));
            // result += (runeT0 * requirRDeff_count) + (runeT1 * (requirRDeff_count - 2500)) + (runeT2 * (requirRDeff_count - 7376)) + (runeT3 * (requirRDeff_count - 21126));
            result.innerHTML = 'You will need <b>' + numFormatDE(resultNum3) + '</b> rune dust for upgrade your runes.';
            result_long.innerHTML = `For t0 - t4 runes you will need <b>${numFormatDE(runeT0 * requirROth_count)}<b> rune dust, for t1 - t4 <b>${numFormatDE(runeT1 * (requirROth_count - 250))}</b> rune dust, for t2 - t4 <b>${numFormatDE(runeT2 * (requirROth_count - 938))}</b> rune dust and for t3 - t4 <b>${numFormatDE(runeT3 * (requirROth_count - 2313))}</b> rune dust.`;
            break;
        }
        
        default:
        {
            console.log('Unknown type!');
            break;
        }
    }

    runeT0 = 0;
    runeT1 = 0;
    runeT2 = 0;
    runeT3 = 0;

}

