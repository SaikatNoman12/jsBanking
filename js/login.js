const buttonSubmit = document.getElementById('submit-button')

function button(){
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    if((emailInput.value == 'bapErBank@gmail.com') && (passwordInput.value == 'bapErBank')){
        window.location.href = 'banking.html';
    }
    else{
        alert('write this email and password.\n \nemail: bapErBank@gmail.com\n\npassword: bapErBank\n' )
    }
    emailInput.value = '';
    passwordInput.value = '';
}

buttonSubmit.addEventListener('click', function(){
    button();
});


