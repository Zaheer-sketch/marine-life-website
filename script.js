// script.js

// Function to create a "Scroll to Top" button
function createScrollToTopButton() {
    const button = document.createElement("button");
    button.innerText = "Scroll to Top";
    button.id = "scrollToTopBtn";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.display = "none"; // Initially hidden
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.zIndex = "1000";

    document.body.appendChild(button);

    // Show the button when scrolling down
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Scroll to top when the button is clicked
    button.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const button = document.createElement("button");
    button.innerText = "Toggle Dark Mode";
    button.id = "darkModeToggle";
    button.style.position = "fixed";
    button.style.top = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.zIndex = "1000";

    document.body.appendChild(button);

    button.onclick = function() {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            button.innerText = "Toggle Light Mode";
        } else {
            button.innerText = "Toggle Dark Mode";
        }
    };
}

// Function to enable smooth scrolling for internal links
function enableSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// Function to create an image modal
function createImageModal() {
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.zIndex = "1001";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    const modalImage = document.createElement("img");
    modalImage.id = "modalImage";
    modalImage.style.maxWidth = "90%";
    modalImage.style.maxHeight = "90%";
    modalImage.style.borderRadius = "5px";

    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    modal.onclick = function() {
        modal.style.display = "none";
    };

    document.querySelectorAll("img").forEach(img => {
        img.onclick = function() {
            modalImage.src = this.src;
            modal.style.display = "flex";
        };
    });
}

// Call the functions to create features
createScrollToTopButton();
toggleDarkMode();
enableSmoothScrolling();
createImageModal();
