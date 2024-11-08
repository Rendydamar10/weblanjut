const animationBoxes = document.querySelectorAll(".animasitext");

const checkAnimationBox = (box) => {
  const boxTop = box.getBoundingClientRect().top;
  return boxTop < window.innerHeight;
};

const animate = () => {
  animationBoxes.forEach((box) => {
    if (checkAnimationBox(box)) {
      box.classList.add("fade-up");
    } else {
      box.classList.remove("fade-up");
    }
  });
};

window.addEventListener("scroll", animate);
animate();
