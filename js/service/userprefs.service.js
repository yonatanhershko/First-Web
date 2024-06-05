'user strict'


const STORGE_USER = 'UserPrefs'

function saveUser(user){
    saveToStorage(STORGE_USER, user)
}