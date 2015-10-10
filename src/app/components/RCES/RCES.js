import React, { Component } from 'react';
import Search from 'components/search/Search';
import Results from 'components/results/Results';
import { search as gitHubSearch } from 'utils/GITHUBAPIUtils';

export default class RCES extends Component {

    state = {
        results: []
    };

    onSearch = async (term) => {
        const results = await gitHubSearch(term);

        console.log(results);

        this.setState({
            results
        });
    };

    render() {
        const { results } = this.state;

        return (
            <div>
                <h1>Github Search</h1>

                <Search onSubmit={this.onSearch} />

                <Results results={results} />
            </div>
        );
    }

};
