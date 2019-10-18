import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  logOut() {
    window.location.href = "/api/logout";
  }

  logIn() {
    window.location.href = "/auth/google";
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <div className="button_cont" align="center">
              <button onClick={this.logIn} className="example_e grey lighten-5 black-text" rel="nofollow noopener">
                Login with Google
              </button>
            </div>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li key="4"><i class="material-icons" id="credits-icon">monetization_on</i></li>
            <li key="3" id="credits-num">
              {this.props.auth.credits}
            </li>
            <li key="1"><Payments /></li>
            <li key="2">
              <div className="button_cont" align="center">
                <button onClick={this.logOut} className="example_e grey lighten-5 black-text" rel="nofollow noopener">
                  Logout
              </button>
              </div>
            </li>
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper grey darken-2">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo home-heading-logo"
            >
              Emailster
          </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </header>

    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
