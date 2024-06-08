if (localStorage.theme == undefined) {
    localStorage.theme = "dark"
}

export class Utils {
    static themeMode = localStorage.theme
}