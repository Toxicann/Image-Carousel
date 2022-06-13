carouselArr.forEach((carousel) => {
  //next button event

  carousel.next.addEventListener("click", (event) => {
    const currentSlide = document.querySelector(
      `#${carousel.id}>.carousel>.current`
    );
    const nextSlide = currentSlide.nextElementSibling;

    const currentIndicator = document.querySelector(
      `#${carousel.id}>.carousel__navigation>.active`
    );
    const nextIndicator = currentIndicator.nextElementSibling;

    const targetIndex = carousel.navArray.findIndex(
      (nav) => nav === nextIndicator
    );

    moveSlide(currentSlide, nextSlide, carousel.imgArray);
    moveIndicator(currentIndicator, nextIndicator);
    toggleArrows(targetIndex, carousel.imgArray, carousel.prev, carousel.next);
  });

  //prev button event

  carousel.prev.addEventListener("click", (event) => {
    const currentSlide = document.querySelector(
      `#${carousel.id}>.carousel>.current`
    );
    const prevSlide = currentSlide.previousElementSibling;

    const currentIndicator = document.querySelector(
      `#${carousel.id}>.carousel__navigation>.active`
    );
    const prevIndicator = currentIndicator.previousElementSibling;

    const targetIndex = carousel.navArray.findIndex(
      (nav) => nav === prevIndicator
    );

    moveSlide(currentSlide, prevSlide, carousel.imgArray);
    moveIndicator(currentIndicator, prevIndicator);
    toggleArrows(targetIndex, carousel.imgArray, carousel.prev, carousel.next);
  });

  //nav event
  carousel.navigator.addEventListener("click", (event) => {
    const targetIndicator = event.target.closest(
      `#${carousel.id}>.carousel__navigation>button`
    );
    if (!targetIndicator) return;

    const currentSlide = document.querySelector(
      `#${carousel.id}>.carousel>.current`
    );
    const currentIndicator = document.querySelector(
      `#${carousel.id}>.carousel__navigation>.active`
    );

    const targetIndex = carousel.navArray.findIndex(
      (nav) => nav === targetIndicator
    );
    const targetImg = carousel.imgArray[targetIndex];

    moveSlide(currentSlide, targetImg, carousel.imgArray);
    moveIndicator(currentIndicator, targetIndicator);
    toggleArrows(targetIndex, carousel.imgArray, carousel.prev, carousel.next);
  });

  automatic_slider_loop(
    carousel.navArray,
    carousel.imgArray,
    carousel.id,
    carousel.prev,
    carousel.next,
    carousel.effect
  );
});
