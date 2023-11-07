
  const loginForm = document.getElementById('login-form');
  const passwordForm = document.getElementById('password-form');
  const connection_box = document.getElementById('username_box');
  const password_box = document.getElementById('password_box');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const connection = document.getElementById('username').value;
  
    if (connection === '192.168.69.431'){
      password_box.classList.remove('hide')
      connection_box.classList.add('hide');
    }
    else{
      window.open("https://" + connection, "_blank");
    }
  
    
  });
  passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    if (password === '8361') {
      console.log("amog");
      window.location.assign("./sus.html"); 
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  });