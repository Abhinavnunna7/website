document.querySelectorAll(".navbar ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelector(".navbar ul").classList.remove("show");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".gallery img");
    const closeBtn = document.querySelector(".close");
  
    images.forEach((img) => {
      img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
      }); 
    });
  
    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  
    // Close lightbox when clicking outside image
    lightbox.addEventListener("click", () => {
      if (target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  document.querySelector('#loadMoreBtn').addEventListener('click', function () {
    // Select all images with the class 'hidden'
    const hiddenImages = document.querySelectorAll('.gallery .hidden');
  
    // Loop through each hidden image and remove the 'hidden' class
    hiddenImages.forEach(image => {
      image.classList.remove('hidden');
    });
  
    // Optionally, hide the "Load More" button after clicking it
    this.style.display = 'none';
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".gallery img");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            lightbox.classList.add("show");
            lightboxImg.src = this.src;
            lightboxImg.style.width = "auto"; // Maintain aspect ratio
            lightboxImg.style.height = "auto"; // Set height to 90% of viewport
        });
    });

    document.querySelector(".close").addEventListener("click", function () {
        lightbox.classList.remove("show");
    });
});

ScrollSmoother.create({
  wrapper: ".mainContainer",
  content: ".smooth-content",
  smooth: 1.5,
  effects: true
});

