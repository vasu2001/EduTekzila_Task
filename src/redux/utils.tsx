export const dispatchNames = {
  signIn: 'SIGNIN',
  logOut: 'LOGOUT',
  loading: 'LOADING',
  signUp: 'SIGNUP',
  verifyOtp: 'VERIFY_OTP',
};

export interface storeInterface {
  isLoggedIn: boolean;
  loading: boolean;
  user: {
    name: string;
    email: string;
    userId: string;
    phNo: string;
  } | null;
}

export interface actionInterface {
  type: string;
  payload?: any;
}
