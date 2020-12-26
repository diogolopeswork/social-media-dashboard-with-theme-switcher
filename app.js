let themeSwitch = document.querySelector('#switchTheme');
themeSwitch.addEventListener('change', (e) => {
    themeSwitch.checked ? setLightTheme() : setDarkTheme();
});

const setDarkTheme = function() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'hsl(230, 17%, 14%)';
    body.style.color = 'hsl(228, 12%, 44%)';

    let cardsBackground = document.querySelectorAll('.card, .overview-card, .overview-card-2nd');
    cardsBackground.forEach(element => {
        element.style.backgroundColor = 'hsl(228, 28%, 20%)';
        element.addEventListener('mouseover', (e) => {
            element.style.backgroundColor = 'hsl(228, 12%, 44%)';
        });
        element.addEventListener('mouseleave', (e) => {
            element.style.backgroundColor = 'hsl(228, 28%, 20%)';
        });
    });

    document.querySelectorAll('.header-left, .number, .overview-header, .stats-Overview').forEach(element => {
        element.style.color = 'hsl(0, 0%, 100%)';
    });
};

const setLightTheme = function() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'hsl(0, 0%, 100%)';
    body.style.color = 'hsl(228, 12%, 44%)';

    let cardsBackground = document.querySelectorAll('.card, .overview-card, .overview-card-2nd');
    cardsBackground.forEach(element => {
        element.style.backgroundColor = 'hsl(225, 100%, 98%)';
        element.addEventListener('mouseover', (e) => {
            element.style.backgroundColor = 'hsl(227, 47%, 96%)';
        });
        element.addEventListener('mouseleave', (e) => {
            element.style.backgroundColor = 'hsl(225, 100%, 98%)';
        });
    });

    document.querySelectorAll('.header-left, .number, .overview-header, .stats-Overview').forEach(element => {
        element.style.color = 'hsl(230, 17%, 14%)';
    });
}