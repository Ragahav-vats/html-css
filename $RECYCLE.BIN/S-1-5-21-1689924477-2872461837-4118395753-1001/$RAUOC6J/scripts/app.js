const filterButtons = document.querySelectorAll(".btn");
const imageCards = document.querySelectorAll(".image-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    imageCards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});