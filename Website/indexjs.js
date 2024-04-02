document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");

  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const passwordStrength = calculatePasswordStrength(password);

    if (passwordStrength < 40) {
      passwordInput.setCustomValidity(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      passwordInput.setCustomValidity("");
    }
  });

  function calculatePasswordStrength(password) {
    // Calculate password strength here (you can use any method/library you prefer)
    // For simplicity, let's just calculate the length of the password
    return password.length;
  }
});
