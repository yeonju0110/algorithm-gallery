const LOGIN: string = 'LOGIN';
const LOGOUT: string = 'LOGOUT';

const loginReducer = (state: string, action?: any) => {
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