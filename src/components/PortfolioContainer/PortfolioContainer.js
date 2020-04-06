import React from "react";
import "./PortfolioContainer.css";
import DailyTrackingGraph from "../DailyTrackingGraph/DailyTrackingGraph";
import AvailableCash from "../AvailableCash/AvailableCash";
import YourAssets from "../YourAssets/YourAssets";
import YourAssetsHead from "../YourAssetsHead/YourAssetsHead";
import AvailableCrypto from "../AvailableCrypto/AvailableCrypto";

function PortfolioContainer() {
  return (
    <div className="PortfolioContainer ui container">
      <div className="ui grid">
        <div className="twelve wide column">
          <div className="pfc-top-bottom-margin">
            <DailyTrackingGraph />
          </div>
        </div>
        <div className="four wide column">
          <div className="pfc-top-bottom-margin">
            <AvailableCash />
          </div>
          <div className="">
            <AvailableCrypto />
          </div>
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <div className="">
            <YourAssetsHead />
          </div>
        <div className="AQ~cv v">
            <YourAssets />
          </div>
        </div>
        <div className="four wide column">

        </div>
      </div>
    </div>
  );
}

export default PortfolioContainer;
