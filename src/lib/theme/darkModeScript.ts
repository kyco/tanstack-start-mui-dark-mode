const mode = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
document.documentElement.classList.replace('system', mode)
