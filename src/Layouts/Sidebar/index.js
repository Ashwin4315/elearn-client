import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";

function Sidebar() {



    const [form, setform] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        setform(localStorage.getItem("token"));
        console.log(form);
    }, [])

    return (
        <div className="sidebar-container">
            <div className="sidebar-sub-container">
                <div className="sidebar-sub-container-logo">
                    <h2>e-learn</h2>
                </div>
                <div className="sidebar-sub-container-pages">
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                     
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/course">
                                Courses
                            </Link>
                        </li>
                       

                    </ul>
                </div>
                <div className="sidebar-sub-container-sign-btn">
                    <button
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/login")
                        }

                        }
                    >
                        {form === null ? "Login" : "Sign out"}
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;