export const FETCH_USER_DATA = "FETCH_USER_DATA";

const fetchUserDataAction = (user) => {
  return {
    type: FETCH_USER_DATA,
    payload: user,
  };
};

export const fetchUserData = (user_id) => {
  return (dispatch) => {
    fetch(`https://crypto-simulator-api.herokuapp.com/users/${user_id}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((user) => {
        const userData = user;
        dispatch(fetchUserDataAction(userData));
      })
      .catch((error) => {

      });
  };
};
