import {
  EDIT_USER_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER_RESET,
} from "./EditAccountActions";

const initialState = {
  user: {},
  error: "",
  usernameError: false,
  firstNameError: false,
  lastNameError: false,
  passwordError: false,
  emaillError: false,
  emailHasBeenTaken: false,
  usernameHasBeenTaken: false,
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        usernameError: false,
        firstNameError: false,
        lastNameError: false,
        passwordError: false,
        emaillError: false,
        emailHasBeenTaken: false,
        usernameHasBeenTaken: false,
      };
    case EDIT_USER_FAILURE:
      return {
          ...state, 
          user: {}, 
          error: action.payload, 
          usernameError:
            action.payload.error.includes("Username can't be blank") ||
            action.payload.error.includes("Username only allows letters and numbers") ||
            action.payload.error.includes("Username is too short (minimum is 8 characters)") ||
            action.payload.error.includes("Username is too long (maximum is 15 characters)"),
        firstNameError: 
            action.payload.error.includes("First name can't be blank") ||
            action.payload.error.includes("First name only allows letters"),
        lastNameError: 
            action.payload.error.includes("Last name can't be blank") ||
            action.payload.error.includes("Last name only allows letters"),
        passwordError: 
            action.payload.error.includes("Password  must contain at least one uppercase letter") ||
            action.payload.error.includes("Password  must contain at least one digit (0-9)") || 
            action.payload.error.includes("Password  must contain at least one special character (!,@,#,$,%,^,&,*,+,-,=)") ||
            action.payload.error.includes("Password is too short (minimum is 8 characters)") ||
            action.payload.error.includes("Password can't be blank") ||
            action.payload.error.includes("Password is too long (maximum is 20 characters)"), 
        emaillError: 
            action.payload.error.includes("Email can't be blank") ||
            action.payload.error.includes("Email is invalid") || 
            action.payload.error.includes("Email is not a valid email"),
        emailHasBeenTaken: 
            action.payload.error.includes("Email has already been taken"),
        usernameHasBeenTaken: 
            action.payload.error.includes("Username has already been taken")
      }
    case EDIT_USER_RESET: 
      return {
        ...state,
        user: {},
        error: "",
        usernameError: false,
        firstNameError: false,
        lastNameError: false,
        passwordError: false,
        emaillError: false,
        emailHasBeenTaken: false,
        usernameHasBeenTaken: false, 
      }
    default:
      return state;
  }
};

export default editUserReducer;
