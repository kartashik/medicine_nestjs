import React, { useContext } from 'react';
import { Routes ,Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import { authRoutes, publicRoutes } from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component})=>
            
                <Route exact key={path} path={path} element={<Component/>}/>
            )}

            {publicRoutes.map(({path,Component})=>
            
                <Route exact key={path} path={path} element={<Component/>}/>
            
            )}
            <Route path="*" element={<Auth/>} />
        </Routes>
    );
};

export default AppRouter;