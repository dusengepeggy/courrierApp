import React from 'react';
import api from './apiCall';


export const postData = async (pathname,data) => {
    try{
        const response = await api.post(pathname,data)
        return response.data
    }catch(e){
        console.log('Error occurred while posting data', e);
        return e;
    }
}

export const getData = async (pathname) => {
    try{
        const response = await api.get(pathname)
        return response.data
    }catch(e){
        console.log('Error occurred while getting data', e);
        return e;
    }
}

export const putData = async (data,pathname) => {
    try{
        const response = await api.put(pathname,data)
        return response.data
    }catch(e){
        console.log('Error occurred while updating data', e);
        return e;
    }
}


export const deleteData = async (pathname) => {
    try{
        const response = await api.delete(pathname)
        return response.data
    }catch(e){
        console.log('Error occurred while deleting data', e);
        return e;
    }
}