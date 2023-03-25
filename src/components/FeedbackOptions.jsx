// import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className="btns">
        {options.map(opt => (
          <button
            key={opt}
            onClick={onLeaveFeedback}
            className="btn"
            name={opt.toLowerCase()}
          >
            {opt}
          </button>
        ))}
      </div>
    </>
  );
};

// Statistics.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     }).isRequired
//   ).isRequired,
// };
