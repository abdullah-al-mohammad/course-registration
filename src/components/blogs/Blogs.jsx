import PropTypes from 'prop-types';
import { GoBook } from "react-icons/go";
import { LuDollarSign } from "react-icons/lu";

const Blogs = ({data,handleBookmark}) => {
   const {img,course_name,details,price,credit} = data;
    return (
        <div className='gy-3'>
           <div className="card rounded-4 mb-3 h-100">
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{course_name}</h5>
                    <p className="card-text">{details}</p>
                    <div className='d-flex justify-content-between'>  
                        <p><LuDollarSign /> Price: {price}</p>
                        <p><GoBook /> Credit: {credit}</p>
                    </div>
                    <a href="#" onClick={
                        ()=>{handleBookmark(data)}
                    } className="btn btn-primary w-100">Select</a>
                </div>
            </div>
        </div>
    );
};

Blogs.propTypes = {
    data: PropTypes.object,
    handleBookmark: PropTypes.func,
    handleCreditBookmark: PropTypes.func
};

export default Blogs;