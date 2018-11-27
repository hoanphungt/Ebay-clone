import { AD_FETCHED } from "../actions/ads";

export default (state = null, action = {}) => {
    switch (action.type) {
        case AD_FETCHED:
            return action.payload
        default:
            return state
    }
}