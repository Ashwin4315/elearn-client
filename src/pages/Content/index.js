import { Link, useParams } from "react-router-dom";
import useGetInfo from "../../hooks/useGetInfo";
import Button from "../../components/UI/Button"
import "./index.css";
import { useState } from "react";


function Content() {

    const { id } = useParams()

    const [data, loading, error] = useGetInfo(`http://localhost:8000/api/v1/content/${id}`);
    const [content, setcontent] = useState(0)
    console.log("content", data)

    return (
        <div className="content-container">


            <h2>{data?.data?.contents?.content[content].name}</h2>
            <p>{data?.data?.contents?.content[content].info}</p>

            <div className="detail-purchase-btn" style={{ marginTop: "2rem", textAlign: "center" }} >
                {content === 0 ? "" :
                    <Button
                        onClick={() => { setcontent(content - 1) }}
                    >Prev</Button>
                }

                {content === data?.data?.contents?.content.length - 1 ?
                        <Button><Link to={`/quiz/${id}`}>Start Quiz</Link></Button>
                        :
                    <Button
                        onClick={() => { setcontent(content + 1) }}
                    >Next</Button>
                }

            </div>

        </div>


    );
}

export default Content;