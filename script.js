// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const iframe = document.getElementById("modal-iframe");
    const closeBtn = document.querySelector(".close-btn");
    const buttons = document.querySelectorAll(".modal-btn");

    // Open modal and load iframe content
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const src = button.getAttribute("data-src");
            iframe.src = src;
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        iframe.src = ""; // Clear iframe source when closing
    });

    // Close modal when clicking outside iframe
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            iframe.src = ""; // Clear iframe source when closing
        }
    });
});
