// @ts-check
/// <reference lib="dom" />




//display number default
const numberElement = document.getElementById('show-number');
const numberDisplayDefault = '?'

if(numberElement)
{
    numberElement.textContent = numberDisplayDefault;
}



//store user input data
const inputElement = document.getElementById('input');
const notificationElement = document.getElementById('notification');
const boldElement = document.getElementsByClassName('use-bold');

let inputData = -0.001;
inputElement?.addEventListener('input', function(e)
{
    const value = /** @type {HTMLInputElement} */ (e.target).value;
    inputData = parseInt(value);
});




// determines if user is winning or not via button
const buttonElement = document.getElementById('execute-button');

buttonElement?.addEventListener('click', isUserWinning)

function isUserWinning()
{
    const getRandomNum = Math.floor(Math.random() * 10);
    const isInRange = inputData  < 10 && inputData  >= 0;
    const inputIsNaN = Number.isNaN(inputData);
    const isEmpty = inputData === -0.001;

    // Print error messages for the user if input number is out of range ot not typed
    if((isEmpty || inputIsNaN) && notificationElement && boldElement)
    {

        notificationElement.style.color = 'red';
        notificationElement.innerHTML = 
            `You need to type a number between 0 and 9 before pressing <span class="use-bold">Guess!</span>`;
        notificationElement.style.fontWeight = '300';
            
        /** @type {HTMLElement} */ (boldElement[0]).style.color = 'red';
        return;
        
    }
    else if(!isInRange && notificationElement && boldElement)
    {
        notificationElement
        notificationElement.style.color = 'red';
        notificationElement.innerHTML = 
            `Your number is <span class="use-bold">out of Range!</span> 
                Please use a number between <span class="use-bold"> 0 and 9</span>.`;
        notificationElement.style.fontWeight = '300';

        /** @type {HTMLElement} */ (boldElement[0]).style.color = 'red';
        /** @type {HTMLElement} */ (boldElement[1]).style.color = 'red';  
        return; 
    }
    else
    {
        console.log('Error pls check if statement')
    }


    //determines if the user won or not
    const distance = Math.abs(getRandomNum - inputData);
    const isPCWinning = distance < 2;

    if(isPCWinning && numberElement && notificationElement)
    {
        numberElement.textContent = `${getRandomNum}`;
        notificationElement.textContent = 'You won!';
        notificationElement.style.fontWeight = '700';
        notificationElement.style.color = 'green'
    }
    else if(!isPCWinning && numberElement && notificationElement)
    {
        numberElement.textContent = numberDisplayDefault;
        notificationElement.textContent = 'You lost. Try Again';
        notificationElement.style.fontWeight = '700'
        notificationElement.style.color = 'red';
    }

}