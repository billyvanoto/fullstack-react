import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="2">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits : {this.props.auth.credits}
          </li>,
          <li key="1">
            <Link to="/surveys">Surveys</Link>
          </li>,
          <li key="4">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      menuWidth: 150,
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan">
          <Link to="/" className="brand-logo">
            <img src="/logo.png" width="200" />
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
        <ul className="sidenav cyan" id="mobile-demo">
          {this.renderContent()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
