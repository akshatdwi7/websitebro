
import PropTypes from 'prop-types';

function Geet(props) {
  if (props.isLoggedIn) {
    return <h2>WELCOME BRO {props.username}</h2>;
  }
  else{

  return <h2>PLEASE LOGIN to continue</h2> ;}
}

// Define prop types
Geet.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
  };

export default Geet;
