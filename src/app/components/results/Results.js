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
                    results
                    //results.map((result) => {
                    //    <Result
                    //        url={result} />
                    //});
                }
            </ul>
        );
    }

};
