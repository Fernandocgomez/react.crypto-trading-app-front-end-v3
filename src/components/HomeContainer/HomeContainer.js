import React from "react";
import "./HomeContainer.css";
import SearchCryptoForm from "../SearchCryptoForm/SearchCryptoForm";
import CryptoTableHomePage from "../CryptoTableHomePage/CryptoTableHomePage";

function HomeContainer(props) { 
  return(
  <div className="HomeContainer">
    {/* SearchCrypto */}
    <div className="ui equal width grid">
      <div className="column"></div>
      <div className="thirteen wide column">
        <div>
          <SearchCryptoForm />
        </div>
      </div>
      <div className="column"></div>
    </div>
    {/* Search Crypto */}
    <div className="ui equal width grid">
      <div className="column"></div>
      <div className="thirteen wide column">
        <div>
          <CryptoTableHomePage history={props.history.history}/>
        </div>
      </div>
      <div className="column"></div>
    </div>
  </div>
)
}

export default HomeContainer;
