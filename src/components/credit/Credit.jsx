import PropTypes from 'prop-types';

const Credit = ({card}) => {
    console.log(card);
    const {credit} = card
    return (
        <div>
            <h5>credit: {credit}</h5>
        </div>
    );
};

Credit.propTypes = {
    card: PropTypes.object
};

export default Credit;