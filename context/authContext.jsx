// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { CourrierEnum } from '../apicall/enum';
import { postData } from '../apicall/requestController';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [log,setLog] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(CourrierEnum.USERTOKEN);
      if (token) {
        setLog(true);
        setUserToken(token);
      }
    };
    loadToken();
  }, []);

  const login = async (data) => {
      try{
        const response = await postData('login/',data)
        setUserToken(response.access);
        await SecureStore.setItemAsync(CourrierEnum.USERTOKEN, response.access);
        setLog(true)
      }catch(err){
        setLog(false)
        console.error('Error logging in')
      }finally{
        setLog(false)
      }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(CourrierEnum.USERTOKEN);
    setUserToken(null);
    setLog(false);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout,log }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
