
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