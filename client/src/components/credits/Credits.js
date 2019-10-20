import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


class Credits extends Component {

    onNewSurvey = () => {
        this.props.history.push('/surveys/new');
    }

    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card grey darken-2">
                            <div class="card-content white-text">
                                <span class="card-title credits-title">How to Add Credits</span>
                                <p className="credits-text">
                                    We are using Stripe API in Test Mode for billing. To add your credits enter some e-mail (doesn't need to be valid).
                                Some future date, and 3 digit number. But the most important thing is the Card Number. <br /><br />
                                    It should be: <b>4242 4242 4242 4242</b></p>
                            </div>
                            <div class="card-action">
                                <a href="#!">
                                    <StripeCheckout
                                        name="Emaily"
                                        description="$5 for 5 email credits"
                                        amount={500}
                                        token={token => this.props.handleToken(token)}
                                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                                    >
                                        <button className="example_e red darken-3 white-text">
                                            Add Credits
                                        </button>
                                    </StripeCheckout>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m6">
                        <div class="card grey darken-2">
                            <div class="card-content white-text">
                                <span class="card-title credits-title">First Survey!</span>
                                <p className="credits-text">
                                    <br />Making your first Survey is very simple! <br /><br />
                                    Add the "Title" you like and the subject which you consider most appropriate with the survey. After that
                                    about the e-mail body think carefully how to ask your question so
                                    recipients would be happy to answer. Last but not least, add all e-mails which you wish the survey to be sent to!

                                </p>
                            </div>
                            <div class="card-action">
                                <a href="#!">
                                    <button className="example_e red darken-3 white-text" onClick={this.onNewSurvey}>
                                        New Survey
                                        </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(withRouter(Credits));