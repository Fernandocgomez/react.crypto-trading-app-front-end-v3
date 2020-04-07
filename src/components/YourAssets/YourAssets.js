import React, { useEffect } from "react";
import "./YourAssets.css";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import imgTableLoader from '../../assets/img-table-loader.png'
import { fetchYourAssests } from "../../redux/YourAssests/YourAssestsActions";
import BuyCryptoForm from "../BuyCryptoForm/BuyCryptoForm";
import { Link } from "react-router-dom";

function YourAssets(props) {
  useEffect(() => {
    props.fetchYourAssests(localStorage.portafolio_id)
  }, []);
  let renderAssets = () => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
      <>
        {props.cryptos.map(crypto => (
          <tr className="" key={crypto.id}>
          <td className="">{crypto.rank}</td>
          <td className="">
            <div className="yourAssetsNameColumn">
              <div className="yourAssetsImg">
                <img
                  src={`https://crypto-icones.s3.us-east-2.amazonaws.com/${crypto.symbol.toLowerCase()}.svg`}
                  alt=""
                />
              </div>
              <div className="yourAssetsName">{crypto.name}</div>
        <div className="yourAssetsSymbol">{crypto.symbol}</div>
            </div>
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
          <td className="">{formatter.format((parseFloat(crypto.priceUsd) * crypto.crypto_Percentage)/100)}</td>

          <td className="">{numberWithCommas((crypto.crypto_Percentage/100).toFixed(2))}</td>
          <td className="">
            <Modal
              trigger={<button className="ui button yellow">Sell</button>}
              style={{ width: "50%" }}
            >
              <Modal.Content
                style={{ backgroundColor: "#fcfcfc" }}
              ></Modal.Content>
            </Modal>
          </td>
          <td className="">
            <Modal
              trigger={<button className="ui button green">Buy</button>}
              style={{ width: "50%" }}
            >
              <Modal.Content
                style={{ backgroundColor: "#fcfcfc" }}
              >
                <BuyCryptoForm cryptoObj={crypto}/>
              </Modal.Content>
            </Modal>
          </td>
        </tr>
        ))}
      </>
    )
  }
  return (
    <div className="YourAssets">
      <table className="ui single line table">
        <thead className="">
          <tr className="">
            <th className="">#</th>
            <th className="">Name</th>
            <th className="">Price</th>
            <th className="">Change 24Hrs</th>
            <th className="">Own In Usd</th>
            <th className="">Coins</th>
            <th className="">Sell</th>
            <th className="">Buy</th>
          </tr>
        </thead>
        <tbody className="">
          {props.loading ? (<></>) : (
          <>
          {renderAssets()}
          </>)}
        </tbody>
      </table>
      {props.loading ? (
        <div className="ui segment reduceMarginTop">
        <div className="ui active transition visible inverted dimmer">
          <div className="content">
            <div className="ui inverted text loader">Loading</div>
          </div>
        </div>
        <img src={imgTableLoader} className="ui image" alt="loader"/>
      </div>
      ) : (
          <>
          </>)}

        {props.noCryptoMsg ? (
          <div className="ui segment reduceMarginTop">
          <div className="ui active transition visible inverted dimmer">
            <div className="content">
        <div className="ui inverted text loader">{props.error} <br/> <Link to="/">Click Here To Buy Crypto Currency</Link></div>
        

            </div>
          </div>
          <img src={imgTableLoader} className="ui image" alt="loader"/>
        </div>
        ) : (
          <></>
        )}



      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.yourAssestsReducer.loading, 
    cryptos: state.yourAssestsReducer.cryptos, 
    error: state.yourAssestsReducer.error, 
    noCryptoMsg: state.yourAssestsReducer.noCryptoMsg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchYourAssests: (portfolio_id) => dispatch(fetchYourAssests(portfolio_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourAssets);
