import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import PieChart from "react-minimal-pie-chart";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveyList() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="col s12 m4" key={survey._id}>
          <div className="card small">
            <div className="card-content light-blue darken-1">
              <span className="card-title activator">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On : {new Date(survey.dateSend).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">{this.renderChart(survey)}</div>
          </div>
        </div>
      );
    });
  }

  renderChart(survey) {
    if (survey.yes !== 0 || survey.no !== 0) {
      return (
        <div
          style={{
            width: "50%",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <PieChart
            data={[
              { title: survey.yes, value: survey.yes, color: "#009688" },
              { title: survey.no, value: survey.no, color: "#ffc107" }
            ]}
          />
        </div>
      );
    } else {
      return (
        <div style={{height:'150px'}}>
          <span className="card-title">User hasn't send feedback.</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row"><p><span className="chart-legend yes"></span> : Yes <span className="chart-legend no"></span> : No</p></div>
        <div className="row">{this.renderSurveyList()}</div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
