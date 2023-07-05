const imageUri = "/src/images/";

window.onload = () => {
  const menuButton = document.getElementById("menuButton");
  const slide = document.getElementById("menuSlide");
  const closeButton = document.getElementById("closeButton");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");
  const image4 = document.getElementById("image4");
  const image5 = document.getElementById("image5");
  const leftImage = document.getElementById("leftImage");
  menuButton.onclick = () => {
    slide.style.display = "flex";
  };
  closeButton.onclick = () => {
    slide.style.display = "none";
  };
  image1.onclick = () => {
    leftImage.src = `${imageUri}1.png`;
  };
  image2.onclick = () => {
    leftImage.src = `${imageUri}2.png`;
  };
};
