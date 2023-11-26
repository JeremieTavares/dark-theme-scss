const toggleTheme = () => {
    const rootContainer = document.querySelector('#app-root');
    const isDarkTheme = rootContainer.classList.contains('dark-theme');
    const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';

    localStorage.setItem('theme', newTheme);
    rootContainer.classList.replace(isDarkTheme ? 'dark-theme' : 'light-theme', newTheme);
}

const onClickHandleToggleTheme = () => {
    document.querySelector('#btnToggleTheme').addEventListener('click', toggleTheme);
}

const onPageLoadApplyTheme = () => {
    const rootContainer = document.querySelector('#app-root');
    const theme = localStorage.getItem('theme');

    if (!theme) return;
    if (rootContainer.classList.contains(theme)) return;
    document.querySelector('#app-root').classList.add(storedTheme);
}

onClickHandleToggleTheme();
onPageLoadApplyTheme();
