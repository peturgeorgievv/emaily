import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }
    async deleteSurveys(surveyId) {
        await this.props.deleteSurveys(surveyId);
    }

    renderSurveys() {
        if (this.props.surveys.length < 1 || this.props.surveys === undefined) {
            return <h1 id="no-surveys-text" align="center">You don't have any Surveys!</h1>
        }

        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="col s12 m5" key={survey._id}>
                    <div className="card blue-grey lighten-5">
                        <div className="card-content">
                            <span className="card-title"><b>{survey.title}</b></span>
                            <p>
                                {survey.body}
                            </p>
                            <p className="right">
                                Sent On: <b>{new Date(survey.dateSent).toLocaleDateString()}</b>
                            </p>
                        </div>
                        <div className="card-action light-green lighten-5" style={{ paddingBottom: '24px' }}>
                            <span>Yes: <b className="green-text answers-text">{survey.yes}</b> </span>
                            <span> No: <b className="red-text answers-text">{survey.no}</b></span>
                            <span>
                                <button className="red darken-4 white-text right btn delete-btn" onClick={() => this.deleteSurveys(survey._id)}><b>DELETE</b></button>
                            </span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    {this.renderSurveys()}
                </div>

            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurveys })(SurveyList);