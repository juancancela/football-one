import * as c from '../appConstants';
import * as _ from 'lodash';

const initialState = {
    entities: [],
    isLoading: false,
    error: false,
    success: false
};

export default function entities(state = initialState, action) {
    switch (action.type) {
        case c.RDX_FETCHING_ENTITIES:
            return {
                ...initialState,
                isLoading: true
            };
        case c.RDX_FETCH_ENTITIES_SUCCESS:
            return {
                ...initialState,
                success: true,
                entities: action.data,
            };
        case c.RDX_FETCH_ENTITIES_ERROR:
            return {
                ...initialState,
                success: false,
                error: action.error
            }
        case c.RDX_UPDATE_ENTITY_SUCCESS:
        case c.RDX_DELETE_ENTITY_SUCCESS:
        default:
            return state;
    }
}
