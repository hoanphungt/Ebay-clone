import React from 'react'
import { connect } from 'react-redux';
import { AdDetails } from './AdDetails';
import { loadAd } from '../actions/ads'

class AdDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadAd(this.props.match.params.id)
    }

    render() {
        return (
            <AdDetails ad={this.props.ad} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ad: state.ad
    }
}

export default connect(mapStateToProps, { loadAd })(AdDetailsContainer)