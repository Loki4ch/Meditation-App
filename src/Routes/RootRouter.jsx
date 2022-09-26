import React, {useState} from "react";
import PropTypes from "prop-types";
import {Route, Routes, Outlet, Navigate, useLocation} from 'react-router-dom';
import LoginPage from "../Scenes/LoginPage/LoginPage.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import {useSelector} from "react-redux";
import Home from "../Scenes/Home/Home.jsx";
import MeditationBasics from "../Scenes/MeditationBasics/MeditationBasics.jsx";
import LoginLayout from "../Layouts/LoginLayout.jsx";
import Settings from "../Scenes/Settings/Settings.jsx";
import MyNotes from "../Scenes/MyNotes/MyNotes.jsx";

const RootRouter = (props) => {
    const [redirectLocation, setRedirectLocation] = useState();
    const location = useLocation();
    const user = useSelector(store => store.userSlice);

    const renderForGuestUser = (Scene) => {
        if (!user.isLoggedIn) {
            return Scene;
        } else {
            return <Navigate to={'/home'}/>
        }
    }

    const renderForLoggedInUser = (Scene) => {
        if (user.isLoggedIn && redirectLocation) {
            console.log('now logged in true');
            return <Navigate to={redirectLocation}/>
        } else if (user.isLoggedIn && !redirectLocation) {
            return Scene;
        } else {
            // setRedirectLocation(location);
            return <Navigate to={'/login-page'}/>
        }
    }

    return (
        <Routes>
            <Route path={'/login-page'} element={renderForGuestUser(<LoginLayout><LoginPage/></LoginLayout>)}></Route>
            <Route path={'/home'} element={renderForLoggedInUser(<MainLayout><Home/></MainLayout>)}></Route>
            <Route path={'/my-notes'} element={renderForLoggedInUser(<MainLayout><MyNotes/></MainLayout>)}></Route>
            <Route path={'/meditation-basics'} element={renderForLoggedInUser(<MainLayout><MeditationBasics/></MainLayout>)}></Route>
            <Route path={'/settings'} element={renderForLoggedInUser(<MainLayout><Settings/></MainLayout>)}></Route>
            <Route path={'*'} element={<Navigate to={'/login-page'}/>}/>
        </Routes>
    );
}

RootRouter.propTypes = {

};

export default RootRouter;