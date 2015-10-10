import React, { Component, findDOMNode, PropTypes } from 'react';
import emptyFunction from 'react/lib/emptyFunction';

export default class Search extends Component {

    static propTypes = {
        onSubmit: PropTypes.func
    };

    static defaultTypes = {
        onSubmit: emptyFunction
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(findDOMNode(this.term).value);
        this.props.onSubmit(findDOMNode(this.term).value);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref={c => this.term = c} />

                <button type="submit">Search</button>
            </form>
        );
    }

};
