import React from "react";
import "./YourAssets.css";
import { Button, Modal } from "semantic-ui-react";

function YourAssets() {
  return (
    <div className="YourAssets">
      <table className="ui single line table">
        <thead className="">
          <tr className="">
            <th className="">#</th>
            <th className="">Name</th>
            <th className="">Price</th>
            <th className="">Change</th>
            <th className="">Own In Usd</th>
            <th className="">Sell</th>
            <th className="">Buy</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td className="">1</td>
            <td className="">
              <div className="yourAssetsNameColumn">
                <div className="yourAssetsImg">
                  <img src="https://crypto-icones.s3.us-east-2.amazonaws.com/btc.svg" alt=""/>
                </div>
                <div className="yourAssetsName">
                  Bitcoin
                </div>
                <div className="yourAssetsSymbol">
                  BTC
                </div>
              </div>
            </td>
            <td className="">$6,678.30</td>
            <td className="">34.45%</td>
            <td className="">$23,023.34</td>
            <td className="">
              <Modal
                trigger={<button className="ui button yellow">Sell</button>}
                style={{ width: "50%" }}
              >
                <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>

                </Modal.Content>
              </Modal>
            </td>
            <td className="">
            <Modal
                trigger={<button className="ui button green">Buy</button>}
                style={{ width: "50%" }}
              >
                <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>

                </Modal.Content>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default YourAssets;
