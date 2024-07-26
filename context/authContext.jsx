import React, { createContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { CourrierEnum } from '../apicall/enum';
import { getData, postData } from '../apicall/requestController';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [log, setLog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = async (data) => {
    try {
      const response = await postData('login/', data);
      setUserToken(response.access);
      await SecureStore.setItemAsync(CourrierEnum.USERTOKEN, response.access);
      setLog(true);
      setErrorMessage(''); // Clear error message on successful login
    } catch (err) {
      setLog(false);
      setErrorMessage('Error logging in. Please try again.');
    } finally {
      setLog(false);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(CourrierEnum.USERTOKEN);
    setUserToken(null);
    setLog(false);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout, log, setLog, errorMessage, setErrorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
