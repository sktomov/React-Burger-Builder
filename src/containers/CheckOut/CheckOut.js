import React, { Component } from "react";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";

class CheckOut extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

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
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinued}
          chekoutCanceled={this.chekoutCanceled}
        />
      </div>
    );
  }
}

export default CheckOut;
