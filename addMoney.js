document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value
    // console.log( addMoneyInput , pinNumber);


    if (pinNumber === '1234') {
        console.log('add money to your account');
        const balance = document.getElementById('account-balance').innerText
        console.log(balance)

        const addMoneyNumber = parseFloat(addMoneyInput)
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('failed please try again later');
    }

})