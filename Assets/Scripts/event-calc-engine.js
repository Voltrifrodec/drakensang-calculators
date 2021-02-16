var diffProgress = [103,189,291,501,810,1360,2235];
var progressBarsStatic = [2560,4914,3480,2456,2456,3070]; //18.936 dokopy

var result = getID('result');
var calculator = getID('calc-generator');


window.onload = () => {
    generateOption();
    // generateResultFromOption();
}
window.onchange = () => generateOption();

function generateOption(){
    var selection = parseInt(getID('event-type').value);

    switch(selection){
        case 0:
        {
            console.clear();
            console.log('Selected Default with index ' + selection);
            result.innerHTML = '<b style="color:red"> Select event type!</b>';
            break;
        }
        case 1:
        {
            console.clear();
            console.log('Selected Sargon event with index ' + selection);
            
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