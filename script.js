function checkPassword() {
  let password = document.getElementById("password").value;
  let strengthText = document.getElementById("strength");
  let feedback = document.getElementById("feedback");
  let bar = document.getElementById("strength-bar");
  let crackTime = document.getElementById("crack-time");

  let score = 0;
  let tips = [];

  // Rules
  if (password.length >= 8) score++;
  else tips.push("Use at least 8 characters");

  if (/[A-Z]/.test(password)) score++;
  else tips.push("Add uppercase letters");

  if (/[a-z]/.test(password)) score++;
  else tips.push("Add lowercase letters");

  if (/[0-9]/.test(password)) score++;
  else tips.push("Include numbers");

  if (/[^A-Za-z0-9]/.test(password)) score++;
  else tips.push("Add symbols (!@#$)");

  // Strength bar
  if (score <= 2) {
    strengthText.innerText = "WEAK ❌";
    strengthText.style.color = "red";
    bar.style.width = "30%";
    bar.style.background = "red";
  } else if (score <= 4) {
    strengthText.innerText = "MEDIUM ⚠️";
    strengthText.style.color = "orange";
    bar.style.width = "70%";
    bar.style.background = "orange";
  } else {
    strengthText.innerText = "STRONG ✅";
    strengthText.style.color = "#00ffcc";
    bar.style.width = "100%";
    bar.style.background = "#00ffcc";
  }

  feedback.innerText = tips.join(" | ");

  // Estimate crack time (basic formula)
  let entropy = password.length * 4 + (/[A-Z]/.test(password) ? 2 : 0) +
                (/[0-9]/.test(password) ? 2 : 0) +
                (/[^A-Za-z0-9]/.test(password) ? 2 : 0);

  let guesses = Math.pow(2, entropy);
  let seconds = guesses / 1000000000; // assuming 1 billion guesses per second

  // Display crack time in human-readable format
  if (seconds < 60) crackTime.innerText = `Estimated crack time: ${Math.floor(seconds)} seconds`;
  else if (seconds < 3600) crackTime.innerText = `Estimated crack time: ${Math.floor(seconds/60)} minutes`;
  else if (seconds < 86400) crackTime.innerText = `Estimated crack time: ${Math.floor(seconds/3600)} hours`;
  else if (seconds < 31536000) crackTime.innerText = `Estimated crack time: ${Math.floor(seconds/86400)} days`;
  else crackTime.innerText = `Estimated crack time: ${Math.floor(seconds/31536000)} years`;
}
