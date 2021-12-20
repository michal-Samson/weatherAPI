import './App.css';
import { useSelector, useDispatch, } from 'react-redux';
import React, { useState } from 'react';
import Menu from './Components/Menu/menu';
import { actions } from './Store/actions';

export default function App() {
    const dispatch = useDispatch();
    if (document.cookie)
        console.log("idUser" + document.cookie)
    else
        document.cookie = Math.floor(Math.random() * 1000000000);
    
        dispatch(actions.setItem({ "name": "idUser", "value": document.cookie }));

    return (

        <Menu />

    )
}