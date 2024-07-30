import { useLocation } from "react-router-dom";
import React, { useState } from 'react';

import Sidebar from "./Sidebar";
import "./index.css";

function Layout({ children }) {

    const { pathname } = useLocation();
    const reset=pathname.split("/")[1]==="reset"?pathname:""
    const endpoint=["/login","/signup","/forgot",reset]

    return (
        <>
            { endpoint.includes(pathname)
                ? <div className="layout-form-container">
                    {children}
                </div>
                : <div className="layout-container">
                    <Sidebar />
                    <div className="layout-content">
                        <div className="layout-content-overlay">
                            {children}

                        </div>
                    </div>
                </div>}
        </>

    );
}

export default Layout;