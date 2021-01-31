var string_rarity = ['Flawed','Splintered','Simple','Full','Polished','Radiant','Flawless','Sacred','Royal','Trapezoid','Refined Trapezoid','Brilliant Trapezoid','Exquisite Trapezoid','Imperial','Refined Imperial','Brilliant Imperial','Exquisite Imperial'];

var requir_rarity_deff = [null,2,4,8,16,40,120,360,800,1600,2800,4400,6400,8800,11600,14800,18400];
var melt_rarity_deff =   [1,2,4,8,20,60,180,400,800,1400,2200,3200,4400,5800,7400,9200,11200];

var requir_rarity_off  = [null,2,6,10,20,50,150,450,1000,2000,3500,5500,8000,11000,14500,18500,23000];
var melt_rarity_off =    [1,3,5,10,25,75,225,500,1000,1750,2750,4000,5500,7250,9250,11500,14000];

var calc_window = getID('calculator-window');
var table01 = getID('table-rarity-stats');
var table02 = getID('table-melt-stats');
var result = getID('result');

window.onload = () => {

    generateTable(table01,string_rarity,requir_rarity_off,requir_rarity_deff);
    generateTable(table02,string_rarity,melt_rarity_off,melt_rarity_deff);
    resultCompiler();

}

window.onchange = () => resultCompiler();

function generateTable(table,array1,array2,array3){

    for(let i = 0; i < array1.length; i++){
        
        let row = table.insertRow();
        let td_rarity = row.insertCell();
        let td_value_off = row.insertCell();
            td_value_off.setAttribute('class','td-center');
        let td_value_deff = row.insertCell();
            td_value_deff.setAttribute('class','td-center');

        td_rarity.innerHTML = array1[i];
        td_value_off.innerHTML = array2[i];
        td_value_deff.innerHTML = array3[i];
        
    }

}

var count = 0;
var resulter = 0;

function resultCompiler(){
    console.clear();
    console.log('Compiling result..');
    let count = parseInt(getID('count').value);
    let tier_now = parseInt(getID('rarity-now-sel').value);
    let tier_tbd = parseInt(getID('rarity-needed-sel').value);
    let gem_type = parseInt(getID('gem-type').value);
    console.log('------------\nCount: ' + count + '\nTier now: ' + tier_now + ' \nTier after: ' + tier_tbd);

    if(tier_now == 0 || tier_tbd == 0 || gem_type == 0){
        result.setAttribute('id','red-result');
        result.innerHTML = 'Fill all of the required data!';
        result.removeAttribute('id','red-result');
    } else if(tier_now == tier_tbd){
        result.setAttribute('id','red-result');
        result.innerHTML = 'Tier you want is equal to one you have!';
        result.removeAttribute('id','red-result');
    } else if (tier_now > tier_tbd){
        result.setAttribute('id','red-result');
        result.innerHTML = 'You already have better tier than you want!';        
        result.removeAttribute('id','red-result');
    } else{
        for(let i = tier_now; i <= (tier_tbd - 1); i++){
            switch(gem_type){
                case 0: 
                    result.innerHTML = 'Select gem type!';
                    break;
                case 1:
                    if(requir_rarity_off[i] == null){resulter += 0;} else{
                        resulter += requir_rarity_off[i];
                        console.log(`${i} -> ${resulter} (+ ${requir_rarity_off[i]})`);

                    } 
                    break;
                case 2:
                    if(requir_rarity_deff[i] == null){resulter += 0;} else{
                        resulter += requir_rarity_deff[i];
                        console.log(`${i} -> ${resulter} (+ ${requir_rarity_deff[i]})`);

                    }
                    break;
                default: 
                    alert('Unknown error!');
                    break;
            }
        }
        console.log('Done :3\n\nResult: ' + numFormatDE(resulter) + ' * ' + numFormatDE(count) + ' -> ' + numFormatDE(resulter * count));
        result.innerHTML = `You will need <b>${numFormatDE(resulter * count)}</b> dust for upgrading <b>${numFormatDE(count)}</b> stones. Good luck with farm!`;

    }
    resulter = 0;

}
/*
function generateResult(){
    console.clear();

    tier_now = Number(getID('tier-now').value);
    tier_want = Number(getID('tier-want').value);
    gem_type = Number(getID('gem-type').value);
    n = getID('quantity').value;
    console.log('Tier now: ' ,tier_now);
    console.log('Tier want: ' ,tier_want);
    console.log('Gem type: ' ,gem_type);

    if(tier_now == 0 || tier_want == 0 || gem_type == 0){

        result.innerHTML = 'Fill all the required data!';

    } else if(tier_now == tier_want){

        result.innerHTML = 'Tier is equal to one you want!';
    
    }else if(tier_now > tier_want){

        result.innerHTML = 'Tier you want cannot be smaller than tier you have!';

    }else {
        
        for(let x = tier_now; x <= (tier_want - 1); x++){
            if(gem_type == 1){

                if(requir_rarity_off[x] == null){
                    resulter += 0;
                } else resulter += requir_rarity_off[x];
                console.log(`${x} -> ${resulter} (+ ${requir_rarity_off[x]})`);

            }else if(gem_type == 2){
                if(requir_rarity_deff[x] == null){
                    resulter += 0;
                } else resulter += requir_rarity_deff[x];
                console.log(`${x} -> ${resulter} (+ ${requir_rarity_deff[x]})`);
            }else alert('Unknown error!');
        }

        console.log(':3');
        result.innerHTML = `You will need <b>${resulter * n}</b> dust for upgrading <b>${n}</b> stones. Good luck with farm!`;
    }
    resulter = 0;
}*/

/*window.onload = () => {
    generateTables();
    generateResult();
}
window.onchange = () => { generateResult(); }

var table = getID('table-req');
var table2 = getID('table-melt');

function generateTables(){
    
    for(let i = 0; i < 17; i++){

        tr = [];
            tr[i] = crtEL('tr');
        appCH(table,tr[i]);

        td_rarity_01 = [];
            td_rarity_01[i] = crtEL('td');
            td_rarity_01[i].innerHTML = string_rarity[i];
        appCH(tr[i],td_rarity_01[i]);
        
        td_rarity_02 = [];
            td_rarity_02[i] = crtEL('td');
            td_rarity_02[i].setAttribute('id','td_center');
            td_rarity_02[i].innerHTML = requir_rarity_deff[i];
        appCH(tr[i],td_rarity_02[i]);
        
        td_rarity_03 = [];
            td_rarity_03[i] = crtEL('td');
            td_rarity_03[i].setAttribute('id','td_center');
            td_rarity_03[i].innerHTML = requir_rarity_off[i];
        appCH(tr[i],td_rarity_03[i]);

        tr2 = [];
            tr2[i] = crtEL('tr');
        appCH(table2,tr2[i]);

        td_melt_01 = [];
            td_melt_01[i] = crtEL('td');
            td_melt_01[i].innerHTML = string_rarity[i];
        appCH(tr2[i],td_melt_01[i]);
        
        td_melt_02 = [];
            td_melt_02[i] = crtEL('td');
            td_melt_02[i].setAttribute('id','td_center');
            td_melt_02[i].innerHTML = melt_rarity_deff[i];
        appCH(tr2[i],td_melt_02[i]);

        td_melt_03 = [];
            td_melt_03[i] = crtEL('td');
            td_melt_03[i].setAttribute('id','td_center');
            td_melt_03[i].innerHTML = melt_rarity_off[i];
        appCH(tr2[i],td_melt_03[i]);
    }

}

var result = getID('result');
var resulter = 0;
var n = 0;

*/