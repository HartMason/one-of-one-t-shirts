export const login = (user) => {
  return { type: "LOGIN", value: user };
};
export const logOut = () => {
  return { type: "LOGOUT" };
};
const fetchLoginAction = (userArray) => {
  //userArray has two items, user object, and JWTString
  return {
    type: "SET_LOGIN",
    payload: userArray,
  };
};

export const fetchLogin = (user) => {
  return (dispatch) => {
    fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
      },
      mode: "no-cors",
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((response) => {
        console.log("fetchLogin response", response);
        // if(response === "Bad Request" || response === "Internal Server Error"){
        //   return;
        // };
        dispatch(fetchLoginAction([user, response]));
      });
  };
};

// export const addBusiness = (business) => {
//     return { type: "ADD_BUSINESS", value: business}
// }

// export const removeBusiness = (index) => {
//     return { type: "REMOVE_BUSINESS", value: index}
// }
