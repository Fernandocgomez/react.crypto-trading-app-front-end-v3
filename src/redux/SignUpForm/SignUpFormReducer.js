import {
  FETCH_POST_SIGNUP_FAILURE,
  FETCH_POST_SIGNUP_SUCCESS, 
  REMOVE_SUCCESS_MESSAGE
} from "./SignUpFormActions";

const initialState = {
  user: {},
  error: [],
  usernameError: false,
  firstNameError: false,
  lastNameError: false,
  passwordError: false,
  passwordConfimrationError: false,
  emaillError: false,
  emailConfimrationError: false, 
  emailHasBeenTaken: false, 
  usernameHasBeenTaken: false,
  newUserWasCreated: false
};

const signUpFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: [],
        newUserWasCreated: !false
      };
    case FETCH_POST_SIGNUP_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        usernameError:
            action.payload.includes("Username can't be blank") ||
            action.payload.includes("Username only allows letters and numbers") ||
            action.payload.includes("Username is too short (minimum is 8 characters)") ||
            action.payload.includes("Username is too long (maximum is 15 characters)"),
        firstNameError: 
            action.payload.includes("First name can't be blank") ||
            action.payload.includes("First name only allows letters"),
        lastNameError: 
            action.payload.includes("Last name can't be blank") ||
            action.payload.includes("Last name only allows letters"),
        passwordError: 
            action.payload.includes("Password  must contain at least one uppercase letter") ||
            action.payload.includes("Password  must contain at least one digit (0-9)") || 
            action.payload.includes("Password  must contain at least one special character (!,@,#,$,%,^,&,*,+,-,=)") ||
            action.payload.includes("Password is too short (minimum is 8 characters)") ||
            action.payload.includes("Password can't be blank") ||
            action.payload.includes("Password is too long (maximum is 20 characters)"), 
        passwordConfimrationError: 
            action.payload.includes("Password confirmation doesn't match Password") ||
            action.payload.includes("Password confirmation can't be blank"),
        emaillError: 
            action.payload.includes("Email can't be blank") ||
            action.payload.includes("Email is invalid") || 
            action.payload.includes("Email is not a valid email"),
        emailConfimrationError: 
            action.payload.includes("Email confirmation can't be blank") ||
            action.payload.includes("Email confirmation doesn't match Email") || 
            action.payload.includes("Email is not a valid email"),
        emailHasBeenTaken: 
            action.payload.includes("Email has already been taken"),
        usernameHasBeenTaken: 
            action.payload.includes("Username has already been taken")

      };
    case REMOVE_SUCCESS_MESSAGE: 
      return {
        ...state, 
        newUserWasCreated: false
      }  
    default:
      return state;
  }
};

export default signUpFormReducer;
