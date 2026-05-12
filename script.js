const revealedSections = document.querySelectorAll(".reveal");
const projectOpenButtons = document.querySelectorAll("[data-project-open]");
const projectCloseButtons = document.querySelectorAll("[data-project-close]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealedSections.forEach((section) => {
  revealObserver.observe(section);
});

const closeAllProjectModals = () => {
  document.querySelectorAll(".project-modal[open]").forEach((modal) => {
    modal.close();
  });
};

projectOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.projectOpen;
    const modal = document.querySelector(`[data-project-modal="${target}"]`);

    if (!modal) {
      return;
    }

    closeAllProjectModals();
    modal.showModal();
  });
});

projectCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".project-modal")?.close();
  });
});

document.querySelectorAll(".project-modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const bounds = modal.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      modal.close();
    }
  });
});
