import React, { Component } from 'react';
import Search from 'components/search/Search';
import Results from 'components/results/Results';
import { search as gitHubSearch } from 'actions/SearchAction';
import SearchResultsStore from 'stores/SearchResultsStore';

export default class RCES extends Component {

    state = {
        results: []
    };

    componentDidMount() {
        SearchResultsStore.addChangeEventHandler(this.onStoresChange)
    }

    componentWillUnmount() {
        SearchResultsStore.removeChangeEventHandler(this.onStoresChange)
    }

    onStoresChange = () => this.setState({ results: SearchResultsStore.getResults() });

    onSearch = (term) => {
        gitHubSearch(term);

        //console.log(results);
        //
        //this.setState({
        //    results
        //});
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
