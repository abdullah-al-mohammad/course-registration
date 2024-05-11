import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blogs from "./blogs/Blogs";

const Course = ({handleBookmark,handleCreditBookmark}) => {
    const [course,setCourse] = useState([])

    useEffect(()=>{
        fetch('course.json')
        .then(res=> res.json())
        .then(data =>setCourse(data))
    },[])
    return (
        <div className="row row-cols-3 justify-content-between">
            {
                course.map(data=> <Blogs 
                    key={data.id} data={data}
                    handleBookmark={handleBookmark}
                    handleCreditBookmark={handleCreditBookmark}
                ></Blogs>)
            }
        </div>
    );
};

Course.propTypes={
    handleBookmark: PropTypes.func,
    handleCreditBookmark: PropTypes.func
}

export default Course;