const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    var svgContent = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>'

    // First Name
    firstName.setAttribute('placeholder', '');
    firstName.style.backgroundImage = 'url("data:image/svg+xml;base64,' + btoa(svgContent) + '")';
    firstName.style.backgroundRepeat = 'no-repeat';
    firstName.style.backgroundPosition = 'right 20px center';

    // Last Name
    lastName.setAttribute('placeholder', '');
    lastName.style.backgroundImage = 'url("data:image/svg+xml;base64,' + btoa(svgContent) + '")';
    lastName.style.backgroundRepeat = 'no-repeat';
    lastName.style.backgroundPosition = 'right 20px center';

    // email
    email.setAttribute('placeholder', '');
    email.style.backgroundImage = 'url("data:image/svg+xml;base64,' + btoa(svgContent) + '")';
    email.style.backgroundRepeat = 'no-repeat';
    email.style.backgroundPosition = 'right 20px center';
    email.placeholder = "email@example.com"


    // password
    password.setAttribute('placeholder', '');
    password.style.backgroundImage = 'url("data:image/svg+xml;base64,' + btoa(svgContent) + '")';
    password.style.backgroundRepeat = 'no-repeat';
    password.style.backgroundPosition = 'right 20px center';


    
   
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = "";
    

    // First Name
    firstName.setAttribute('placeholder', '');
    firstName.style.backgroundImage = 'none';
    
    // Last Name
    lastName.setAttribute('placeholder', '');
    lastName.style.backgroundImage = 'none';
    

    // email
    email.setAttribute('placeholder', '');
    email.style.backgroundImage = 'none';
    email.placeholder = "email@example.com"


    // password
    password.setAttribute('placeholder', '');
    password.style.backgroundImage = 'none';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if (firstNameValue === '') {

        setError(firstName, 'First name cannot be empty')
         
        
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, "Last name cannot be empty")
    } else {
        setSuccess(lastName);
    }
    if (emailValue === '') {
        setError(email, "Email is required!")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Looks like this is not an email")
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, "Password cannot be empty")
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters")
    } else {
        setSuccess(password);
    }
    
}
