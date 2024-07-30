import { useState,useEffect } from 'react';
import useGetInfo from "../../hooks/useGetInfo";
import Button from "../../components/UI/Button"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VideoPlayer from "../../components/VideoPlayer";
import { profile } from '../../store/Action/userAction';



function Detail() {

    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const { id } = useParams()

    const [data, loading, error] = useGetInfo(`http://localhost:8000/api/v1/course/${id}`);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        dispatch(profile(token))
      }, [dispatch])
      console.log("dddddd",user)
      console.log("d",user?.data?._id)

    
    const handleClosey= () => {

        setOpen(false);
      
        navigate(`/content/${data?.data?._id}`)

    };
    const handleClose = () => {

        setOpen(false);

    };


    return (

        <div className="detail-container">

            <h3>{data?.data?.courseName}</h3>

            <div className="detail-video-container">
                <VideoPlayer yid={`https://www.youtube.com/watch?v=${data?.data?.youtubeOId}`} />
            </div>
            <div className="detail-container-info">
                <h3>{data?.data?.courseName}</h3>
                <div className="detail-container-info-sub">
                    <p><span>Duration: </span>{data?.data?.duration}</p>
                    <p><span>Rating: </span> {data?.data?.rating}</p>
                </div>
                <p
                ><span>Description: </span>
                    {data?.data?.courseDescription}
                </p>

                <div>
                    <p>language: {data?.data?.language}</p>
                    <p>Domain: {data?.data?.field}</p>
                </div>
                <div>
                    {data?.data?.prerequisites === undefined ?
                        <div
                            style={{ margin: "2rem 0rem 1rem 0rem" }}
                        >
                            <h3
                                style={{ margin: "2rem 0rem 1rem 0rem" }}

                            >Prerequisites</h3>
                            <p>&bull;This is a complete beginner's Course</p>
                        </div>
                        :
                        data?.data?.whatYouLearn.course_name === undefined ? "" :
                            <div>
                                <h3>What you'll learn in this course</h3>
                                <p
                                    style={{ marginTop: "1rem" }}
                                >Course overview of : {data?.data?.whatYouLearn.course_name}</p>
                                <p
                                    style={{ marginTop: "1rem" }}
                                ><span
                                    style={{ color: "grey" }}
                                >Final project of this Course : </span>{data?.data?.whatYouLearn.final_project}</p>


                                <div
                                    style={{ margin: "2rem 0rem 1rem 0rem" }}
                                >
                                    <h3
                                        style={{ margin: "2rem 0rem 1rem 0rem" }}

                                    >Prerequisites</h3>
                                    <p>&bull; {data?.data?.prerequisites}</p>
                                </div>
                            </div>
                    }

                    <div
                        style={{ marginTop: "2rem" }}

                    >
                        <h3>Topics Covered in this Course</h3>
                        <ul
                            style={{ marginTop: "2rem" }}

                        >

                            {data?.data?.whatYouLearn?.topics?.map((top, inde) => {
                                return <div> <li
                                    style={{ listStyle: "outside", margin: "1rem 0rem 1rem 0rem" }}
                                >{top.topic}</li>
                                    <div>{top?.subtopics.map((sub, index) => {
                                        return <ul
                                        >
                                            <li>{index + 1}{`) `}{sub}</li>
                                        </ul>
                                    })}</div>
                                </div>
                            })}
                        </ul>
                    </div>
                    {/* <div className="detail-purchase-btn" style={{ marginTop: "2rem" }} >
                        <Button
                            onClick={() => settoggle(!toggle)}
                        ><Link
                            onClick={() => settoggle(!toggle)}
                        // to={`/content/${data?.data?._id}`}
                        >Enroll course</Link></Button>

                    </div> */}

                    <Box>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Enroll Course
                        </Button>
                        <Dialog
                        PaperProps={{
                            style: {
                              backgroundColor: 'black',
                              boxShadow: 'none',
                            },
                          }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            
                            <DialogTitle id="alert-dialog-title" color={"blueviolet"}>
                                {"Enroll Course"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description" color={"white"}>
                                  Are you sure to enroll for  {data?.data?.courseName}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClosey}>yes</Button>
                                <Button onClick={handleClose} autoFocus>
                                    cancel
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>

                </div>
            </div>

        </div>

    );
}

export default Detail;