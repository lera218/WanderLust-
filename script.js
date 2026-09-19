// ==========================================
// УНІВЕРСАЛЬНЕ ПЕРЕМИКАННЯ СТОРІНОК
// ==========================================

function hideAllPages() {
    // Головна
    document.getElementById("home-page").style.display = "none";

    // Сторінки турів
    document.querySelectorAll(".tour-page").forEach(function(page) {
        page.classList.remove("show");
    });

    // Бронювання
    const bookingPage = document.getElementById("booking-page");

    if (bookingPage) {
        bookingPage.classList.remove("show");
    }

    // Про нас
    const aboutPage = document.getElementById("about-page");

    if (aboutPage) {
        aboutPage.classList.remove("show");
    }

    // Дякуємо
    const thankYouPage = document.getElementById("thank-you-page");

    if (thankYouPage) {
        thankYouPage.classList.remove("show");
    }
}


// ==========================================
// ВІДКРИТИ ТУР
// ==========================================

function openTours(type) {

    hideAllPages();

    const selectedPage = document.getElementById(type);

    if (selectedPage) {
        selectedPage.classList.add("show");
    }

    window.scrollTo(0, 0);
}


// ==========================================
// ПОВЕРНУТИСЯ З ТУРУ
// ==========================================

function closeTours() {

    hideAllPages();

    document.getElementById("home-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ==========================================
// ДИВИТИСЯ ТУРИ
// ==========================================

function scrollToTours() {

    const title = document.querySelector(
        ".tour-page.show .available-title"
    );

    if (title) {
        title.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ==========================================
// ВІДКРИТИ БРОНЮВАННЯ
// ==========================================

function openBooking(event) {

    if (event) {
        event.preventDefault();
    }

    hideAllPages();

    const bookingPage = document.getElementById("booking-page");

    if (bookingPage) {
        bookingPage.classList.add("show");
    }

    window.scrollTo(0, 0);
}


// ==========================================
// ЗАКРИТИ БРОНЮВАННЯ
// ==========================================

function closeBooking() {

    hideAllPages();

    document.getElementById("home-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ==========================================
// ВІДПРАВКА ЗАЯВКИ
// ==========================================

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Дані заявки
        const firstName =
            document.getElementById("first-name").value;

        const lastName =
            document.getElementById("last-name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const tour =
            document.getElementById("tour").value;

        const people =
            document.getElementById("people").value;

        const date =
            document.getElementById("date").value;

        const message =
            document.getElementById("message").value;


        // Показуємо дані в консолі
        console.log("========== НОВА ЗАЯВКА ==========");
        console.log("Ім'я:", firstName);
        console.log("Прізвище:", lastName);
        console.log("Телефон:", phone);
        console.log("Email:", email);
        console.log("Тур:", tour);
        console.log("Кількість осіб:", people);
        console.log("Дата:", date);
        console.log("Побажання:", message);


        // Ховаємо всі сторінки
        hideAllPages();


        // Показуємо сторінку "Дякуємо"
        const thankYouPage =
            document.getElementById("thank-you-page");

        if (thankYouPage) {
            thankYouPage.classList.add("show");
        }


        // На початок сторінки
        window.scrollTo(0, 0);


        // Очищаємо форму
        bookingForm.reset();
    });
}


// ==========================================
// ПОВЕРНУТИСЯ НА ГОЛОВНУ ПІСЛЯ ЗАЯВКИ
// ==========================================

function closeThankYou() {

    hideAllPages();

    document.getElementById("home-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ==========================================
// ВІДКРИТИ "ПРО НАС"
// ==========================================

function openAbout(event) {

    if (event) {
        event.preventDefault();
    }

    hideAllPages();

    const aboutPage =
        document.getElementById("about-page");

    if (aboutPage) {
        aboutPage.classList.add("show");
    }

    window.scrollTo(0, 0);
}


// ==========================================
// ЗАКРИТИ "ПРО НАС"
// ==========================================

function closeAbout() {

    hideAllPages();

    document.getElementById("home-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ==========================================
// ПРОКРУТИТИ "ПРО НАС"
// ==========================================

function scrollAbout() {

    const history =
        document.querySelector(".history");

    if (history) {

        history.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}