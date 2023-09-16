//Recuperer les champs
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const photo = document.getElementById('photo');
//recuperer le bouton
const btn = document.querySelector('button');
//recuperer le span
const span = document.querySelector('span');


//Fonctions
function checkRequired(inputTab){
    inputTab.forEach(function(input){
        if(input.value.length == 0){
            error(input,'Le champs est requis');  
        }else{
            success(input);
        }
    });
}
//
function samePassword(input1,input2){
    if(input1.value != input2.value){
        error(input2,'Les deux mots de passes ne sont pas identiques');
    }
}
//
function checkLength(input,min,max){
    if(input.value.length < min){
        error(input,'Il faut au minimum '+min+' caracteres');
    }else if(input.value.length > max){
        error(input,'Il faut au maximum '+max+' caracteres');
    }else{
        success(input);
    }
}
//
function error(input,message='Error'){
    //Recuperer la div mere:
    const divParent = input.parentNode;
    input.style.border = '2px solid red';
    divParent.classList.remove('success');
    divParent.classList.add('error');
    //
    const small = divParent.querySelector('small');
    small.innerText = message;
}
//
function success(input){
    //Recuperer la div mere:
    const divParent = input.parentNode;
    input.style.border = '2px solid green';
    divParent.classList.add('success');
    divParent.classList.remove('error');
}

//Evenements
btn.addEventListener('click',function(){
    checkRequired([username,email,password,password2]);
    samePassword(password,password2);
    checkLength(username,3,15);
    checkLength(password,6,25);
});
//
photo.addEventListener('change',function(){
    const photo = document.getElementById('photo');
    const f = new FileReader();
    f.readAsDataURL(photo.files[0]);
    f.onloadend = function(event){
        const path = event.target.result;
        document.getElementById('img').setAttribute('src',path); //afficher l'image choisi
    }
})