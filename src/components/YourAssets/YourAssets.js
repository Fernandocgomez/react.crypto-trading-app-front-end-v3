import React from "react";
import "./YourAssets.css";
import { Button, Modal } from "semantic-ui-react";

function YourAssets() {
  return (
    <div className="YourAssets">
      <table className="ui table">
        <tbody className="">
          <tr className="">
            <td className="">1</td>
            <td className="name-content">
              <img src='' alt="" />
              <p className="crypto-name">Bitcoin</p>
              <p className="crypto-symbol">BTC</p>
            </td>
            <td className="">$6,896.78</td>
            <td className="">+0.56%</td>
            <td className="">
              <Modal trigger={<Button color="yellow">Sell</Button>}>
                <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>
                  {/* <SellCryptoForm /> */}
                </Modal.Content>
              </Modal>
            </td>
            <td className="">
              <Modal trigger={<Button color="green">Buy</Button>}>
                <Modal.Content style={{ backgroundColor: "#fcfcfc" }}>
                  {/* <BuyCryptoForm /> */}
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
