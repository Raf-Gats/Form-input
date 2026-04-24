console.log("script loaded");

/* =========================
   SHOW / HIDE SECTIONS
========================= */

function hideAll() {
  document.getElementById("signupBox").classList.add("hidden");
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("forgotBox").classList.add("hidden");
  document.getElementById("dashboard").classList.add("hidden");
}

function showLogin() {
  hideAll();
  document.getElementById("loginBox").classList.remove("hidden");
}

function showSignup() {
  hideAll();
  document.getElementById("signupBox").classList.remove("hidden");
}

function showForgot() {
  hideAll();
  document.getElementById("forgotBox").classList.remove("hidden");
}

/* =========================
   SIGN UP
========================= */

function signup() {
  let user = document.getElementById("su_username");
  let pass = document.getElementById("su_password");
  let agree = document.getElementById("agree");

  // reset error styles
  user.classList.remove("error");
  pass.classList.remove("error");

  if (user.value.trim() === "" || pass.value.trim() === "") {
    alert("Fill all fields");
    return;
  }

  if (!agree.checked) {
    alert("You must agree to Terms & Privacy Policy");
    return;
  }

  localStorage.setItem("user", user.value);
  localStorage.setItem("pass", pass.value);

  alert("Account created!");

  user.value = "";
  pass.value = "";
  agree.checked = false;

  showLogin();
}

/* =========================
   PASSWORD VALIDATION
========================= */

function validatePassword() {
  const pass = document.getElementById("li_password");
  const errorText = document.getElementById("passwordError");

  pass.classList.remove("error");
  errorText.textContent = "";

  if (pass.value.trim() === "") {
    pass.classList.add("error");
    errorText.textContent = "Password cannot be empty";
    return false;
  }

  if (pass.value.length < 6) {
    pass.classList.add("error");
    errorText.textContent = "Password must be at least 6 characters";
    return false;
  }

  return true;
}

/* =========================
   LOGIN
========================= */

function login() {
  if (!validatePassword()) return;

  let user = document.getElementById("li_username").value;
  let pass = document.getElementById("li_password").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    document.getElementById("userDisplay").innerText = user;

    hideAll();
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    alert("Invalid credentials");
  }
}

/* =========================
   LOGOUT
========================= */

function logout() {
  showLogin();
}

/* =========================
   TOGGLE PASSWORD
========================= */

function togglePassword(id, el) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    el.textContent = "Hide";
  } else {
    input.type = "password";
    el.textContent = "Show";
  }
}

/* =========================
   FORGOT PASSWORD
========================= */

function sendReset() {
  const input = document.getElementById("resetEmail");

  input.classList.remove("error");

  if (input.value.trim() === "") {
    input.classList.add("error");
    return;
  }

  alert("Reset link sent (demo only)");
}