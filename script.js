const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    // Animate header
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    // Remove active from all nav links
    navlinks.forEach(link => {
        link.classList.remove('active'); // ✅ Fixed: should be 'link', not 'navlinks'
    });

    // Animate bars box
    if (barsBox) {
        barsBox.classList.remove('active');
        setTimeout(() => {
            barsBox.classList.add('active');
        }, 1100);
    }

    // Deactivate all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Reset menu icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logolink.addEventListener('click', () => {
    if (!navlinks[0].classList.contains('active')) {
        activePage();
        navlinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});



// xyz
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');



        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.Portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.Portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.Portfolio-box .Portfolio-carousel .img-slide');
const PortfolioDetails = document.querySelectorAll('.Portfolio-detail');
const slideItems = imgSlide.children;

const totalSlides = slideItems.length;
let index = 0;
let autoSlideInterval;

const playActiveMedia = () => {
    Array.from(slideItems).forEach((slide, i) => {
        const video = slide.querySelector('video');
        const img = slide.querySelector('img');

        if (video) {
            if (i === index) {
                video.muted = true; // ensure muted
                video.currentTime = 0;
                video.play().catch(() => { });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }

        // Optional: If needed, you can also apply a class to image
        // items for styling transitions or effects
        if (img && i === index) {
            img.classList.add('active-img');
        } else if (img) {
            img.classList.remove('active-img');
        }
    });
};

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(-${index * 100}%)`;

    PortfolioDetails.forEach(detail => detail.classList.remove('active'));
    if (PortfolioDetails[index]) {
        PortfolioDetails[index].classList.add('active');
    }

    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);

    playActiveMedia();
};

const nextSlide = () => {
    index = (index + 1) % totalSlides;
    activePortfolio();
};

arrowRight.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    activePortfolio();
    resetAutoSlide();
});

arrowLeft.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    activePortfolio();
    resetAutoSlide();
});

const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 6000); // change duration as needed
};

const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
};

activePortfolio();
startAutoSlide();


// <!-- Load SMTPJS library -->

function sendMail() {
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_96g0ane", "template_i0fnw4j", templateParams)
        .then(() => {
            alert("Email sent!!");
        })
        .catch(() => {
            alert("Email not sent");
        });
}



