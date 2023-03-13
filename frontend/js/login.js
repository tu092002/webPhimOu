const form = document.getElementById('my-form');
const url = 'http://127.0.0.1:5500/frontend/login.html';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const data = new FormData(form);

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
