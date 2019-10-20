import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="col s12 m5">
                    <div className="card blue-grey lighten-5" key={survey._id}>
                        <div className="card-content">
                            <span className="card-title"><b>{survey.title}</b></span>
                            <p>
                                {survey.body}
                            </p>
                            <p className="right">
                                Sent On: <b>{new Date(survey.dateSent).toLocaleDateString()}</b>
                            </p>
                        </div>
                        <div className="card-action light-green lighten-5">
                            <span>Yes: <b className="green-text answers-text">{survey.yes}</b> </span>
                            <span> No: <b className="red-text answers-text">{survey.no}</b></span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div class="row">

                    {this.renderSurveys()}
                </div>

            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);