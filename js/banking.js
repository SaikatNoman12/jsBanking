
// this function use deposit and withdraw input amount called
function inputValue(inputId){
    const allInput = document.getElementById(inputId);
    const allInputText = allInput.value;
    const allInputNum = parseFloat(allInputText);
    allInput.value = '';
    return allInputNum; 
};

