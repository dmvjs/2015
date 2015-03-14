const req = require.context(`../../less`, false, /less$/);
let styleSheet;

export default {
    getInitialState () {
        return {
            camelName: toCamelCase(this.constructor.displayName)
        }
    },
    componentDidMount() {
        styleSheet = req(getPath(this.state.camelName));
        if (styleSheet.use) {
            styleSheet.use()
        }
    },
    componentWillUnmount() {
        if (styleSheet.unuse) {
            styleSheet.unuse()
        }
    }
};

function getPath (filename) {
    return `./${filename}.useable.less`;
}

function toCamelCase (name) {
    const string = name.split(` `).map(getNameWithUpperCaseInitial).join();
    return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function getNameWithUpperCaseInitial (name) {
    const initial = name.substr(0, 1);
    return initial.toUpperCase() + name.substr(1);
}