class Theme {
    blue = "#5ab9ea"
    purple = "#8860d0"
    purpleBlueMiddle = "#718bdc"
    gray = "#ececec"
    black = "#222222"
    constructor() {
        this.defaultGradient = `linear-gradient(90deg, ${this.blue}, ${this.purpleBlueMiddle}, ${this.purple})`
    }
}

export default new Theme()