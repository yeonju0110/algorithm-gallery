const LOGIN: string = 'LOGIN';
const LOGOUT: string = 'LOGOUT';

type action = {
  type: string;
}

const loginReducer = (state: string, action?: action) => {
  if (state === undefined) {
    return { isLogin: false };
  }

  switch (action.type) {
    case LOGIN:
      return { isLogin: true };
    case LOGOUT:
      return { isLogin: false };
    default:
      return { isLogin: false };
  }
}

export default loginReducer;