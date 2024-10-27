fetch('/login', {
    method: 'POST',
    body: formData
})
.then(response => {
    console.log(response); // Log the entire response object
    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.text();
})
