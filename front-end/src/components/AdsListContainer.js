import React from 'react'
import { connect } from 'react-redux';
import { AdsList } from './AdsList';
import { loadAds } from '../actions/ads'
import AdFormContainer from './AdFormContainer';

class AdsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadAds()
    }

    render() {
        return (
            <div>
                <h1>List of all products</h1>
                <AdsList ads={this.props.ads}/>
                <AdFormContainer />
            </div>
        )        
    }
}

const mapStateToProps = (state) => {
    return {
        ads: state.ads
    }
}

export default connect(mapStateToProps, { loadAds })(AdsListContainer)