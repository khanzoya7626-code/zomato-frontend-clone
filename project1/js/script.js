// Fade-in animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.2s ease-in-out";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// Simple input focus animation
const searchBox = document.querySelector("main input");

searchBox.addEventListener("focus", () => {
    searchBox.style.boxShadow = "0 0 10px rgba(226, 55, 68, 0.8)";
    searchBox.style.transform = "translate(-50%, -50%) scale(1.03)";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.boxShadow = "none";
    searchBox.style.transform = "translate(-50%, -50%) scale(1)";
});
