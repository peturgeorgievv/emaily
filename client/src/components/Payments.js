import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <div className="button_cont" align="center">
                    <button className="example_e grey lighten-5 black-text" rel="nofollow noopener">
                        Add Credits
                        </button>
                </div>
            </StripeCheckout>
        );
    }
};

export default connect(null, actions)(Payments);