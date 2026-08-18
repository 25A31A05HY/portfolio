// ========================================
// KARRI KANAKA RAJU PORTFOLIO
// script.js
// ========================================


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// ========================================
// DARK / LIGHT MODE
// ========================================

const themeBtn = document.getElementById("themeBtn");


// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.textContent = "☀";
    }

} else {

    if (themeBtn) {
        themeBtn.textContent = "☾";
    }

}


// Change theme
if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        if (isLight) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });

}


// ========================================
// CURRENT YEAR
// ========================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formStatus.textContent =
                    "Please fill in all fields.";

                return;
            }


            formStatus.textContent =
                `Thank you, ${name}! Your message has been received.`;


            contactForm.reset();

        }
    );

}


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const animatedElements =
    document.querySelectorAll(
        ".section, .about-card, .skill-card, .project-card, .education-card, .contact-item, .contact-form"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


// ========================================
// SMOOTH SCROLL
// ========================================

links.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// WELCOME MESSAGE
// ========================================

console.log(
    "🚀 Welcome to Karri Kanaka Raju's Portfolio!"
);

console.log(
    "CSE Student | Programmer | Aerospace Enthusiast"
);