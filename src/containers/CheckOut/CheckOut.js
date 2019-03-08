import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
import ContactData from "../CheckOut/ContactData/ContactData";
import { connect } from "react-redux";

class CheckOut extends Component {
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  chekoutCanceled = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckOutSummary
          ingredients={this.props.ings}
          checkoutContinued={this.checkoutContinued}
          chekoutCanceled={this.chekoutCanceled}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  };
};

export default connect(mapStateToProps)(CheckOut);
