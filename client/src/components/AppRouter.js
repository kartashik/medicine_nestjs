import React, { useContext, useEffect, useState } from 'react';
import { Routes ,Route} from 'react-router-dom';
import Auth from '../pages/Auth';
import { authRoutes, publicRoutes } from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>       
            {user.isAuth===true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )} 
            <Route path="*" element={<Auth/>} />
        </Routes>
    );  
}; 

export default AppRouter;