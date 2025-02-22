import React, { Component, PropTypes } from 'react';
import Result from 'components/result/Result';

export default class Results extends Component {

    static propTypes = {
        results: PropTypes.array
    };

    static defaultProps = {
        results: []
    };

    render() {
        const {
            results
        } = this.props;

        return (
            <ul>
                {
                    results.map(( { html_url, owner: {login}, name } ) => {
                        let key = name + '/' + login;
                        return <li key={key}>
                            <Result
                                url={html_url}
                                authorName={login}
                                name={name} />
                        </li>
                    })
                }
            </ul>
        );
    }

};
