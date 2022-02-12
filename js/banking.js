
// this function use deposit and withdraw input amount called
function inputValue(inputId){
    const allInput = document.getElementById(inputId);
    const allInputText = allInput.value;
    const allInputNum = parseFloat(allInputText);
    allInput.value = '';
    return allInputNum; 
};

// this function use deposit and withdraw amount id callded  
function totalMoney(blanceId){
    const totalBlance = document.getElementById(blanceId);
    const totalBlanceText = totalBlance.innerText;
    const totalBlanceAmount = parseFloat(totalBlanceText);
    return totalBlanceAmount;
};

// this function use only deposit and withdraw input total calculation
function showValue(windowId , inputAmount){
    const showWindowText = document.getElementById(windowId);
    const windowConvertNumber = totalMoney(windowId)

    // total blance
    const totalBlance = windowConvertNumber + inputAmount 
    showWindowText.innerText = totalBlance;

};

// this function use total balance calculation with diposit and withdraw input Amount
function total(totalBlanceId, inputAmount, isAdd){
    const totalBlance = document.getElementById(totalBlanceId);
    const totalBlanceAmountt = totalMoney(totalBlanceId);

    if(isAdd == true){
    const total = totalBlanceAmountt + inputAmount;
    totalBlance.innerText = total;
    }

    else{
        const total = totalBlanceAmountt - inputAmount;
        totalBlance.innerText = total; 
    }
};

// deposit calculation
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = inputValue('diposti-input');

    if(depositInput <= 0){
        alert('Do not accept negative number.');
    }
    else if(depositInput > 0){
        // total deposit blance
        showValue('ShowDeposit', depositInput);
        // totla blance
        total('ShowBlance' ,depositInput, true);
    }
    else{
        alert('Do not accept string value.')
    }
});

// withdraw calculation
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = inputValue('withdraw-input');
    const totalBlanceMoney = totalMoney('ShowBlance');

    if(totalBlanceMoney < withdrawInput){
        alert('sorry your balance is low.')
    }

    else if(withdrawInput <= 0){
        alert('Do not accept negative number.');
    }

    else if(withdrawInput > 0){
        showValue('ShowWithdraw', withdrawInput);

        // total
        total('ShowBlance', withdrawInput, false)
    }

    else{
        alert('Do not accept string value.')
    }
});