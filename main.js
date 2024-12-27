let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "👋Bye!";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  let currentIndex = 0;

  function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex += step;
  
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
  
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel').style.transform = newTransformValue;
  }
  