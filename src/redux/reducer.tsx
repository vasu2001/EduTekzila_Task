import {dispatchNames, storeInterface, actionInterface} from './utils';

const initialState: storeInterface = {
  isLoggedIn: false,
  user: null,
  loading: false,
};

const MainReducer = (
  state: storeInterface = initialState,
  action: actionInterface,
): storeInterface => {
  console.log(action);

  switch (action.type) {
    case dispatchNames.signIn:
      return {
        isLoggedIn: true,
        user: action.payload,
        loading: state.loading,
      };

    case dispatchNames.signUp:
      return {
        ...state,
        user: action.payload,
      };

    case dispatchNames.logOut:
      return initialState;

    case dispatchNames.loading:
      return {...state, loading: !state.loading};

    case dispatchNames.verifyOtp:
      return {...state, isLoggedIn: true};

    default:
      return state;
  }
};

export default MainReducer;
