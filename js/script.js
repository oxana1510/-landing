(function() {
  'use strict';

  //mobile menu
  var toggles = document.querySelectorAll('.burger-menu');
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( 'click', function(e) {
      e.preventDefault();
      (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');
      var elMenu = document.querySelector('.menu');
       elMenu.classList.toggle('responsive');
    });
  }
  //open popup
  var openpopup = document.getElementsByClassName('openpopup');
  var popup = document.querySelector('.popup');

  for (var i = 0; i < openpopup.length; i++) {
    openpopup[i].addEventListener('click', function() {
      popup.style.display = 'block';
    });
  }

  document.addEventListener('mousedown', function(e) {
    if(e.target.closest('.popup__inner') === null) {
        popup.style.display = 'none';
    }
  });

})();

 //form validation
 function validate(form_id,email) {
  var emailerror = document.querySelector('.email');
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;

  var label = document.createElement('label');
      label.className = "error";
      label.innerHTML = "This field is required";

  var error = document.querySelector('.error')
   
  if(reg.test(address) == false) {

    if(error == null) {
      emailerror.after(label);
    }
    return false;
  }
}
