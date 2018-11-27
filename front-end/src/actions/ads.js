import request from 'superagent'

export const ADS_FETCHED = 'ADS_FETCHED'
export const AD_FETCHED = 'AD_LOADED'
export const AD_CREATED = 'AD_CREATED'
export const AD_DELETED = 'AD_DELETED'

const baseUrl = 'http://localhost:4000'

const adsFetched = ads => ({
    type: ADS_FETCHED,
    payload: ads
})

const adFetched = ad => ({
    type: AD_FETCHED,
    payload: ad
})

const adCreated = ad => ({
    type: AD_CREATED,
    payload: ad
})

const adDeleted = (ad) => ({
    type: AD_DELETED,
    payload: ad
})

export const loadAds = () => (dispatch, getState) => {
    //when the state already contains ads, we don't fetch them anymore
    if (getState().ads) return 

    //a Get /ads request
    request
        .get(`${baseUrl}/ads`)
        .then(res => {
            //dispatch the ads_fetched action that contain all the ads
            dispatch(adsFetched(res.body))
        })
        .catch(console.error)
}

export const loadAd = (adId) => (dispatch) => {
    request
        .get(`${baseUrl}/ads/${adId}`)
        .then(res => {
            dispatch(adFetched(res.body))
        })
        .catch(console.error)
}

export const createAd = (data) => (dispatch) => {
    request
        .post(`${baseUrl}/ads`)
        .send(data)
        .then(res => {
            dispatch(adCreated(res.body))
        })
        .catch(console.error)
}

export const deleteAd = (adId) => (dispatch) => {
    request
        .delete(`${baseUrl}/ads/${adId}`)
        .then(_ => {
            dispatch(adDeleted(adId))
        })
}

