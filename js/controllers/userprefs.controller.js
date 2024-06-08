

'use strict'


function onShowAge(newVal) {
    document.querySelector('#Age').innerHTML = newVal
}




function onSubmit(ev) {
    ev.preventDefault()
    const { email, textColor, bgColor,age, dob, tob } = ev.target


    const user = {
        email:email.value,
        textColor:textColor.value,
        bgColor:bgColor.value,
        age:age.value,
        birthDate: dob.value,
        birthTime : tob.value,
    }

    // user.email = email.value
    // user.textColor = textColor.value;
    // user.bgColor = bgColor.value;
    // user.birthDate = dob.value;
    // user.age = age.value;
    // user.birthTime = tob.value;

    console.log(user);
    saveUser(user)
}


