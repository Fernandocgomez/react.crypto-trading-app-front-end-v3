import React, {useState} from "react";
import "./SearchCryptoForm.css";
import { connect } from "react-redux";
import { filterCryptoHomePage } from "../../redux/CryptoTableHomePage/CryptoTableHomePageActions";



function SearchCryptoForm(props) {
  
  const [query, setQuery] = useState('')

  let handleKeyPress = event => {
    if (event.key === 'Enter') {
      props.filterCrypto(query, props.cryptoData.data)
    }
  };

  return (
    <div className="SearchCryptoForm">
      <div>
        <h2>Look For Your Favorite Crypto</h2>
        <p>More than 200 avaiable crypto currencies!</p>
      </div>
      <div>
        <input type="text" className="search-input" value={query} onChange={e => setQuery(e.target.value)} onKeyPress={e => handleKeyPress(e)}/>
        <button type="button" className="ui button green large" onClick={() => props.filterCrypto(query, props.cryptoData.data)}>Search</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    filterCrypto: (query, cryptoData, ) => dispatch(filterCryptoHomePage(query, cryptoData))
  };
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoTableHomePageReducer.cryptos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCryptoForm)
