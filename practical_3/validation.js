function setupRegistrationValidation() {
  const form = document.getElementById("registerForm");
  const msg = document.getElementById("regMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    const username = form.regUsername;
    const email = form.regEmail;
    const password = form.regPassword;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (username.value.trim() === "") {
      username.classList.add("is-invalid");
      valid = false;
    } else username.classList.remove("is-invalid");

    if (!emailPattern.test(email.value)) {
      email.classList.add("is-invalid");
      valid = false;
    } else email.classList.remove("is-invalid");

    if (password.value.length < 6) {
      password.classList.add("is-invalid");
      valid = false;
    } else password.classList.remove("is-invalid");

    if (valid) {
      msg.textContent = "✅ Registration successful!";
      msg.className = "text-success fw-bold";
      form.reset();
    } else {
      msg.textContent = "⚠️ Please correct the highlighted fields.";
      msg.className = "text-warning fw-bold";
    }
  });
}

function setupLoginValidation() {
  const form = document.getElementById("loginForm");
  const msg = document.getElementById("loginMessage");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    const email = form.loginEmail;
    const password = form.loginPassword;

    if (!emailPattern.test(email.value)) {
      email.classList.add("is-invalid");
      valid = false;
    } else email.classList.remove("is-invalid");

    if (password.value.trim() === "") {
      password.classList.add("is-invalid");
      valid = false;
    } else password.classList.remove("is-invalid");

    if (valid) {
      msg.textContent = "🎉 Login successful!";
      msg.className = "text-success fw-bold";
      form.reset();
    } else {
      msg.textContent = "⚠️ Invalid credentials. Try again.";
      msg.className = "text-warning fw-bold";
    }
  });
}
