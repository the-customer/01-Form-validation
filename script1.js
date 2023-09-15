// ici on met le javascript
// alert('Bonsoir'); 
// console.log('Bonsoir depuis la console');
//Variable et constants
// var division = document.getElementById('test')
// const division = document.getElementById('test')
// division  = 12;
// console.log('ca marche')

// const tab = [16,2,3,445,6,4,345,4];

// // console.table(tab);

// tab.forEach( function(val){
//     console.log(val)
// });






//Recuperer les champs
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//recuperer le bouton
const btn = document.querySelector('button');
//recuperer le span
const span = document.querySelector('span');

//Fonctions
function error(input){
    input.style.border = '2px solid red';
}

function success(input){
    input.style.border = '2px solid green';
}


//Evenements
btn.addEventListener('click',function(){
    if(username.value.length == 0){
        error(username);
    }else{
        success(username);
    }
    //
    if(email.value.length == 0){
        error(email);
    }else{
        success(email);
    }
    //
    if(password.value.length == 0){
        error(password);
    }else{
        success(password);
    }
    //
    if(password2.value.length == 0){
        error(password2);
    }else{
        success(password2);
    }
});