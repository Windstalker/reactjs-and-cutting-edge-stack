import EventEmitter from 'events';
import RCESDispatcher from 'dispatcher/RCESDispatcher';
import { ActionTypes, PayloadSources } from 'constants/AppConstants';

const CHANGE_EVENT = 'CHANGE_EVENT';

let results = [];
let isSearchInProgress = false;

const SearchResultsStore = Object.assign({}, EventEmitter.prototype, {
    addChangeEventHandler(handler) {
        this.on(CHANGE_EVENT, handler);
    },

    removeChangeEventHandler(handler) {
        this.removeListener(CHANGE_EVENT, handler);
    },

    getResults() {
        return results;
    },

    isSearchInProgress() {
        return this.isSearchInProgress;
    },

    dispatchHandler: RCESDispatcher.register((payload) => {
        const {
            source,
            action: {
                type,
                error,
                result
            }
        } = payload;
        console.log(payload);

        switch(type) {
            case ActionTypes.SEARCH:
                if (source === PayloadSources.VIEW_ACTION) {
                    SearchResultsStore.isSearchInProgress = true;
                } else if (error) {
                    results = [];
                    SearchResultsStore.isSearchInProgress = false;
                } else {
                    results = result;
                    SearchResultsStore.isSearchInProgress = false
                }
                SearchResultsStore.emit(CHANGE_EVENT);
                break;
            default:
                break;
        }
    })
});

export default SearchResultsStore;
