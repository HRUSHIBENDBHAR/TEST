document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const status = document.getElementById("login-status");

  if (username === "KAPILBENDBHAR" && password === "Kapil@123") {
    window.location.href = "kapil.html";
  } else if (username === "SAGARSHITOLE" && password === "Sagar@123") {
    window.location.href = "sagar.html";
  } else {
    status.textContent = "Invalid username or password!";
  }
});
