// Fade-in animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.2s ease-in-out";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// Input focus animation without breaking layouts
const searchBox = document.querySelector(".hero-content input");

if (searchBox) {
    searchBox.addEventListener("focus", () => {
        searchBox.style.boxShadow = "0 0 12px rgba(226, 55, 68, 0.8)";
        searchBox.style.transform = "scale(1.02)";
    });

    searchBox.addEventListener("blur", () => {
        searchBox.style.boxShadow = "none";
        searchBox.style.transform = "scale(1)";
    });
}
