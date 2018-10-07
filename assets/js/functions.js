document.addEventListener("DOMContentLoaded", () => {
  activeLink();
});

function activeLink() {
  const pathName = window.location.pathname.replace(/\//g, "");
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    const path = link.href.split("/").pop();
    path === pathName && link.classList.toggle("selected");
  });
}
