import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "../../components/UI/Button"
import "./index.css";
import { resetPassword } from "../../store/Action/authAction";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {

    const { token } = useParams()
    const { user } = useSelector(state => state.user)
    const [passwordInput, setpassword] = useState("");
    const [confirmInput, setconfirm] = useState("");


    const dispatch = useDispatch();
    const navigate=useNavigate()



    const resetFuntion = (e) => {
        e.preventDefault();
        if (passwordInput !== confirmInput) {
            alert("Both password are not same")
            return
        }
        dispatch(resetPassword({ passwordInput, token}))
        navigate("/login")
        
    }
    console.log(passwordInput);
    console.log("user", user);


    return (
        <div className="login-page-container">
            <div className="login-page-form">
                <form onSubmit={e => resetFuntion(e)}>
                    <div>
                        <label>Enter Your New Password</label>
                        <input
                            onChange={e => setpassword(e.target.value)}
                            type="password"
                            placeholder="pass1234"
                            required />
                    </div>
                    <div>
                        <label>Confirm Your New Password</label>
                        <input
                            type="password"
                            onChange={e => setconfirm(e.target.value)}
                            placeholder="pass1234"
                            required />
                    </div>
                    <Button type="submit">Reset Password</Button>
                </form>

            </div>

        </div>

    );
}

export default ResetPassword;