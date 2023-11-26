const toggleTheme = () => {
    const rootContainer = document.querySelector('#app-root');

    const currentTheme = rootContainer.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const themeToBeApplied = currentTheme === "dark-theme" ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', themeToBeApplied);
    rootContainer.classList.replace(currentTheme, themeToBeApplied);
}

const onClickHandleToggleTheme = () => {
    const btnToggleTheme = document.querySelector('#btnToggleTheme');

    btnToggleTheme.addEventListener('click', () => {
        toggleTheme();
    });
}

const onPageLoadApplyTheme = () => {
    const rootContainer = document.querySelector('#app-root');
    const theme = localStorage.getItem('theme');

    if (!theme) return;

    if (rootContainer.classList.contains(theme)) return;

    toggleTheme();
}


onClickHandleToggleTheme();
onPageLoadApplyTheme();