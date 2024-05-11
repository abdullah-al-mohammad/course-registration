import PropTypes from 'prop-types';
// import Credit from '../credit/Credit';

const Credits = ({credits}) => {
    console.log(credits);
    return (
        <div>
            <h3>Total Credits: {credits}</h3>
            {
                // credits.map((credit,idx) => <Credit key={idx} card={credit}></Credit>)
            }
        </div>
    );
};

Credits.propTypes = {
    credits: PropTypes.number.isRequired
};

export default Credits;