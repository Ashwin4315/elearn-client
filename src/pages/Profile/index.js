import { useEffect } from 'react';
import {useNavigate}  from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Button from "../../components/UI/Button"
import "./index.css";
import { profile } from '../../store/Action/userAction';

function Profile() {



  const { user } = useSelector(state => state.user);
  const navigate= useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(profile(token))
  }, [dispatch])

  return (
    <div className="profile-container">
      <h3>Profile</h3>
      {
        user.message === undefined ?
          <div className="profile-container-content">
            <p>User Name : {user?.data?.username}</p>
            <p>Role : {user?.data?.role}</p>
            <p>Interested in : Web Developer</p>
            <p> You are a : Student</p>
          </div> :
          <div className='profile-not-login'>
            <p>Your are not logged in</p>
            <p>Login to view your Profile</p>
             <Button
              onClick={() => navigate("/login")}
            >Login</Button>
          </div>

      }

    </div>
  );
}

export default Profile;