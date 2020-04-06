import "./CryptoTableHomePage.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataForCryptoTable } from "../../redux/CryptoTableHomePage/CryptoTableHomePageActions";
import CryptoTableLoader from "../CryptoTableLoader/CryptoTableLoader";
import ConditionalBuyButton from "../ConditionalBuyButton/ConditionalBuyButton";



function CryptoTableHomePage(props) {
  useEffect(() => {
    props.fetchCryptos();
  }, []);

  const renderRowsOnTable = () => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    return (

      <>
        {props.cryptoData.data.map(crypto => (
          <tbody key={crypto.rank}>
            <tr>
            <td>{crypto.rank}</td>
              <td className="name-content">
                <img
                  src={`https://crypto-icones.s3.us-east-2.amazonaws.com/${crypto.symbol.toLowerCase()}.svg`}
                  alt={`${crypto.name} icon`}
                />
                <p className="crypto-name">{crypto.name}</p>
                <p className="crypto-symbol">{crypto.symbol}</p>
              </td>
              <td>{formatter.format(parseFloat(crypto.priceUsd))}</td>
              {parseFloat(crypto.changePercent24Hr) >= 0 ? (
                <td style={{ color: "green" }}>
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </td>
              ) : (
                <td style={{ color: "red" }}>
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </td>
              )}

              <td>
                <ConditionalBuyButton cryptoObj={crypto} history={props.history}/>
              </td>
            </tr>
          </tbody>
        ))}
      </>
    );
  };

const renderRowsOnTableFromSearchResults = () => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    return (

      <>
        {props.searchResults.data.map(crypto => (
          <tbody key={crypto.rank}>
            <tr>
        <td>{crypto.rank}</td>
              <td className="name-content">
                <img
                  src={`https://crypto-icones.s3.us-east-2.amazonaws.com/${crypto.symbol.toLowerCase()}.svg`}
                  alt={`${crypto.name} icon`}
                />
                <p className="crypto-name">{crypto.name}</p>
                <p className="crypto-symbol">{crypto.symbol}</p>
              </td>
              <td>{formatter.format(parseFloat(crypto.priceUsd))}</td>
              {parseFloat(crypto.changePercent24Hr) >= 0 ? (
                <td style={{ color: "green" }}>
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </td>
              ) : (
                <td style={{ color: "red" }}>
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </td>
              )}

              <td>
                <ConditionalBuyButton cryptoObj={crypto} history={props.history}/>
              </td>
            </tr>
          </tbody>
        ))}
      </>
    );
  };

  return (
    <div className="CryptoTableHomePage">
      {props.loading ? (
        <CryptoTableLoader />
      ) : (
        <>
          <table className="ui table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Trade</th>
              </tr>
            </thead>
            {(props.searchResults.length >= 0) ? (<>{renderRowsOnTable()}</>) : (<>{renderRowsOnTableFromSearchResults()}</>)}
            
          </table>
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoTableHomePageReducer.cryptos,
    loading: state.cryptoTableHomePageReducer.loading,
    searchResults: state.cryptoTableHomePageReducer.searchResults,
    userLogin: state.authUserReducer.userLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => dispatch(fetchDataForCryptoTable())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoTableHomePage);
