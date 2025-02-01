// Simple example to simulate avatar change
const avatarEditIcon = document.getElementById("avatar-edit");
const avatarImg = document.getElementById("profile-avatar");

avatarEditIcon.addEventListener("click", () => {
  // In a real-world scenario, you'd open a file picker or similar
  // Here we just toggle between two placeholder images for demonstration
  if (avatarImg.src.includes("placeholder.com/90")) {
    avatarImg.src =
      "https://via.placeholder.com/90/8e5cd4/ffffff?text=New+Avatar";
  } else {
    avatarImg.src = "https://via.placeholder.com/90";
  }
});
