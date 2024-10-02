document.querySelectorAll('.carousel-btn').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default anchor behavior
      const slider = document.querySelector('.slider');
      const slideWidth = document.querySelector('.slide').offsetWidth + 100; // Adjust based on your gap
      slider.scrollLeft = index * slideWidth;
    });
  });
  