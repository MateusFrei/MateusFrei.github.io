
function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    var valid= regex.test(email);

   return valid ? alert('Email digitado é válido'): alert('Email digitado é inválido')
  }
