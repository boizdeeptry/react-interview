document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  // Function to go to a specific slide by index
  const goToSlide = (index) => {
    currentIndex = index;
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    updateButtonState();
  };

  // Function to navigate to the next slide
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      goToSlide(currentIndex);
    }
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      currentIndex--;
      goToSlide(currentIndex);
    }
  };

  // Function to update button state and icon color
  const updateButtonState = () => {
    if (currentIndex === 0) {
      prevButton.classList.add("disabled"); // Add a class to the button
    } else {
      prevButton.classList.remove("disabled"); // Remove the class from the button
    }

    if (currentIndex === slides.length - 1) {
      nextButton.classList.add("disabled"); // Add a class to the button
    } else {
      nextButton.classList.remove("disabled"); // Remove the class from the button
    }
  };

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Disable Previous button initially as we start at the first slide
  updateButtonState();
});
