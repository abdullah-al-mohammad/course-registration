import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    const {course_name} = bookmark
    return (
        <div className='g-3'>
            <h6>
                <ol>
                    <li>{course_name}</li>
                    </ol>
                </h6>
               
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;