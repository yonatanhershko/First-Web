

'use strict'

const user = {
    email : '',
    txtColor : '',
    bgColor : '',
    Age : '',
    birthDate: '',
    birthTime: ''
    }

function onShowAge(newVal) {
    document.querySelector('#sAge').innerHTML = newVal
}

function onSubmit(ev) {
    ev.preventDefault()
    const { email, textColor, bgColor, dob, tob} = ev.target
    user.email = email.value
    user.email = email.value;
    user.txtColor = textColor.value;
    user.bgColor = bgColor.value;
    user.birthDate = dob.value;
    user.Age = age.value;
    user.birthTime = tob.value;
    
    console.log(user);
    _saveData()
}





function _saveData() {
    saveToStorage('User Date', user)
}