document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInput = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number') ;

    if (pinNumber === 1234 ) {
        const balance = getTextFieldValueById ('account-balance');
        const newBalance = balance + addMoneyInput;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert ('failed');
    }

});