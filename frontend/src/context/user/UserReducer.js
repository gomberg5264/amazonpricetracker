export default (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        errMsg: null,
        notification: action.payload.notification,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        token: action.payload,
        user: action.payload,
        errMsg: null,
      };

    case "ADD_TRACK":
      return {
        ...state,
        user: {
          ...state.user,
          createdTracks: [action.payload, ...state.user.createdTracks],
        },
      };

    case "UPDATE_TRACKS":
      return {
        ...state,
        user: {
          ...state.user,
          createdTracks: action.payload,
        },
      };

    case "LOG_ERROR_MESSAGE":
      return {
        ...state,
        errMsg: action.payload,
      };

    default:
      return state;
  }
};
