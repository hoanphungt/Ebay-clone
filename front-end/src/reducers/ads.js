import { ADS_FETCHED, AD_CREATED } from "../actions/ads";

export default (state = null, action = {}) => {
    switch (action.type) {
        case ADS_FETCHED:
            return action.payload.ads
        case AD_CREATED:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}