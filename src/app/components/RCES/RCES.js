import React, { Component } from 'react';
import Search from 'components/search/Search';
import { search as gitHubSearch } from 'utils/GITHUBAPIUtils';

export default class RCES extends Component {

    async onSearch(term) {
        const results = await gitHubSearch(term);

        console.log(results);
    };

    render() {
        return (
            <div>
                <h1>Github Search</h1>

                <Search onSubmit={this.onSearch} />
            </div>
        );
    }

};
