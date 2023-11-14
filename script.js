const input = document.getElementById('password')
const icon = document.querySelector('.konumlandır')
const label = document.getElementById('label')


icon.addEventListener('click',function sifreGoster(){
    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type','text')
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    }else{
        input.setAttribute('type','password')
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }
})

input.addEventListener('focus',function labelOynat(){
    label.style.left = '3px'
    label.style.top = '-5px'
    label.style.backgroundColor='white'
})
input.addEventListener('focusout',function labelOynat(){
    if(!input.value.length > 0){
        label.style.left = '10px'
        label.style.top = '10px'
        label.style.backgroundColor='white'
    }
    
})