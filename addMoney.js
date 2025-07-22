document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInput = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number') ;

    if (isNaN(addMoneyInput)){
        alert('failed to add money')
        return;
    }
    if (pinNumber === 1234 ) {
        const balance = getTextFieldValueById ('account-balance');
        const newBalance = balance + addMoneyInput;
        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = ` Added: ${addMoneyInput} new balance: ${newBalance} `
        // need common file
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert ('failed');
    }

});