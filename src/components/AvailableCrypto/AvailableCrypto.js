import React, {useEffect} from 'react';
import './AvailableCrypto.css';
import { connect } from 'react-redux';
import { checkCryptoBalance } from '../../redux/AvailableCrypto/AvailableCryptoActions'

function AvailableCrypto(props) { 
  useEffect(() => {
    props.checkCryptoBalance(localStorage.portafolio_id);
  }, []);
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

    return (
  <div className="AvailableCrypto">
    <div className="ui segment">
            <div className="ui column underline-div button-margin-xrem account-heading">
              Crypto
            </div>
            <div>
              <span>Available Crypto In USD:</span> {formatter.format(props.cryptoBalance)}
            </div>
          </div>
  </div>
)
}

const mapStateToProps = state => {
  return {
    cryptoBalance: state.availableCryptoReducer.cryptoBalance
  };
};


const mapDispatchToProps = dispatch => {
  return {
    checkCryptoBalance: portafolio_id =>
      dispatch(checkCryptoBalance(portafolio_id)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(AvailableCrypto)