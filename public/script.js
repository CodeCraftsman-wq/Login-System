document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Fade-in effect on load
  document.body.classList.add("animate__animated", "animate__fadeIn");

  // Button bounce when clicked
  form.addEventListener("submit", (e) => {
    const btn = form.querySelector("button");
    btn.classList.add("animate__animated", "animate__pulse");
    setTimeout(() => btn.classList.remove("animate__pulse"), 1000);
  });
});
