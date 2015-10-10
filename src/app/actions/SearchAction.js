import RCESDispatcher from 'dispatcher/RCESDispatcher'
import { ActionTypes } from 'constants/AppConstants'
import { search as gitHubSearch } from 'utils/GITHUBAPIUtils'

export async function search(term) {
    RCESDispatcher.handleViewAction(ActionTypes.SEARCH, 'start');

    try {
        const results = await gitHubSearch(term);

        RCESDispatcher.handleServerAction(ActionTypes.SEARCH, results);
    } catch (err) {
        RCESDispatcher.handleServerAction(ActionTypes.SEARCH, null);
    }
}
