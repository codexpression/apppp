function handleSubmit() {
event.preventDefault();

  let realPassword = 'adeoye';
  let userPasscode = document.querySelector('#passcodebox');
  if (userPasscode.value.toLowerCase() == realPassword) {
    
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.preloader').style.display = 'block';
    setTimeout(function() {
      document.querySelector('.preloader').style.display = 'none';
      document.querySelector('.writeup').style.display = 'block';
    }, 4000)
  } else {
    document.querySelector('.msg').style.display = 'block';
  }
}
