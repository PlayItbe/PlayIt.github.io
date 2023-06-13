document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
    // Get form values
    var naam = document.getElementById('naam').value;
    var email = document.getElementById('email').value;
    var bericht = document.getElementById('bericht').value;
  
    // Perform form validation
    if (naam === '' || email === '' || bericht === '') {
      alert('Vul alles in aub');
      return;
    }
  
    alert('Succesvol verzonden!');
  });