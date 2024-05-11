import PropTypes from 'prop-types';
import Bookmark from './bookmark/Bookmark';
// import Credit from '../credit/Credit';

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div className='shadow rounded px-5 ms-3'>
            <h5 className='text-capitalize'>course name</h5>
            {
              bookmarks.map((bookmark, idx) =>(
                <div key={idx}>
                    
                    <Bookmark bookmark={bookmark}></Bookmark>
                    {/* <Credit bookmark={bookmark}></Credit> */}
                </div>
            ))}

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmarks;