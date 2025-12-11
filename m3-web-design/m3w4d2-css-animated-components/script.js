const eleHamburger = document.querySelector('.hamburger');

eleHamburger.addEventListener('click', function (event) {
    this.classList.toggle('open');
    if (!this.classList.contains('open')) {
        this.classList.add('close');
    } else {
        this.classList.remove('close');
    }
});
