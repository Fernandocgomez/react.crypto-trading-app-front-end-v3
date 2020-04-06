import React, { useState } from "react";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Modal } from "semantic-ui-react";
import AddFundsForm from "../AddFundsForm/AddFundsForm";

function CreditCardForm() {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  let handleInputFocus = e => {
    setFocus(e.target.name);
  };

  return (
    <div className="ui equal width grid">
      <div className="nine wide column">
        <div className="ui segment">
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </div>
      </div>
      <div className="seven wide column">
        <div className="ui segment">
          <form className="ui form">
            <div className="equal width fields">
              <div className="field">
                <div className="ui fluid input">
                  <input
                    type="number"
                    placeholder="Credit Card Number"
                    name="number"
                    onFocus={e => handleInputFocus(e)}
                    onChange={e => setNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="equal width fields">
              <div className="field">
                <div className="ui fluid input">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    onFocus={e => handleInputFocus(e)}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="equal width fields">
              <div className="field">
                <div className="ui fluid input">
                  <input
                    type="number"
                    placeholder="Good Thru Last Day Of"
                    name="expiry"
                    onFocus={e => handleInputFocus(e)}
                    onChange={e => setExpiry(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui fluid input">
                  <input
                    type="number"
                    placeholder="CVC"
                    name="cvc"
                    onFocus={e => handleInputFocus(e)}
                    onChange={e => setCvc(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>

          {cvc === "" || expiry === "" || name === "" || number === "" ? (
            <button className="ui button green" disabled>
              Authorize
            </button>
          ) : (
            <Modal
              trigger={<button className="ui button green">Authorize</button>}
              style={{ width: "50%" }}
            >
              <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>
                <AddFundsForm />
              </Modal.Content>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreditCardForm;
