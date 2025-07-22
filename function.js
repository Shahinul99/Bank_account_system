
function getInputFieldValueById (id){
    const addMoneyInput = document.getElementById(id).value;
    const inputNumber = parseFloat(addMoneyInput);
    return inputNumber;

}
function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById (id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}