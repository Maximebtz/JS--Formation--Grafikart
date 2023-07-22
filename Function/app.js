

const wrapper = document.querySelector('.wrapper')

function canDrive(age, pays) {
    if(
        (age > 18 && pays === 'FR') ||
        (age > 16 && pays === 'US')
    ) {
        wrapper.textContent = "Go vibin' !!"
    }else{
        wrapper.textContent = "NOOOp it's not for now bro !!!"
    }
}

console.log(canDrive(17, 'US'))