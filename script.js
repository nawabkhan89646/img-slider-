let currentImageIndex = 0;

      function changeImage(direction) {
        const images = document.querySelectorAll(".carousel img");
        images[currentImageIndex].classList.remove("active");
        currentImageIndex =
          (currentImageIndex + direction + images.length) % images.length;
        images[currentImageIndex].classList.add("active");
      }

      setInterval(() => changeImage(1), 3000);