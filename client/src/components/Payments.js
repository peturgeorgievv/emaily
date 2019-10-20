import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class Payments extends Component {
    onCreditsClick = () => {
        this.props.history.push('/credits');
    }

    render() {
        return (
            <div className="button_cont" align="center">
                <button className="example_e grey lighten-5 black-text" rel="nofollow noopener" onClick={this.onCreditsClick}>
                    Credits
                </button>
            </div>
        );
    }
};

export default connect(null, actions)(withRouter(Payments));