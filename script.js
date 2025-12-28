const INPUT = document.getElementById('input1');
const BTN = document.getElementById('btn1');
const FORMCONTAINER = document.getElementById('formcontainer');


const checkAge = () => {

    const number = INPUT.value;
    if( number >= 18){
        FORMCONTAINER.style.display ='block';
    }else{
        alert('You are blocked from Voting')
    }
    INPUT.value = '';
}

BTN.addEventListener('click', checkAge)


