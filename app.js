const hamburger = document.querySelector(".hamburger");
const close_btn = document.querySelector(".close");
const nav = document.querySelector(".navigation");
const cards = document.querySelectorAll(".card");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

close_btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
          const card = entry.target;
          card.style.opacity = "1";
          observer.unobserve(entry.target);
        }
    });
  }, options);

cards.forEach(card => {
    observer.observe(card);
});