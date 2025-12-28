const USERNAME = document.getElementById('Username');
const PASSWORD = document.getElementById('password');
const BTN = document.getElementById('btn');

const loading = async () => {
    const  userInput = USERNAME.value;
    const  passInput = PASSWORD.value;
    if(userInput  ==='' && passInput === ''  ){
        alert('please input a Username and Password')
    }else if (userInput === '' && passInput !== ''){
        alert('Please enter a username')
    }else if (userInput !== '' && passInput === ''){
        alert('please enter a password')
    }else{
        alert('Logging in....');
        
        await delay (3000);

        alert ('Login Successful');
        
    }
    
}


const delay = (ms) => {
    return new Promise (resolve =>{
        setTimeout (resolve,ms);
    })
}


BTN.addEventListener('click', loading);