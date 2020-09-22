import {storeInterface, actionInterface, dispatchNames} from './utils';
import {Dispatch} from 'redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {GoogleSignin} from '@react-native-community/google-signin';
import {ToastAndroid} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '1020566322154-6lnnf31k3qbem76j2d4cka27qk29l3ps.apps.googleusercontent.com',
});

const signIn = (payload: storeInterface['user']): actionInterface => {
  return {
    type: dispatchNames.signIn,
    payload,
  };
};

const signUp = (payload: storeInterface['user']): actionInterface => {
  return {
    type: dispatchNames.signUp,
    payload,
  };
};

const logOut = (): actionInterface => ({type: dispatchNames.logOut});
const loading = (): actionInterface => ({type: dispatchNames.loading});
const verifyOtp = (): actionInterface => ({type: dispatchNames.verifyOtp});

export const _SignIn = (dispatch: Dispatch) => async (
  email: string,
  password: string,
  callback: () => void,
): Promise<void> => {
  try {
    dispatch(loading());

    const userRes = await auth().signInWithEmailAndPassword(email, password);
    console.log(userRes);

    const dataRes = await database()
      .ref('Users/' + userRes?.user?.uid)
      .once('value');

    dispatch(
      signIn({
        userId: userRes?.user?.uid,
        email: userRes?.user?.email ?? '',
        name: dataRes.child('name').val(),
        phNo: dataRes.child('phNo').val(),
      }),
    );
  } catch (err) {
    console.log(err);
    ToastAndroid.show('wrong email/password', 100);
  }
  callback();
  dispatch(loading());
};

export const _SignUp = (dispatch: Dispatch) => async (
  email: string,
  password: string,
  name: string,
  phNo: string,
  callback: () => void,
): Promise<void> => {
  try {
    dispatch(loading());

    const userRes = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    // console.log(userRes);

    const ref = database().ref('Users/' + userRes?.user?.uid);
    await ref.child('name').set(name);
    await ref.child('phNo').set(phNo);

    dispatch(
      signUp({
        userId: userRes?.user?.uid,
        email,
        name,
        phNo,
      }),
    );
  } catch (err) {
    console.log(err);
  }
  callback();
  dispatch(loading());
};

export const _LogOut = (dispatch: Dispatch) => async (
  callback: () => void,
): Promise<void> => {
  try {
    await auth().signOut();

    dispatch(logOut());
  } catch (err) {
    console.log(err);
  }

  callback();
};

export const _GoogleSignin = (dispatch: Dispatch) => async (
  callback: () => void,
) => {
  try {
    dispatch(loading());

    const {idToken} = await GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken);

    const userRes = await auth().signInWithCredential(credential);
    // console.log(userRes);

    const {displayName: name, email, phoneNumber: phNo} = userRes.user;

    if (userRes.additionalUserInfo?.isNewUser) {
      const ref = database().ref('Users/' + userRes?.user?.uid);
      await ref.child('name').set(name);
      await ref.child('phNo').set(phNo);
    }

    dispatch(
      signIn({
        userId: userRes?.user?.uid,
        email: email ?? '',
        name: name ?? '',
        phNo: phNo ?? '',
      }),
    );
  } catch (err) {
    console.log(err);
  }
  callback();
  dispatch(loading());
};

export const _VerifyOtp = (dispatch: Dispatch) => async (
  callback: () => void,
) => {
  dispatch(verifyOtp());
  callback();
};
