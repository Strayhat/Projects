document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to visual elements for hover effect
  const imageWrappers = document.querySelectorAll(".image-wrapper");

  imageWrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseenter", function () {
      this.querySelector("img").classList.add("hovered");
    });

    wrapper.addEventListener("mouseleave", function () {
      this.querySelector("img").classList.remove("hovered");
    });
  });

  // Add smooth scrolling to navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
