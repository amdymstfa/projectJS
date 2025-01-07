const blueButton = document.getElementById('color-button-blue'); 
const header = document.querySelector('header') ;

blueButton.addEventListener('click', ()=>{
    header.classList.add('blue-background', 'text-white');
});