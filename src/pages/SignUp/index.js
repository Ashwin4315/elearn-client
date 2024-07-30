import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../../store/Action/authAction";
import Button from "../../components/UI/Button"
import "./index.css";

function Login() {
    

    const {user}=useSelector(state=>state.user)
    const [nameInput, setname] = useState("");
    const [emailInput, setemail] = useState("");
    const [passwordInput, setpassword] = useState("");
    const [confirmInput, setconfirm] = useState("");

    const navigate=useNavigate()

    useEffect(()=>{
        if( user.token!==undefined ){
            localStorage.setItem("token",user.token)
            navigate("/")
        }
    },[user]);

    const dispatch = useDispatch()


    const signupFunction = (e) => {
        e.preventDefault();
        if (passwordInput !== confirmInput) {
            alert("Both password are not same")
            return
        }
        dispatch(signup({ username: nameInput, email: emailInput, password: passwordInput }))
    }

    return (
        <div className="login-page-container">
            <div className="login-page-form">
                <form onSubmit={e => signupFunction(e)}>
                {user?.message !== undefined ? <p
                    style={{marginBottom:"1rem" ,color:"#835eea",fontWeight:"bolder"}}
                    >{user.message}</p> : ""}
                    
                    <div>
                        <label>Enter your Name</label>
                        <input
                            type="text"
                            placeholder="name"
                            onChange={e => setname(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label>Enter your Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            onChange={e => setemail(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label>Enter your Password</label>
                        <input
                            type="password"
                            placeholder="pass123"
                            onChange={e => setpassword(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label>Confirm your Password</label>
                        <input
                            type="password"
                            placeholder="pass123"
                            onChange={e => setconfirm(e.target.value)}
                            required />
                    </div>

                    <Button type="submit">Sign Up</Button>
                </form>
                <p>Already have an account &nbsp;<Link className="login-link" to="/login">Login</Link></p>
            </div>
        </div>

    );
}

export default Login;