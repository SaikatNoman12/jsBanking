
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

