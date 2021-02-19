var difficultyString = [null,'Normal','Painful','Excruciating','Fatal','Infernal','Merciless','Bloodshed'];
var diffProgressSargon = [0,103,189,291,501,810,1360,2235];
var progressBarsStaticSargon = [2560,4914,3480,2456,2456,3070]; //18.936 dokopy
var progressBarSargonSum = 18936;
var progressBarSargonAttire = 15149; //15148.8
var result = getID('result');
var attireResult = getID('attire-result');
var calculator = getID('calc-generator');

var resultDiff = 0;
window.onload = () => {
    generateOption();
    // generateResultFromOption();
}
window.onchange = () => generateOption();

function generateOption(){
    var selection = parseInt(getID('event-type').value);
    var difficulty = parseInt(getID('difficulty').value);
    var progress = parseInt(getID('progressNow').value);
    switch(selection){
        case 0:
        {
            console.clear();
            console.log('Selected Default with index ' + selection);
            result.innerHTML = '<b style="color:red"> Select event type!</b>';
            attireResult.innerHTML = '<b style="color:red">X</b>';
            break;
        }
        case 1:
        {
            console.clear();
            console.log('Selected Sargon event with index ' + selection);
            if(difficulty == 0){
                console.log('Difficulty error!');
                result.innerHTML = '<b style="color:red">Select difficulty!</b>';
                attireResult.innerHTML = '<b style="color:red">X</b>';
            }else if(difficulty!=0 && progress < 0){
                console.log('Numeric error!');
                result.innerHTML = '<b style="color:red">Enter real number!</b>';
                attireResult.innerHTML = '<b style="color:red">X</b>';
            }else if(progress >= progressBarSargonSum){
                result.innerHTML = '<b style="color:red">You already have enough progress!</b>';
            }else{
                console.log('Generating result..\nDifficulty: '+ difficulty + '\nProgress now: ' + progress);
                // for(let i = 0; i <= progressBarsStaticSargon; i++){
                    //console.log('i[' + i + '] -> ' + progressBarsStaticSargon[i]);
                var differenceProg = progressBarSargonSum - progress;
                var differenceProgAttire = progressBarSargonSum - progress; 
                resultDiff = Math.ceil(differenceProg / diffProgressSargon[difficulty]);
                // }
                resultDiffAttire = Math.ceil(Math.ceil(differenceProg / diffProgressSargon[difficulty])/100 * 80);
                result.innerHTML = `You will need to go <b style="color: orange">${numFormatDE(resultDiff)}</b> times on <b style="color: orange">${difficultyString[difficulty]}</b> to finish event (you need <b style="color: orange">${numFormatDE(differenceProg)}</b> more progress). You need ${numFormatDE(resultDiff * 10)} coffee beans for finish event.`;
                attireResult.innerHTML = `With attire (+20% progress): <b style="color: orange">${numFormatDE(resultDiffAttire)}</b> times on <b style="color: orange">${difficultyString[difficulty]}</b> to finish event (you need <b style="color: orange">${numFormatDE(differenceProgAttire)}</b> more progress). You need ${numFormatDE(resultDiffAttire * 10)} coffee beans for finish event.`;
                
                resultDiff = 0;
            }
            break;
        }
        default:
        {
            console.clear();
            console.log('Uknown error! Contact us on discord:\nInvite link: https://discord.gg/4nEFV6vrfx');
            break;
        }
    }
}