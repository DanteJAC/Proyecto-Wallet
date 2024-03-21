$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    // Verificar las credenciales
    if (username === 'admin' && password === '12345') {
      // Credenciales válidas, redirigir a la pantalla de wallet
      window.location.href = 'Menu.html';
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
    }
  });
});





  
  