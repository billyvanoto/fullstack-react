import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div className="container">
      <h5>Please Confirm Your Entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.SurveyForm.values };
}
export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));
