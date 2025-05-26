// Cek status login saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const username = localStorage.getItem("username");
  const authBtn = document.getElementById("auth-btn");

  if (authBtn) {
    if (isLoggedIn && username) {
      authBtn.innerHTML = `
        <a href="profile.html" class="btn" style="margin-top:8px; background-color:#BD0451; color:white;">
    Hi, ${username}
        </a>
      `;
    } else {
      authBtn.innerHTML = `
        <a href="login.html" class="btn btn-primary" style="margin-top:8px; color:white;">
          Login
        </a>
      `;
    }
  }
});
