import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useEffect } from "react";
// import { getAllUser } from "../../store/Action/userAction";

function MyLearning() {

    const users = useSelector((state) => state.user.status);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllUser())
    // }, [dispatch])

    console.log("users", users)

    return (
        <>
        <p>xfdnvdosvn</p>
            {
                users?.data?.map((user) => {
                    return <p>{user.username}</p>
                })
            }
        </>

    );
}

export default MyLearning;