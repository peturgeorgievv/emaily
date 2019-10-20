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
                <div className="card blue-grey lighten-5" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <span href="#!">Yes: <b className="green-text">{survey.yes}</b> </span>
                        <span> No: <b className="red-text">{survey.no}</b></span>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);