document.addEventListener("DOMContentLoaded", () => {
  const projectsButton = document.querySelector('a[href="projects.html"]');
  projectsButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "projects.html";
  });
});