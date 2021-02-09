var requirCreationCost = [4500,7875,12375,18000,24750,32625,41625,51750,63000];
var requirUpgradeCost =  [0,4500,7875,12375,18000,24750,32625,41625,51750,63000];
//? to isté
var rarityName = ['','Royal','Trapezoid','Refined Trapezoid','Briliant Trapezoid','Exquisite Trapezoid','Imperial','Refined Imperial','Briliant Imperial','Exquisite Imperial'];

window.onload = () => {
    generateTable();
    generateResult();
}

window.onchange = () => generateResult();

var table = getID('hint-table');

function generateTable(){

    for(let i = 1; i < (requirCreationCost.length + 1); i++){
        let row = table.insertRow();
            let nameTD = row.insertCell();
                nameTD.setAttribute('id','center-fix');
                nameTD.innerHTML = rarityName[i];
            let creationTD = row.insertCell();
                creationTD.innerHTML = numFormatDE(requirCreationCost[i-1]);
            let upgradeTD = row.insertCell();
                upgradeTD.innerHTML = numFormatDE(requirUpgradeCost[i-1]);
            
    }

}

var result = getID('result');
var resultInt = 0;
var resultStr = '';
function generateResult(){

    var count = parseInt(getID('number-opal').value);
    var type = parseInt(getID('opal-rarity').value);
    // var type = 1;
    console.log(type + ' -> ' + requirCreationCost.length + ' ' + requirUpgradeCost.length);
    if(type == 0){
        result.innerHTML = 'Select opal rarity!';
    }else if(count < 0){
        result.innerHTML = 'Insert real number as a count!';
    }else{

        console.log(`Input\n\nGem rarity: ${rarityName[type]}\nRarityID: ${type}\nCount: ${count}`);
        for(let i = type; i < (requirCreationCost.length + 1); i++){
            resultInt += requirUpgradeCost[i];
        }
        if(resultInt == 63000){
            result.innerHTML = `You will need ${numFormatDE(requirUpgradeCost[type] * count)} gem dust for creating such opal(s) and 0 for upgrading them to max tier.`;
        } else result.innerHTML = `You will need ${numFormatDE(requirUpgradeCost[type] * count)} gem dust for creating such opal(s) and ${numFormatDE(resultInt * count)} for upgrading them to max tier.`;
        console.log(`Result\n\nDust needed for creation: ${numFormatDE(requirUpgradeCost[type])}\nDust needed for upgrade to max: ${numFormatDE(resultInt * count)}`);
        resultInt = 0; resultStr = 0;
    }






}