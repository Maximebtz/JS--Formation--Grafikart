//  1

    // const wrapper = document.querySelector('.wrapper')

    // function canDrive(age, pays) {
    //     if(
    //         (age > 18 && pays === 'FR') ||
    //         (age > 16 && pays === 'US')
    //     ) {
    //         wrapper.textContent = "Go vibin', but drive safe !!"
    //     }else{
    //         wrapper.textContent = "NOOOP it's not for now bro !!!"
    //     }
    // }

    // console.log(canDrive(17, 'US'))


//  2 

    const wrapper = document.querySelector('.wrapper')


    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1)) 
    }

    const solution = getRandomInt(10)
    console.log(solution)
    
    function isRight(n) {
        return solution === n
    }

    function guess() {
        const number = prompt('Entrez un chiffre')
        return isRight(number)
    }

    for ( i = 0; i < 3; i++) {
        if(guess()) {
            console.log('Bien joué')
            break;
        } else if (i === 2) {
            console.log('Nop')
        }
    }

