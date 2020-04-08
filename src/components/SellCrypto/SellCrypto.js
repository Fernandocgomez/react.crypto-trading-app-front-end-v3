import React, { useState } from "react";
import "./SellCrypto.css";
import bitcoinToDollars from "../../assets/bitcoin-to-dollar.svg";
import { connect } from "react-redux";
import {
  sellCryptoSwitch,
  sellCryptoFetch,
  sellCryptoFetchUnit,
} from "../../redux/SellCrypto/SellCryptoActions";

function SellCrypto(props) {
  const [ammount, setAmmount] = useState(0.0);
  const [coin, setCoin] = useState(0);
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let quarter = (e) => {
    e.preventDefault();
    let quarter =
      (parseFloat(props.cryptoObj.priceUsd) *
        props.cryptoObj.crypto_Percentage) /
      100;
    setAmmount(quarter * 0.25);
  };

  let half = (e) => {
    e.preventDefault();
    let half =
      (parseFloat(props.cryptoObj.priceUsd) *
        props.cryptoObj.crypto_Percentage) /
      100;
    setAmmount(half * 0.5);
  };

  let all = (e) => {
    e.preventDefault();
    let all =
      (parseFloat(props.cryptoObj.priceUsd) *
        props.cryptoObj.crypto_Percentage) /
      100;

    setAmmount(all);
  };
  console.log(props);
  return (
    <div className="ui grid">
      <div className="sixteen column">
        <div className="sell-header">Sell Crypto</div>
        <div className="ui segment">
          <div className="ui segment">
            <span className="sell-bold">Available Cash:</span>{" "}
            {formatter.format(props.balance)}
          </div>

          <table class="ui basic table">
            <thead class="">
              <tr class="">
                <th class="">#</th>
                <th class="">Name</th>
                <th class="">Own In Usd</th>
                <th class="">Own Coins</th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="">
                <td class="">1</td>
                <td class="sell-name-column">
                  <img
                    src={`https://crypto-icones.s3.us-east-2.amazonaws.com/${props.cryptoObj.symbol.toLowerCase()}.svg`}
                    alt=""
                  />
                  <div className="sell-crytpo-name">{props.cryptoObj.name}</div>
                  <div className="sell-crypto-symbol">
                    {props.cryptoObj.symbol}
                  </div>
                </td>
                <td class="">
                  {formatter.format(
                    (parseFloat(props.cryptoObj.priceUsd) *
                      props.cryptoObj.crypto_Percentage) /
                      100
                  )}
                </td>
                <td class="">
                  {(props.cryptoObj.crypto_Percentage / 100).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>

          {props.usdToCryptoSwitch ? (
            <form
              action=""
              className="ui massive form"
              onSubmit={(e) =>
                props.sellCryptoFetch(e, ammount, props.cryptoObj.id)
              }
            >
              <div className="ui segment">
                <div class="ui equal width grid">
                  <div class="column">
                    <i className="dollar sign icon big"></i>
                  </div>
                  <div class="eleven wide column">
                    <div class="field">
                      {props.usdErrorMsg ? (
                        <div className="ui pointing below prompt label">
                          {props.errorMsg}
                        </div>
                      ) : (
                        <></>
                      )}
                      <input
                        placeholder="$00.00"
                        className="sell-input"
                        onChange={(e) => setAmmount(e.target.value)}
                        value={ammount}
                      />
                    </div>
                  </div>
                  <div class="column">
                    <img
                      src={bitcoinToDollars}
                      alt="exchange-icon"
                      className="sell-exchange-icon"
                      onClick={props.switchCryptoUsd}
                    />
                  </div>
                </div>
              </div>
              <button
                class="ui fluid button large"
                style={{ backgroundColor: "#16ab7e", color: "#fff" }}
              >
                Sell
              </button>
              <div
                class="ui equal width grid"
                style={{ marginTop: ".5rem" }}
              >
                <div class="row">
                  <div class="column">
                    <div
                      class="ui segment"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <button
                        className="ui button"
                        style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                        onClick={(e) => quarter(e)}
                      >
                        1/4
                      </button>
                    </div>
                  </div>
                  <div class="column">
                    <div
                      class="ui segment"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <button
                        className="ui button"
                        style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                        onClick={e => half(e)}
                      >
                        1/2
                      </button>
                    </div>
                  </div>
                  <div class="column">
                    <div
                      class="ui segment"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <button
                        className="ui button"
                        style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                        onClick={e => all(e)}
                      >
                        All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form
              action=""
              className="ui massive form"
              onSubmit={(e) =>
                props.sellCryptoFetchUnit(
                  e,
                  coin,
                  props.cryptoObj.id,
                  props.cryptoObj.priceUsd
                )
              }
            >
              <div className="ui segment">
                <div class="ui equal width grid">
                  <div class="column">
                    <i className="bitcoin icon big"></i>
                  </div>
                  <div class="eleven wide column">
                    <div class="field">
                      {props.cryptoErrorMsg ? (
                        <div className="ui pointing below prompt label">
                          {props.errorMsg}
                        </div>
                      ) : (
                        <></>
                      )}
                      <input
                        placeholder="1 BTC"
                        className="sell-input"
                        onChange={(e) => setCoin(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="column">
                    <img
                      src={bitcoinToDollars}
                      alt="exchange-icon"
                      className="sell-exchange-icon"
                      onClick={props.switchCryptoUsd}
                    />
                  </div>
                </div>
              </div>

              <button
                class="ui fluid button large"
                style={{ backgroundColor: "#16ab7e", color: "#fff" }}
              >
                Sell
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usdToCryptoSwitch: state.sellCryptoReducer.usdToCryptoSwitch,
    usdErrorMsg: state.sellCryptoReducer.usdErrorMsg,
    cryptoErrorMsg: state.sellCryptoReducer.cryptoErrorMsg,
    errorMsg: state.sellCryptoReducer.errorMsg,
    balance: state.checkAvailableBalanceReducer.balance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchCryptoUsd: () => dispatch(sellCryptoSwitch()),
    sellCryptoFetch: (event, ammount, crypto_id) =>
      dispatch(sellCryptoFetch(event, ammount, crypto_id)),
    sellCryptoFetchUnit: (event, coin, crypto_id, currentCryptoPrice) =>
      dispatch(sellCryptoFetchUnit(event, coin, crypto_id, currentCryptoPrice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellCrypto);
