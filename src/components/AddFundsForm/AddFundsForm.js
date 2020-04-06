import React, { useState } from "react";
import "./AddFundsForm.css";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addFunds } from "../../redux/AddFundsForm/AddFundsFormActions";

function AddFundsForm(props) {
  const [ammount, setAmmount] = useState(0.0);
  return (
    <div className="AddFundsForm">
      <div className="ui equal width grid">
        <div className="sixteen wide column">
          <div className="">
            <h2 className="add-funds-heading">Add Funds</h2>
          </div>
        </div>
      </div>
      <div className="ui equal width grid">
        <div className="sixteen wide column">
          <div className="ui segment">
            <form
              className="ui massive form"
              onSubmit={e =>
                props.addFunds(e, ammount, localStorage.portafolio_id)
              }
            >
              <div className="equal width fields">
                <div className="field">
                  {props.showError ? (
                    <div className="ui pointing below prompt label">
                      No negative numbers are allowed
                    </div>
                  ) : (
                    <></>
                  )}

                  <input
                    placeholder="$0.00"
                    className="add-funds-ammount"
                    type="number"
                    onChange={e => setAmmount(e.target.value)}
                  />
                </div>
              </div>
              <Button
                style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                fluid
                size="large"
              >
                Add Funds
              </Button>
              <div className="ui hidden divider"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addFunds: (event, ammount, portfolio_id) =>
      dispatch(addFunds(event, ammount, portfolio_id))
  };
};

const mapStateToProps = state => {
  return {
    portfolio: state.addFundsReducer.portfolio,
    error: state.addFundsReducer.error,
    showError: state.addFundsReducer.showError
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFundsForm);
