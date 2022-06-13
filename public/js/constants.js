const carousel = document.querySelector(".carousel");
const prev = document.querySelector(".button--left");
const next = document.querySelector(".button--right");

const imgList = document.getElementsByClassName("image");
const imgArray = Array.from(imgList);

const navigator = document.querySelector(".carousel__navigation");

const navList = document.getElementsByClassName("navigation__indicator");
const navArray = Array.from(navList);

const imgWidth = imgArray[0].getBoundingClientRect().width;
