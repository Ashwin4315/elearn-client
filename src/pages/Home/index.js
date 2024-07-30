
import DisplayCard from "../../components/DisplayCards";
import useGetInfo from "../../hooks/useGetInfo";
import "./index.css";

function Home() {

    const [course, loading, error] = useGetInfo("http://localhost:8000/api/v1/course/get-top-course");
    const [ncourse, nloading, nerror] = useGetInfo("http://localhost:8000/api/v1/course//newly-added-course");
    console.log(ncourse);
    return (
        <div className="home-container">
            <div>{
                course?.data === undefined ? <p></p> : <DisplayCard title="Top Rated Course" data={course?.data} />
            }
            </div>
            <div>{
                ncourse?.data === undefined ? <p></p> : <DisplayCard title="Newly Added Course" data={ncourse?.data} />
            }
            </div>
        </div>
    );
}

export default Home;