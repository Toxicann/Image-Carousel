// moves the slide as per input
function moveSlide(currentSlide, targetSlide, imgArray) {
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
function toggleArrows(targetIndex, imgArray, prev, next) {
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

//slider automatic animation effect
function automatic_slider_loop(navArray, imgArray, id, prev, next, effect) {
  let notReverse = true;
  return setInterval(() => {
    let currentSlide = document.querySelector(`#${id}>.carousel>.current`);
    let currentIndicator = document.querySelector(
      `#${id}>.carousel__navigation>.active`
    );

    let currentIndex = navArray.findIndex((nav) => nav === currentIndicator);
    let targetIndex = currentIndex + 1;

    //for loop effect
    if (effect == "loop") {
      if (targetIndex === imgArray.length) {
        targetIndex = 0;
      }
      moveSlide(currentSlide, imgArray[targetIndex], imgArray);
      moveIndicator(currentIndicator, navArray[targetIndex]);
      toggleArrows(targetIndex, imgArray, prev, next);
    }
    //for alternate effect
    else {
      if (notReverse) {
        if (targetIndex === imgArray.length - 1) {
          notReverse = false;
        }
        moveSlide(currentSlide, imgArray[targetIndex], imgArray);
        moveIndicator(currentIndicator, navArray[targetIndex]);
        toggleArrows(targetIndex, imgArray, prev, next);
      } else {
        targetIndex = currentIndex - 1;
        if (targetIndex === 0) {
          notReverse = true;
        }
        moveSlide(currentSlide, imgArray[targetIndex], imgArray);
        moveIndicator(currentIndicator, navArray[targetIndex]);
        toggleArrows(targetIndex, imgArray, prev, next);
      }
    }
  }, 5000);
}
