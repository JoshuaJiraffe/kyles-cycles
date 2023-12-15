
  async function loginUser() {
    console.log("loginUser");
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    console.log("createUser");
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    console.log("infunction");
    try {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (response.ok) {
            localStorage.setItem('userName', username);
            window.location.href = 'index.html';
        } else {
            const body = await response.json();
            let errorMessage;

            if (response.status === 409) {
                // Username already exists
                errorMessage = '⚠ Error: Username is already taken.';
            } else if (response.status === 401 && body.msg === 'Unauthorized') {
                // Username doesn't exist or incorrect password
                errorMessage = '⚠ Error: Invalid username or password.';
            } else {
                // Other error
                errorMessage = `⚠ Error: ${body.msg}`;
            }

            // Display the error message (replace this with your own error-handling logic)
            alert(errorMessage);
        }
    } catch (error) {
        console.error('Unexpected error during authentication:', error);
    }
}


  async function getUser(username) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
