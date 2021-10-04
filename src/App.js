import React , {useState} from "react";
import './App.css';
import {BrowserRouter , Route , Switch} from "react-router-dom";
import Routes, {AuthRoutes} from "./Admin/components/Routes/Routes";

// Import components
import Navigation from "./Admin/components/Navigation/Navigation";
import TopNavigation from "./Admin/components/TopNavigation/TopNavigation";
import Login from "./Admin/pages/Login/Login";
import SiteHandler from "./Site/components/SiteHandler/SiteHandler";

function App() {

    if (window.location.href.indexOf("admin") != -1){

            const loggedIn = localStorage.getItem('user');

            if(!loggedIn){
                return (
                    <div className="App">
                        <BrowserRouter>
                            <AuthRoutes/>
                        </BrowserRouter>
                    </div>
                );
            }else{

                return (
                    <div className="App">
                        <BrowserRouter>
                            <Navigation/>
                            <main className="main-content">
                                <Routes/>
                            </main>
                            <br clear="all"/>
                        </BrowserRouter>
                    </div>
                );

            }

    }else{

        return (
          <div className="App">
              <SiteHandler/>
          </div>
        );

    }

}

export default App;
