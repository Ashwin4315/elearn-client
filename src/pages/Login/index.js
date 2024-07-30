import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from "../../store/Action/authAction";
import { Link } from "react-router-dom"
import Button from "../../components/UI/Button"
import "./index.css";

function Login() {

    const { user } = useSelector(state => state.user)
    const [emailInput, setemail] = useState("");
    const [passwordInput, setpassword] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        if (user.token !== undefined) {
            localStorage.setItem("token", user.token)
            navigate("/")

        }
    }, [user])

  

    const dispatch = useDispatch()


    const loginFuntion = (e) => {
        e.preventDefault();
        // setlogin({email:emailInput,password:passwordInput})//upadate is slower
        // dispatch(login(loginInput))

        dispatch(login({ email: emailInput, password: passwordInput }))
    }

    console.log("user", user);

    return (
        <div className="login-page-container">

            <div className="login-page-form">
                <form onSubmit={e => { loginFuntion(e) }}>
                    {user?.message !== undefined ? <p
                    style={{marginBottom:"1rem" ,color:"#835eea",fontWeight:"bolder"}}
                    >{user.message}</p> : ""}

                    <div>
                        <label>Enter your Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            onChange={(e) => { setemail(e.target.value) }}
                            required />

                            
                    </div>


                    <div>
                        <label>Enter your Password</label>
                        <input
                            type="password"
                            placeholder="pass123"
                            onChange={(e) => { setpassword(e.target.value) }}
                            required />


                        <Link className="login-link-forgot" to="/forgot" >Forgot Password</Link>
                    </div>

                    <Button type="submit">Login</Button>
                </form>
                <p>Dont't have an account &nbsp;<Link className="login-link" to="/signup">Sign Up</Link></p>
            </div>
        </div>

    );
}

export default Login;