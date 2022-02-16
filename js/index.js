const submit = document.getElementById('submit');
const nick = document.getElementById('nick-name');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const form = document.querySelector('#form');


form.addEventListener('keydown', function(event) {
  if(event.keyCode == 13) {
     event.preventDefault();
  }
});


form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!nick.value) {
    nick.classList.add('invalid');
    alert('Поле имя не заполнено');
    return;
  }
  
  if(!phone.value) {
    phone.classList.add('invalid');
    alert('Поле телефона не заполнено');
    return;
  }

  if(!password.value){
    password.classList.add('invalid');
    alert('Введите пароль')
  }
  
  this.submit();
});


phone.onfocus = function() {
  if (this.classList.contains('invalid')) {

      this.classList.remove('invalid');
  }
};

nick.onfocus = function() {
  if (this.classList.contains('invalid')) {
   
    this.classList.remove('invalid');
  }
};

password.onfocus = function() {
  if (this.classList.contains('invalid')) {
   
    this.classList.remove('invalid');
  }
};

