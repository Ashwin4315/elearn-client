import  { useEffect, useState } from 'react';
import Button from "../../components/UI/Button"
import { useSelector,useDispatch } from "react-redux";
import { forgotPassword } from "../../store/Action/authAction";
import "./index.css";

function ForgotPassword() {

    
    const {user} =useSelector(state=>state.user)
    const [emailInput, setemail] = useState("");


    const dispatch = useDispatch()
 


    const forgotFuntion = (e) => {
        e.preventDefault();
  
     dispatch(forgotPassword({email:emailInput}))
    
    }
console.log(emailInput);
    console.log("user",user);


    return (
        <div className="login-page-container">
            <div className="login-page-form">
                <form onSubmit={(e)=>forgotFuntion(e)}>
                {user?.message !== undefined ? <p
                    style={{marginBottom:"1rem" ,color:"#835eea",fontWeight:"bolder"}}
                    >{user.message}</p> : ""}

                    <div>
                        <label>Please Enter Your Email Address</label>
                        <input 
                        type="email"
                        onChange={(e)=>setemail(e.target.value)}
                         placeholder="example@gmail.com" 
                         required />
                    </div>
                    < Button type="submit">Submit</  Button>
                </form>

            </div>

        </div>

    );
}

export default ForgotPassword;