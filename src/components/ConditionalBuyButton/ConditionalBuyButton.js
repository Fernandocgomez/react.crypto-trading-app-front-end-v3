import React from 'react';
import './ConditionalBuyButton.css';
import { Button, Modal } from 'semantic-ui-react'
import BuyCryptoForm from '../BuyCryptoForm/BuyCryptoForm';
import SignUpForm from '../SignUpForm/SignUpForm'
import { connect } from 'react-redux';


function ConditionalBuyButton(props) {
  return (
    <Modal trigger={<Button color='green'>Buy</Button>} style={{width: "50%"}}>
      <Modal.Content style={{backgroundColor: "#fcfcfc"}}>

        {props.userLogin ? (
          <BuyCryptoForm cryptoObj={props.cryptoObj} history={props.history}/>
        ) : (
          <SignUpForm />
        )}
      </Modal.Content>
    </Modal>
  )
} 


const mapStateToProps = state => {
  return {
    userLogin: state.authUserReducer.userLogin
  };
};


export default connect(mapStateToProps)(ConditionalBuyButton)
