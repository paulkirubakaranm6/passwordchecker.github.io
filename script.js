function checkPassword() {
  let password = document.getElementById("password").value;
  let strengthText = document.getElementById("strength");
  let feedback = document.getElementById("feedback");
  let bar = document.getElementById("strength-bar");

  let score = 0;
  let tips = [];

  if (password.length >= 8) score++;
  else tips.push("Min 8 chars");

  if (/[A-Z]/.test(password)) score++;
  else tips.push("Uppercase");

  if (/[a-z]/.test(password)) score++;
  else tips.push("Lowercase");

  if (/[0-9]/.test(password)) score++;
  else tips.push("Number");

  if (/[^A-Za-z0-9]/.test(password)) score++;
  else tips.push("Symbol");

  // Strength visuals
  if (score <= 2) {
    strengthText.innerText = "WEAK";
    strengthText.style.color = "red";
    bar.style.width = "30%";
    bar.style.background = "red";
  } else if (score <= 4) {
    strengthText.innerText = "MEDIUM";
    strengthText.style.color = "orange";
    bar.style.width = "70%";
    bar.style.background = "orange";
  } else {
    strengthText.innerText = "STRONG";
    strengthText.style.color = "#00ffcc";
    bar.style.width = "100%";
    bar.style.background = "#00ffcc";
  }

  feedback.innerText = tips.join(" | ");
}
