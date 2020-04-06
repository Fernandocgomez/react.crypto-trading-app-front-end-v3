import React from 'react';
import './CryptoTableLoader.css';
import imgTableLoader from '../../assets/img-table-loader.png'

function CryptoTableLoader() {
  return (
    <div className="CryptoTableLoader">
      <table className="ui table" style={{marginBottom: "-1rem"}}>
      <thead className="">
        <tr className="">
          <th className="">#</th>
          <th className="">Name</th>
          <th className="">Price</th>
          <th className="">Change</th>
          <th className="">Chart</th>
          <th className="">Trade</th>
        </tr>
      </thead>
    </table>
    <div className="ui segment reduceMarginTop">
      <div className="ui active transition visible inverted dimmer">
        <div className="content">
          <div className="ui inverted text loader">Loading</div>
        </div>
      </div>
      <img src={imgTableLoader} className="ui image" alt="loader"/>
    </div>
    </div>
  )
} 

export default CryptoTableLoader;
