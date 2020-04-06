import React from "react";
import "./MyAccountContainer.css";
import { connect } from "react-redux";
import { fetchUserData } from "../../redux/MyAccount/MyAccountActions";
import { useEffect } from "react";
import { Modal } from "semantic-ui-react";
import CreditCardForm from "../CreditCardForm/CreditCardForm";
import AvailableCash from "../AvailableCash/AvailableCash";
import EditAccount from "../EditAccount/EditAccount";

function MyAccountContainer(props) {
  useEffect(() => {
    props.fetchUser(localStorage.user_id);
  }, []);

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  return (
    <div className="MyAccountContainer ui container">
      <div className="ui equal width grid" style={{ marginTop: "1.5rem" }}>
        <div className="eleven wide column">
          <div className="ui segment">
            <div className="ui column underline-div button-margin-xrem account-heading">
              Personal Information
            </div>

            <div className="ui column button-margin-xrem">
              <p className="personal-info">
                <span className="my-account-lables">First Name:</span>{" "}
                {props.user.first_name ? (
                  <>{props.user.first_name.capitalize()}</>
                ) : (
                  <></>
                )}
              </p>
            </div>

            <div className="ui column button-margin-xrem">
              <p className="personal-info">
                <span className="my-account-lables">Last Name:</span>{" "}
                {props.user.last_name ? (
                  <>{props.user.last_name.capitalize()}</>
                ) : (
                  <></>
                )}
              </p>
            </div>

            <div className="ui column button-margin-xrem">
              <p className="personal-info">
                <span className="my-account-lables">Username:</span>{" "}
                {props.user.username ? (
                  <>{props.user.username.capitalize()}</>
                ) : (
                  <></>
                )}
              </p>
            </div>

            <div className="ui column button-margin-xrem">
              <p className="personal-info">
                <span className="my-account-lables">Email:</span>{" "}
                {props.user.email ? (
                  <>{props.user.email.capitalize()}</>
                ) : (
                  <></>
                )}
              </p>
            </div>

            <div className="ui column button-margin-xrem">
              <p className="personal-info">
                <span className="my-account-lables">Password:</span> • • • • •
                •• •
              </p>
            </div>

            <div className="ui column button-margin-xrem">
              <Modal
                trigger={
                  <button className="ui button inverted green">
                    Edit Account
                  </button>
                }
                style={{ width: "50%" }}
              >
                <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>
                  <EditAccount user={props.user}/>
                </Modal.Content>
              </Modal>
            </div>
          </div>
        </div>

        <div className="five wide column">
          <AvailableCash />

          <div className="ui segment">
            <div className="ui column underline-div button-margin-xrem account-heading">
              Profile Info
            </div>

            <Modal
              trigger={
                <div className="ui column button-margin-xrem hover-grey">
                  Add Funds
                </div>
              }
              style={{ width: "50%" }}
            >
              <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>
                <CreditCardForm />
              </Modal.Content>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user_id => dispatch(fetchUserData(user_id))
  };
};

const mapStateToProps = state => {
  return {
    user: state.myAccountReducer.user
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyAccountContainer);
