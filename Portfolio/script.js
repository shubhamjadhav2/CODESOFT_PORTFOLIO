document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");
    const navTop = header.offsetTop;
    header.style.position = "static";
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight, 
                    behavior: "smooth" 
                });
            }
        });
    });

    function handleScroll() {
        if (window.scrollY > navTop) {
            if (!header.classList.contains("fixed")) {
                header.classList.add("fixed"); 
            }
        } else {
            if (header.classList.contains("fixed")) {
                header.classList.remove("fixed"); 
            }
        }
    }
    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert("Message sent successfully!");
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();       
        form.querySelector('input[type="text"]').value = "";
        form.querySelector('input[type="email"]').value = "";
        form.querySelector('textarea').value = "";
        alert("Your message has been sent successfully!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.querySelector(".dynamic-text");
    const textArray = ["Web Developer", "DotNet Developer"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    function typeText() {
        if (isDeleting) {
            currentText = textArray[index].substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = textArray[index].substring(0, charIndex + 1);
            charIndex++;
        }
        dynamicText.textContent = currentText;
        if (!isDeleting && charIndex === textArray[index].length) {
            setTimeout(function () {
                isDeleting = true;
            }, 1000); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length; 
        }
        const speed = isDeleting ? 100 : 150;
        setTimeout(typeText, speed); 
    }
    typeText(); 
});

document.getElementById("downloadCv").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const link = document.createElement("a");
    link.href = "SHUBHAM CV.pdf";
    link.download = "SHUBHAM_CV.pdf"; // Sets the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});




