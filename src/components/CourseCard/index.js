import { useNavigate } from "react-router-dom";
import "./index.css"

function CourseCard({title,image,id}) {

    const navigate=useNavigate()
    return ( 
        <div className="course-card-container" 
        onClick={()=>{navigate(`/detail/${id}`)}}
         >
            <div className="course-card-container-img">
                <img src={image} alt={title}/>
            </div>
            <div className="course-card-container-content">
                <p>{title}</p>
            </div>
        </div>
     );
}

export default CourseCard;