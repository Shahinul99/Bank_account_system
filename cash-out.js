document.getElementById('btn-cash-out').addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if (isNaN(cashOut)) {
        alert('failed to cash out')
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        if(cashOut > balance){
            alert('you do not have enough balance')
            return;
        }
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2x1 font-bold "> Cash Out </h4>
        <p>${cashOut} Money Withdraw ${newBalance}</p>

        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('no money at this time')
    }
})