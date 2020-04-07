import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cryptoTableHomePageReducer from './CryptoTableHomePage/CryptoTableHomePageReducer';
import signUpFormReducer from '../redux/SignUpForm/SignUpFormReducer'
import loginFormReducer from './LoginForm/LoginFormReducer';
import authUserReducer from './AuthUser/AuthUserReducer';
import checkAvailableBalanceReducer from './BuyCrypto/BuyCryptoReducer'
import myAccountReducer from './MyAccount/MyAccountReducer';
import addFundsReducer from './AddFundsForm/AddFundsFormReducer';
import editUserReducer from './EditAccount/EditAccountReducer';
import dailyTrackingGraphReducer from './DailyTrackingGraph/DailyTrackingGraphReducer';
import availableCryptoReducer from './AvailableCrypto/AvailableCryptoReducer';
import yourAssestsReducer from './YourAssests/YourAssestsReducer';



const rootReducer = combineReducers({
    cryptoTableHomePageReducer: cryptoTableHomePageReducer, 
    signUpFormReducer: signUpFormReducer, 
    loginFormReducer: loginFormReducer, 
    authUserReducer: authUserReducer, 
    checkAvailableBalanceReducer: checkAvailableBalanceReducer, 
    myAccountReducer: myAccountReducer, 
    addFundsReducer: addFundsReducer, 
    editUserReducer: editUserReducer, 
    dailyTrackingGraphReducer: dailyTrackingGraphReducer, 
    availableCryptoReducer: availableCryptoReducer, 
    yourAssestsReducer: yourAssestsReducer

})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

