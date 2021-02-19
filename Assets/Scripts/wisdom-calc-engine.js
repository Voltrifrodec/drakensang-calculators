var wisdomLevelReq = [];
var result = getID('result');

window.onload = () => generateResult();
window.onchange = () => generateResult();

function generateResult(){
    console.clear();


    var currentLevel = parseInt(getID('level-wisdom').value);
    if(isNaN(currentLevel)) currentLevel = 0;

    var toNextLevel = parseInt(getID('progress-next-wisdom').value);
    if(isNaN(toNextLevel)) toNextLevel = 0;
    
    var diffLevel = 200 - currentLevel;
    console.log('Input values:\nCurrent level: ' + currentLevel + '\nLevels to 200: ' + diffLevel + '\nExp for lvl ' + (currentLevel + 1) + ': ' + toNextLevel + '/NaNX');

    for(let i = (currentLevel); i < diffLevel; i++){
        console.log('x levels to go!');
    }


    result.innerHTML = `${currentLevel}/200`;
    //?Nahradiť za let
    currentLevel = 0;
    diffLevel = 0;
    toNextLevel = 0;
}