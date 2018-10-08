document.addEventListener("DOMContentLoaded", () => {
  activeLink();
});

function activeLink() {
  const pathName = window.location.pathname;
  document.querySelector(`a[href='${pathName}']`).classList.toggle("selected");
}
