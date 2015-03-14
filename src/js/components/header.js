// header.js
const React = require('react');
const lessMixin = require('lessMixin');

export default React.createClass({
    displayName: 'Header',
    mixins: [lessMixin],
    render () {
        return (
            <div className={this.state.camelName}>{`Hello, world!`}</div>
        );
    }
});
