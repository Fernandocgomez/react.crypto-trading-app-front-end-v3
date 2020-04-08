import React, { useState, useEffect } from "react";
import "./BuyCryptoForm.css";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import bitcoinToDollars from "../../assets/bitcoin-to-dollar.svg";
import { connect } from "react-redux";
import {
  checkAvailableBalance,
  buyCryptoInUsd
} from "../../redux/BuyCrypto/BuyCryptoActions";
import dollarToCrypto from '../../assets/dollar-to-crypto.png'
import { setSource } from "../../assets/SetSource";

function BuyCryptoForm(props) {
  
  useEffect(() => {
    props.checkBalance(localStorage.portafolio_id);
  }, []);

  let setExchangeAndRest = () => {
    setExchange(!exchange);
    setDollarAmmount(0.0);
    setCryptoAmmount(0);
  };

  const [exchange, setExchange] = useState(true);
  const [dollarAmmount, setDollarAmmount] = useState(0.0);
  const [cryptoAmmount, setCryptoAmmount] = useState(0);

  let ammount;
  let percentage = cryptoAmmount * 100;
  let ammountInDollars = (parseFloat(props.cryptoObj.priceUsd) * percentage) / 100;

  let submitForm = e => {
    if (exchange) {
      ammount = dollarAmmount;
      props.buyCryptoInUsd(
        ammount,
        props.cryptoObj,
        e,
        localStorage.portafolio_id,
        props.history
      );
    } else {
      ammount = ammountInDollars;
      props.buyCryptoInUsd(
        ammount,
        props.cryptoObj,
        e,
        localStorage.portafolio_id,
        props.history
      );
    }
  };

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <Grid textAlign="center" style={{ height: "85vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as="h2" textAlign="center" style={{ color: "#16ab7e" }}>
          BUY
        </Header>
        <Form size="large" onSubmit={e => submitForm(e)}>
          <Segment stacked>
            <div className="ui segment" style={{ display: "flex" }}>
              <p>
                <span className="available-cash">Available Cash:</span>{" "}
                {formatter.format(props.balance)}
              </p>
            </div>

            <div className="" style={{ display: "flex" }}>
              <table className="ui table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.cryptoObj.rank}</td>
                    <td className="name-content">
                      <img
                        src={setSource(props.cryptoObj)}
                        alt={`${props.cryptoObj.name} icon`}
                      />
                      <p className="crypto-name">{props.cryptoObj.name}</p>
                      <p className="crypto-symbol">{props.cryptoObj.symbol}</p>
                    </td>
                    <td>
                      {formatter.format(parseFloat(props.cryptoObj.priceUsd))}
                    </td>
                    {parseFloat(props.cryptoObj.changePercent24Hr) >= 0 ? (
                      <td style={{ color: "green" }}>
                        {parseFloat(props.cryptoObj.changePercent24Hr).toFixed(
                          2
                        )}
                        %
                      </td>
                    ) : (
                      <td style={{ color: "red" }}>
                        {parseFloat(props.cryptoObj.changePercent24Hr).toFixed(
                          2
                        )}
                        %
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ui segment" style={{ display: "flex" }}>
              {exchange ? (
                <>
                  <i
                    aria-hidden="true"
                    className="dollar sign icon big"
                    style={{ marginRight: "1.5rem", marginTop: "1.5rem" }}
                  ></i>

                  <Form.Input
                    placeholder="$0.00"
                    type="number"
                    required="required"
                    onChange={e => setDollarAmmount(e.target.value)}

                    error={props.buyCryptoUsdError}
                    className="buyCryptoInput"
                    style={{ marginTop: "1rem", height: "3.5rem" }}
                    min="0.00"
                    step="0.01"
                  />
                </>
              ) : (
                <>
                  <i
                    aria-hidden="true"
                    className="btc icon big"
                    style={{ marginRight: "1.5rem", marginTop: "1.5rem" }}
                  ></i>

                  <Form.Input
                    placeholder={`0 ${props.cryptoObj.symbol}`}
                    type="number"
                    required="required"
                    className="buyCryptoInput"
                    style={{ marginTop: "1rem", height: "3.5rem" }}
                    onChange={e => setCryptoAmmount(e.target.value)}
                    error={props.buyCryptoUsdError}

                    min="0.00"
                    step="0.01"
                  />
                </>
              )}

              <img
                src={bitcoinToDollars}
                alt="exchange-icon"
                className="exchange-icon"
                onClick={setExchangeAndRest}
              />
            </div>

            {exchange ? (
              <></>
            ) : (
              <div className="ui segment" style={{display: "flex"}}>
                <div className="column">
                  <div className="">
                    <img src={dollarToCrypto} alt="" className="dollarToCrypto"/>
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ammountExchange">
                    ${ammountInDollars.toFixed(2)}
                  </div>
                </div>
              </div>
            )}

            <Button
              style={{ backgroundColor: "#16ab7e", color: "#fff" }}
              fluid
              size="large"
            >
              BUY
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    balance: state.checkAvailableBalanceReducer.balance,
    buyCryptoUsdError: state.checkAvailableBalanceReducer.buyCryptoUsdError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkBalance: portafolio_id =>
      dispatch(checkAvailableBalance(portafolio_id)),
    buyCryptoInUsd: (
      inputInDollars,
      cryptoObj,
      event,
      portafolio_id,
      history
    ) =>
      dispatch(
        buyCryptoInUsd(inputInDollars, cryptoObj, event, portafolio_id, history)
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCryptoForm);
