document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const payload = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      terms: document.querySelector('input[name="terms"]').checked,
    };
    fetch('/user/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiToken
      },
      body: JSON.stringify(payload),
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong with the submission.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Parsed response:', data); 
        alert('Success:'+data.message); 
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error: ' + error.message);
      });
  });
  