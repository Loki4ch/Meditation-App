import React, {useState} from "react";
import PropTypes from "prop-types";
import {Route, Routes, Outlet, Navigate, useLocation} from 'react-router-dom';
import LoginPage from "../Scenes/LoginPage.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import {useSelector} from "react-redux";
import Home from "../Scenes/Home.jsx";
import MeditationBasics from "../Scenes/MeditationBasics.jsx";

const RootRouter = (props) => {
    const [redirectLocation, setRedirectLocation] = useState();
    const {location} = useLocation();
    const user = useSelector(store => store.userSlice);

    const renderForGuestUser = (Scene) => {
        if (!user.isLoggedIn) {
            return Scene;
        } else {
            return <Navigate to={'/home'}/>
        }
    }

    const renderForLoggedInUser = (Scene) => {
        if (user.isLoggedIn) {    // пока юзер залогинен
            return Scene;
        } else {      // как только разлогинится
            // setRedirectLocation(location);
            return <Navigate to={'/login-page'}/>
        }
    }

    return (
        <Routes>
            <Route path={'/login-page'} element={renderForGuestUser(<MainLayout><LoginPage/></MainLayout>)}>
               {/*<Route index element={<LoginPage/>}/>*/}
            </Route>
            <Route path={'/home'} element={renderForLoggedInUser(<MainLayout><Home/></MainLayout>)}>
                {/*<Route path={'list'} element={<list>sdsdfsd</list>}/>*/}
            </Route>
            <Route path={'/meditation-basics'} element={renderForLoggedInUser(<MainLayout><MeditationBasics/></MainLayout>)}></Route>

            <Route path={'*'} element={<Navigate to={'/login-page'}/>}/>
        </Routes>
    );
}

RootRouter.propTypes = {

};

export default RootRouter;