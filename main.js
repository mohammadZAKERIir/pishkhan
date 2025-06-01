//اسلایدر 
window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
});

//اینپوت و عوض شدن تگ pداخل پیام ها

function submitComment() {
  const input = document.getElementById("userInput").value;

  if (input.trim() !== "") {
    alert(" چون بدون لاگین کردن وارد شدید به صورت ناشناس در صورت درست بودن نظرتان ثبت می‌شود");
    document.getElementById("commentText").textContent = input;
  } else {
    alert("لطفاً ابتدا یک نظر وارد کنید");
  }
  document.getElementById("secondText").textContent = "مخاطب ناشناس";
}

//منو همبرگری

let menuBtn = document.getElementById("menuBtn" );
let menu= document.getElementById("menu");
let sideNav= document.getElementById("sideNav");
menuBtn.onclick=function(){ 
    if (sideNav.style.right=="-200px"){
        sideNav.style.right= "0"
    menu.src ="./images/close.jpg "}
    else{sideNav.style.right= "-200px"
        menu.src ="./images/menu.png"
    }
}

// حرکتی500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
   });
