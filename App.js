// selectors
let date = new Date();
const descriptionInput = document.querySelector('#description-text');

const spendContainer = document.querySelector('#spend-container');
const incomeContainer = document.querySelector('#income-container');

const dataListSpend = document.querySelector('#data-list-spend');
const dataListIncome = document.querySelector('#data-list-income');

const amountInput = document.querySelector('#amount');
const dataTypeInput = document.querySelector('#type-data-list');
const submitBtn = document.querySelector('#submit-btn');

const storagedescriptionInput = localStorage.getItem('descriptionInputValue');
const storageAmountInput = localStorage.getItem('amountInputValue');
const stroageDataTypeInput = localStorage.getItem('dataTypeInputValue')

//functions
function getDay(){
    let day = date.getDay();
    let dayPrintOut = document.querySelector('span');
    if(day === 0){
        dayPrintOut.innerHTML = `Sunday!`;
    }else if( day === 1){
        dayPrintOut.innerHTML = `Monday!`;
    }else if( day === 2){
        dayPrintOut.innerHTML = `Tuesday!`;
    }else if( day === 3){
        dayPrintOut.innerHTML = `Wednesday!`;
    }else if( day === 4){
        dayPrintOut.innerHTML = `Thursday!`;
    }else if( day === 5){
        dayPrintOut.innerHTML = `Friday!`;
    }else {
        dayPrintOut.innerHTML = `Saturday!`;
    }
}

function tryMe(event){
    // event.preventDefault();
    localStorage.setItem('dataTypeInputValue', dataTypeInput.value )
    localStorage.setItem('descriptionInputValue', descriptionInput.value);
    localStorage.setItem('amountInputValue', amountInput.value);
    
    const listItem = document.createElement("li");
    listItem.innerText = descriptionInput.value + `: $` + amountInput.value;
    
    if(dataTypeInput.value === 'spend'){ 
        if( descriptionInput.value === '' || amountInput.value === ''){
            alert('Missing required fields');
            return;
        }else {
            dataListSpend .appendChild(listItem);
        }
        
    } else if (dataTypeInput.value === 'income'){
        if( descriptionInput.value === '' || amountInput.value === ''){
            alert('Missing required fields');
            return;
        }else{
            dataListIncome.appendChild(listItem);
        }  
    } else if ( dataTypeInput.value === ''){
        if(descriptionInput.value === '' || amountInput.value === ''){
            alert('Missing required fields')
            return;
        }
        alert('You miss one required field')
    }

    event.preventDefault();
}



// printout date
document.getElementById('date').innerHTML = date.toDateString();
getDay();
// submit button
submitBtn.addEventListener("click", tryMe);
