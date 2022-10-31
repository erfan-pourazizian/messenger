import React from 'react';
import Layout from "./layout/Layout";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/home/Home";
import Page404 from '../pages/404/404'
import MessageByHashTag from "../pages/MessageByHashTag/MessageByHashTag";
import MessagesByUser from "../pages/MessagesByUser/MessagesByUser";
import AuthPage from "../pages/auth/AuthPage";
import {MessageProvider} from "../context/MessageContext";
import '../i18n'
import {LayoutProvider} from "../context/LayoutContext";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/login" component={AuthPage}/>
                    <PrivateRoute path={"/"} render={() =>
                        <LayoutProvider>
                            <MessageProvider>
                                <Layout>
                                    <Switch>
                                        <Route exact path={"/"} component={Home}/>
                                        <Route exact path={"/hashtags/:hashtag"} component={MessageByHashTag}/>
                                        <Route exact path={"/users/:id/:name"} component={MessagesByUser}/>
                                        <Route component={Page404}></Route>
                                    </Switch>
                                </Layout>
                            </MessageProvider>
                        </LayoutProvider>
                    }/>
                </Switch>
            </BrowserRouter>
            <ToastContainer rtl/>
        </>
    );
};

const isLogin = () => !!localStorage.getItem("x-auth-token");
// public route(login page)
const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"}/>
        else {
            return React.createElement(component, props);
        }
    }}/>
};
// private route(except login page)
const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props);
        else return <Redirect to={"/login"}/>
    }}/>
}

export default App;