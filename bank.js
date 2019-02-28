const lowBalanceLimit = 300;

window.onload = function() {
    let input = '';
    let balance = 0;
    let amount = 0;

    while (input !== 'q') {
        input = prompt('Welcome to the bank! Enter your choice: B for Balance. W for Withdrawl. D for Deposit. Q for Quit.')

        switch (input) {
            case 'd':
                amount = parseInt(prompt('How much would you like to deposit?'));
                balance += deposit(amount);
                break;

            case 'w':
                amount = parseInt(prompt('How much would you like to withdrawl?'));
                balance -= withdrawl(amount, balance);
                break;

            case 'q':
                alert('You have quit the program. Have a nice day!');
                break;

            case 'b':
                showBankBalance(balance);
                break;

            default:
                alert('Sorry, please enter a new choice.');

        }

    }
}


function showBankBalance(balance) {
    if (balance < lowBalanceLimit) {
        alert('Low Balance. You only have $' + balance);
    } else {
        alert('Your balance is $' + balance);
    }
}

function deposit(depositedAmount) {
    if (depositedAmount > 50000) {
        alert('Please try again. Make a deposit less than $50,000.');
        depositedAmount = 0;
    } else {
        alert('You have deposited $' + depositedAmount);
    }
    return depositedAmount;
}

function withdrawl(withdrawnAmount, balance) {
    if (balance < withdrawnAmount) {
        alert('You cannot withdraw more than you have in you account.');
        withdrawnAmount = 0;
    } else if ((balance - withdrawnAmount) < lowBalanceLimit) {
        let selectOption = confirm('By withdrawing $' + withdrawnAmount + ' you will only have $' + (balance - withdrawnAmount) + '. Do you want to proceed?');
        if (!selectOption) withdrawnAmount = 0;
    } else {
        alert('Your have withdrawn $' + withdrawnAmount);
    }
    return withdrawnAmount;

}
