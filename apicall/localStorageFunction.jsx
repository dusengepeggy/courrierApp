import { getItemAsync,setItemAsync,deleteItemAsync } from "expo-secure-store";
import React from "react";


export const setDataIntoStorage = async (key,value) =>{
    try {
        await setItemAsync(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error setting data to storage", error);
    }
}


export const getDataFromStorage = async (key) => {
    try {
        const value = await getItemAsync(key);
        return JSON.parse(value);
    } catch (error) {
        console.error("Error getting data from storage", error);
        return null;
    }
}



export const removeDataFromStorage = async (key) => {
    try {
        await deleteItemAsync(key);
    } catch (error) {
        console.error("Error removing data from storage", error);
    }
}