function toggleLoginSection() {
    const loginSection = document.getElementById("login");
    if (loginSection.style.display === "none" || loginSection.style.display === "") {
      loginSection.style.display = "block";
    } else {
      loginSection.style.display = "none";
    }
  }
  