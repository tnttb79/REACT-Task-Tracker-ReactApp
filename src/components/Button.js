import PropTypes from 'prop-types'
const Button = ({ color, text, onClick }) =>
  (
    <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
      {text}
    </button>
  );

Button.defaultProps = {
  color: 'steelblue'
}
Button.propType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button; 
