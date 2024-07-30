import { useState } from 'react';

import DisplayCards from "../../components/DisplayCards";
import useGetInfo from "../../hooks/useGetInfo";
import "./index.css";
import Button from '../../components/UI/Button';

function Course() {


  const [page, setPage] = useState(1);
  const [data, loading, error] = useGetInfo(`http://localhost:8000/api/v1/course?page=${page}`);


  return (
    <>
      <div>
        {
          data.data=== undefined
            ? <p>No Result Found</p>
            : <DisplayCards title="All Courses" data={data?.data} />

        }
      </div>
      <div className='course-btn-container'>

        <Button
          onClick={page !== 1 ? () => { setPage(page - 1) } : () => { }}
        >
          Prev
        </Button>
        <p>{page}</p>
        <Button
          onClick={data.data !== undefined ? () => { setPage(page + 1) } : () => { }}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Course;