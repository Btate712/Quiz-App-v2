const currentUserReducer = (
  state = {
    name: "",
    admin: false,
    inProgress: false,
    loggedIn: false,
    token: ""
  }, action) => {
    switch(action.type) {
      default:
        return state;
  }
}

export default currentUserReducer;
