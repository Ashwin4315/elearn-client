import CourseCard from "../CourseCard";
import "./index.css";

function DisplayCard({ data,title }) {
    return (
        <div className="display-card-container">
            <h3>{title}</h3>
        <div className="display-card-sub-container">
            {data.map((course, index) => {

                return <CourseCard image={course?.image} id={course?._id} title={course?.courseName} />
            })}
        </div>
        </div>
    );
}

export default DisplayCard;