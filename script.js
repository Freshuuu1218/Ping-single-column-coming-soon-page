const email = document.querySelector('#email');
const button = document.querySelector('button');
const errorContainer = document.querySelector('label');

button.addEventListener('click',()=>{
  function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())){
    alert('We added your email address to our newsletter')
    input.style.border = '1px solid hsl(120, 85%, 62%)';
    input.style.opacity = '1';

  }
  else{
    input.style.border = '1px solid hsl(354, 100%, 66%';
    input.style.opacity = '1';
    errorContainer.innerHTML = 'Please provide a valid email address';
  }
}
checkEmail(email);
})




