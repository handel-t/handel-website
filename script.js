/* ---------------------------
   LANGUAGE SWITCH
---------------------------- */

const toggleLang = document.getElementById("toggleLang");
let isArabic = false;

toggleLang.addEventListener("click", () => {
    isArabic = !isArabic;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerHTML = isArabic ? el.getAttribute("data-ar") : el.getAttribute("data-en");
    });

    // Switch direction
    document.body.setAttribute("dir", isArabic ? "rtl" : "ltr");

    // Change button text
    toggleLang.innerText = isArabic ? "EN" : "AR";
});


/* ---------------------------
   MOBILE MENU TOGGLE
---------------------------- */

const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("show");
});


/* ---------------------------
   CLOSE MENU AFTER CLICK
---------------------------- */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});


/* ---------------------------
   SMOOTH SCROLL
---------------------------- */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* ---------------------------
   MENU ACTIVE HIGHLIGHT
---------------------------- */

// Optional: highlight menu items as scrolling
const sections = document.querySelectorAll("section, .hero");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const top = window.scrollY;
        if (top >= sec.offsetTop - 200) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});


/* ---------------------------
   OPTIONAL: GALLERY SCROLL SNAP (Smooth Drag)
---------------------------- */
const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });
}
