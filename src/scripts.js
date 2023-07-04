window.onload = () => {
  const menuButton = document.getElementById("menuButton");
  const slide = document.getElementById("menuSlide");
  const closeButton = document.getElementById("closeButton");
  menuButton.onclick = () => {
    slide.style.display = "flex";
  };
  closeButton.onclick = () => {
    slide.style.display = "none";
  };
};
