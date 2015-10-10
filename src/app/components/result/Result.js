import React, { Component, PropTypes } from 'react';
import shallowEqual from 'react/lib/shallowEqual';

export default class Result extends Component {
    static propTypes = {
        url: PropTypes.string,
        authorName: PropTypes.string,
        name: PropTypes.string
    };

    static defaultTypes = {
        url: '',
        authorName: '',
        name: ''
    };

    shouldComponentUpdate = (next) =>
        !shallowEqual(next, this.props);

    render() {
        const {
            url,
            authorName,
            name
        } = this.props;

        return (
            <article>
                <h4>{name}</h4>
                <p>{authorName}</p>
                <a href={url} target="_blank">Go to repo</a>
            </article>
        );
    }

};
