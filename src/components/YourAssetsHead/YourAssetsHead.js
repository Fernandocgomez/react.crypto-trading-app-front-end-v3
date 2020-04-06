import React from "react";
import "./YourAssetsHead.css";
import { Sticky } from 'semantic-ui-react'

const YourAssetsHead = () => (
  <Sticky>
    <table className="ui table">
      <thead className="">
        <tr className="">
          <th className="">#</th>
          <th className="">Name</th>
          <th className="">Price</th>
          <th className="">Change</th>
          <th className="">Sell</th>
          <th className="">Buy</th>
        </tr>
      </thead>
    </table>
  </Sticky>
);

export default YourAssetsHead;
