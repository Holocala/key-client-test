const imageUri = "/src/images/";

window.onload = () => {
  const menuButton = document.getElementById("menuButton"),
      slide = document.getElementById("menuSlide"),
      closeButton = document.getElementById("closeButton"),
      image1 = document.getElementById("image1"),
      image2 = document.getElementById("image2"),
      image3 = document.getElementById("image3"),
      image4 = document.getElementById("image4"),
      image5 = document.getElementById("image5"),
      leftImage = document.getElementById("leftImage"),
      plus = document.getElementById("plus"),
      minus = document.getElementById("minus"),
      num = document.getElementById("num"),
      button = document.getElementById("button"),
      buttonH= document.getElementById("button-heart");

  button.onclick = ()=> {
    button.style.display = "flex";
  }
  buttonH.onclick = ()=> {
    buttonH.style.display = "flex"
  }
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
  image3.onclick = () => {
    leftImage.src = `${imageUri}3.png`;
  };
  image4.onclick = () => {
    leftImage.src = `${imageUri}4.png`;
  };
  image5.onclick = () => {
    leftImage.src = `${imageUri}port.png`;
  };

  let counter = 0;
  plus.addEventListener("click", () => {
    counter++;
    num.innerText = counter.toString();
  });
  minus.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      num.innerText = counter.toString();
    }
  });
};
