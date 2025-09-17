function validateName() {
    let fName = document.forms["application"]["FirstName"].value
    if (fName == "") {
        alert("Please Enter your name");
        return false
    }
}

    function validateAge() {
        let age = document.forms["application"]["Age"].value
        if (age < 21) {
            alert("Sorry youngin please apply when you are 21")
            return false;
        }
        if (age > 99) {
            alert("It's time to hang it up pops")
            return false;
        }
    }
    function validatePhoneNumber() {
        let phoneNumber = document.forms["application"]["PhoneNumber"].value
        const cleanedNumber = phoneNumber.replace(/\D/g, '');
        const regex1 = /^\d{10}$/;
        if (regex1.test(cleanedNumber) === false) {
            alert("invalid phone number")
        }
    }
    // function validatePassword() {
    //     let passwd = document.forms["application"]["Password"].value
    //     const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/`~-])[A-Za-z\d!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/`~-]{8,}$/;
    //     if (regex2.test(passwd) === false) {
    //         alert("Must be at least 8 characters long.\n" +
    //             "Have at least one uppercase letter.\n" +
    //             "Have at least one lowercase letter.\n" +
    //             "Have at least one digit.\n" +
    //             "Have at least one special character ")
    //     }
    // }


    const textarea = document.getElementById("TextArea");
    const charCount = document.getElementById("charCount");
    const maxLength = textarea.getAttribute('maxlength');

    textarea.addEventListener('input', () =>{
        const currentLength = textarea.value.length;
        const remaining = maxLength - currentLength;
        charCount.textContent = remaining;

        if (remaining <= 0){
            textarea.classList.add('limit-reached');
        } else {
            textarea.classList.remove('limit-reached');
        }
    })




const myForm = document.getElementById('application');

if (myForm) {
    myForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(myForm);

        for (const [name, value] of formData.entries()) {
            console.log(`Name: ${name}, Value: ${value}`);
        }
    });

}
