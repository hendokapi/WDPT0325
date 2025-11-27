const btnToggle = document.querySelector('#theme-toggle');

btnToggle.addEventListener('click', function () {
    document.documentElement.dataset.bsTheme =
        document.documentElement.dataset.bsTheme == 'light' ? 'dark' : 'light';
});
