const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const submitForm = document.querySelector('.form-submit form');

// active si toggle and menu para matatago si menu kapag nag click sa toggle, and kapag nag click ulit sa toggle, lalabas ulit si menu.
navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
});

// pag nagsubmit ng form, lalabas yung alert na "Thank you for your recommendation!" at magre-reset yung form after submission.

if (submitForm) {
        submitForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Thank you for your recommendation!');
                submitForm.reset();
        });
}

