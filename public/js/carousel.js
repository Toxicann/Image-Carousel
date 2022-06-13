class Carousel {
  constructor(id, effect) {
    this.id = id;
    this.effect = effect;

    this.carousel = document.querySelector(`#${id}>.carousel`);
    this.prev = document.querySelector(`#${id}>.button--left`);
    this.next = document.querySelector(`#${id}>.button--right`);

    this.imgList = document.querySelectorAll(`#${id}>.carousel>.image`);
    this.imgArray = Array.from(this.imgList);

    this.navigator = document.querySelector(`#${id}>.carousel__navigation`);

    this.navList = document.querySelectorAll(
      `#${id}>.carousel__navigation>.navigation__indicator`
    );
    this.navArray = Array.from(this.navList);

    this.imgWidth = this.imgArray[0].getBoundingClientRect().width;

    this.arrange_images();
  }

  arrange_images() {
    this.imgArray.forEach((image, i) => {
      image.style.left = `${this.imgWidth * i}px`;
    });
  }
}

const carouselArr = [];

for (let i = 0; i < 2; i++) {
  i === 0 ? (effect = "loop") : (effect = "alternate");
  carouselArr.push(new Carousel(`carousel${i + 1}`, `${effect}`));
}
