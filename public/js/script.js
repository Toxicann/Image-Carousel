// arranging images to left of one another
imgArray.forEach((image, i) => {
  image.style.left = `${imgWidth * i}px`;
});

// moves the slide as per input
function moveSlide(currentSlide, targetSlide) {
  const moveDistance = targetSlide.style.left;

  imgArray.forEach((image) => {
    image.style.transform = `translateX(-${moveDistance})`;
  });
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
}

//moves the indicator dots
function moveIndicator(currentIndicator, targetIndicator) {
  currentIndicator.classList.remove("active");
  targetIndicator.classList.add("active");
}

//toggle the carousel arrows
function toggleArrows(targetIndex) {
  if (targetIndex === 0) {
    prev.classList.add("isHidden");
    next.classList.remove("isHidden");
  } else if (targetIndex === imgArray.length - 1) {
    prev.classList.remove("isHidden");
    next.classList.add("isHidden");
  } else {
    prev.classList.remove("isHidden");
    next.classList.remove("isHidden");
  }
}

//next button event
next.addEventListener("click", (event) => {
  const currentSlide = document.querySelector(".current");
  const nextSlide = currentSlide.nextElementSibling;

  const currentIndicator = document.querySelector(".active");
  const nextIndicator = currentIndicator.nextElementSibling;

  const targetIndex = navArray.findIndex((nav) => nav === nextIndicator);

  moveSlide(currentSlide, nextSlide);
  moveIndicator(currentIndicator, nextIndicator);
  toggleArrows(targetIndex);
});

//prev button event
prev.addEventListener("click", (event) => {
  const currentSlide = document.querySelector(".current");
  const prevSlide = currentSlide.previousElementSibling;

  const currentIndicator = document.querySelector(".active");
  const prevIndicator = currentIndicator.previousElementSibling;

  const targetIndex = navArray.findIndex((nav) => nav === prevIndicator);

  moveSlide(currentSlide, prevSlide);
  moveIndicator(currentIndicator, prevIndicator);
  toggleArrows(targetIndex);
});

//nav event
navigator.addEventListener("click", (event) => {
  const targetIndicator = event.target.closest("button");
  if (!targetIndicator) return;

  const currentSlide = document.querySelector(".current");
  const currentIndicator = document.querySelector(".active");

  const targetIndex = navArray.findIndex((nav) => nav === targetIndicator);
  const targetImg = imgArray[targetIndex];

  moveSlide(currentSlide, targetImg);
  moveIndicator(currentIndicator, targetIndicator);
  toggleArrows(targetIndex);
});

const automatic_slider_loop = () => {
  const currentSlide = document.querySelector(".current");
  const currentIndicator = document.querySelector(".active");

  let currentIndex = navArray.findIndex((nav) => nav === currentIndicator);

  // const targetImg = imgArray[targetIndex];

  // toggleArrows(targetIndex);
  return setInterval(() => {
    let currentSlide = document.querySelector(".current");
    let currentIndicator = document.querySelector(".active");

    let currentIndex = navArray.findIndex((nav) => nav === currentIndicator);
    let targetIndex = currentIndex + 1;
    if (targetIndex === imgArray.length) {
      targetIndex = 0;
    }

    moveSlide(currentSlide, imgArray[targetIndex]);
    moveIndicator(currentIndicator, navArray[targetIndex]);
    toggleArrows(targetIndex);
  }, 5000);
  console.log(currentIndex);
};

automatic_slider_loop();
