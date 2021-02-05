var stringArr = ['Normal','Improved','Magical','Extraordinary','Legendary'];

var requir_rarity_off = [0,3126,8596,17188,28908];
var melt_rarity_off = [1563,4298,8594,14454,21875];

var requir_rarity_deff = [0,2500,6876,13750,23126];
var melt_rarity_deff = [1250,3438,6875,11563,17500];

var requir_rarity_oth = [0,250,688,1375,2313];
var melt_rarity_oth = [125,344,688,1156,1750];

var table01 = getID('table-rarity-stats');
var table02 = getID('table-melt-stats');
var result = getID('result');

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

window.onload = () => {

    generateTables(table01,requir_rarity_off,requir_rarity_deff,requir_rarity_oth);
    generateTables(table02,melt_rarity_off,melt_rarity_deff,melt_rarity_oth);
}