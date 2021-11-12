$(window).scroll(function(){
    let pos = $(window).scrollTop();
    if(pos >= 100){
        $('.navbar').addClass('cng-navbar');
    } else {
        $('.navbar').removeClass('cng-navbar');
    }
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
const imgs=document.querySelectorAll('.img-select a');
const imgBtns=[... imgs];
let imgId=1;

imgBtns.forEach((imgItem)=>{
    imgItem.addEventListener('click', (event)=>{
        event.preventDefault();
        imgId=imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth=document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform 
    =`translateX(${- (imgId - 1) * displayWidth}px)`;
}