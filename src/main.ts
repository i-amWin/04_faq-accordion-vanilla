import "./style.css";

const accordionButtons = document.querySelectorAll<HTMLDivElement>(
  "[data-accordion-button]"
);

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {
    toggleClasses(accordionButton);
  });
});

function toggleClasses(element: HTMLDivElement) {
  accordionButtons.forEach((accordionButton) => {
    if (accordionButton !== element) {
      accordionButton?.classList.remove("active");
    } else {
      accordionButton?.classList.toggle("active");
    }
  });
}
