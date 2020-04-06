import React, {useEffect} from 'react';
import './AvailableCash.css';
import { connect } from 'react-redux';
import { checkAvailableBalance } from '../../redux/BuyCrypto/BuyCryptoActions';

function AvailableCash(props) { 
  useEffect(() => {
    props.checkBalance(localStorage.portafolio_id);
  }, []);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return (
  <div className="AvailableCash">
    <div className="ui segment">
            <div className="ui column underline-div button-margin-xrem account-heading">
              Money
            </div>
            <div>
              <span>Available Cash:</span> {formatter.format(props.balance)}
            </div>
          </div>
  </div>
)
}

const mapStateToProps = state => {
  return {
    balance: state.checkAvailableBalanceReducer.balance
  };
};


const mapDispatchToProps = dispatch => {
  return {
    checkBalance: portafolio_id =>
      dispatch(checkAvailableBalance(portafolio_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableCash)
