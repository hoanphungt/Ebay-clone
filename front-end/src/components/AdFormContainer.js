import React from 'react'
import { connect } from 'react-redux';
import { AdForm } from './AdForm';
import { createAd } from '../actions/ads'

class AdFormContainer extends React.Component {
    state = {
        title: '',
        price: '',
        description: '',
        email: '',
        phone: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            title: '',
            price: '',
            description: '',
            email: '',
            phone: ''
        })
        this.props.createAd(this.state)
    }

    render() {
        return (
            <AdForm 
                submit={this.onSubmit}
                change={this.onChange}
                values={this.state}
            />
        )
    }
}

export default connect(null, { createAd })(AdFormContainer) 