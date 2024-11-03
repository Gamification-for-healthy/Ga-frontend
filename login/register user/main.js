// Replace with actual API endpoints
const LOGIN_API_URL = "https://example.com/api/login";
const REGISTER_API_URL = "https://example.com/api/register";

// Helper function to send form data to the specified API endpoint
async function submitForm(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const result = await response.json();
    alert(result.message || "Success!");
    window.location.href = "dashboard.html"; // Redirect after success, if applicable
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Event listener for login form submission
document.querySelector("form.login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.querySelector('input[name="username"]').value;
  const password = e.target.querySelector('input[name="password"]').value;

  const loginData = { username, password };
  submitForm(LOGIN_API_URL, loginData);
});

// Event listener for register form submission
document.querySelector("form.register-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.querySelector('input[name="username"]').value;
  const email = e.target.querySelector('input[name="email"]').value;
  const password = e.target.querySelector('input[name="password"]').value;
  const confirmPassword = e.target.querySelector(
    'input[name="confirmPassword"]'
  ).value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const registerData = { username, email, password };
  submitForm(REGISTER_API_URL, registerData);
});
