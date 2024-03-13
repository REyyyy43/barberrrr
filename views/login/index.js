const form = document.querySelector('#form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const formBtn = document.querySelector('#form-btn');
const errorText = document.querySelector('#error-text');
//Rgex validation

const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// Validacion
let emailValidation = false;
let passwordValidation = false;

const validation = (input , regexValidation) => {
    formBtn.disabled = !emailValidation || !passwordValidation;

    if (input.value === '') {
        input.classList.remove('outline-red-500', 'outline-2' , 'outline' );
        input.classList.remove('outline-green-500' , 'outline-2' , 'outline');
        input.classList.add('focus:outline-cyan-950');
    } else if (regexValidation) {
        input.classList.remove('focus:outline-cyan-950');
        input.classList.add('outline-green-500'  , 'outline-2' , 'outline');
    } else if (!regexValidation){
        input.classList.remove('focus:outline-cyan-950');
        input.classList.remove('outline-green-500' , 'outline-2' , 'outline' );
        input.classList.add('outline-red-500' , 'outline-2' , 'outline');
    }
};
// EVENTS

emailInput.addEventListener('input', e => {
    emailValidation = EMAIL_VALIDATION.test(e.target.value);
    validation(emailInput, emailValidation);
});

passwordInput.addEventListener('input', e => {
    passwordValidation = PASSWORD_VALIDATION.test(e.target.value);
    validation(passwordInput, passwordValidation);
});


form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const user = {
            email: emailInput.value,
            password: passwordInput.value,
        };
        await axios.post('/api/login', user);
        window.location.pathname = `/ABarberP/`
    } catch (error) {
       console.log(error); 
       errorText.innerHTML = error.response.data.error;
    }
});