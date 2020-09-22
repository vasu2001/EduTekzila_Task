export const dispatchNames = {
  signIn: 'SIGNIN',
  logOut: 'LOGOUT',
};

export interface storeInterface {
  isLoggedIn: boolean;
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
