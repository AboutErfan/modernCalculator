
let displayMonitor = document.querySelector('.calculatorDisplay>h1');
let list = document.querySelectorAll('.showDisplay');

function showDisplay(event)
{
    const key = event.target.innerText;
    if (displayMonitor.innerText == 0)
    {
        return displayMonitor.innerText = key;
    }
    else
    {
        return displayMonitor.innerText += key;
    }
}
function calculate()
{
    let result = displayMonitor.innerText;
    displayMonitor.innerText = eval(result);
}
function clearAll()
{
    displayMonitor.innerText = 0;
}
function clearLast()
{
    let displayBox = displayMonitor.innerText;
    if(displayBox.length === 1)
    {
        displayMonitor.innerText = 0;
    } else{
        displayMonitor.innerText = displayBox.substring(0,displayBox.length -1);
    }
}
document.querySelector('.equalKey').addEventListener('click',calculate);
document.querySelector('.clearAll').addEventListener('click',clearAll);
document.querySelector('.clearLast').addEventListener('click',clearLast);
list.forEach((item)=>{
    item.addEventListener('click',showDisplay)
})