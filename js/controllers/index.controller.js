


function onInit() {
    const user =  loadFromStorage(STORGE_USER)
    console.log(user)// 
    // if (loadFromStorage (STORGE_USER, user)  ===  null ) return
   const elBody = document.querySelector('body') 
   elBody.style.color = user.textColor
   elBody.style.backgroundColor = user.bgColor
}
