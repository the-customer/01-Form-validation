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
function validate(inputTab){
    inputTab.forEach(function(input){
        //Recuperer la div mere:
        const divParent = input.parentNode;
        if(input.value.length == 0){
            input.style.border = '2px solid red';
            //afficher le message d'erreur
            divParent.classList.remove('success');
            divParent.classList.add('error');
        }else{
            input.style.border = '2px solid green';
            //cacher le message d'erreur
            divParent.classList.add('success');
            divParent.classList.remove('error');
        }
    });
}

//Evenements
btn.addEventListener('click',function(){
    validate([username,email,password,password2]);
});