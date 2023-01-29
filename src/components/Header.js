import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, addToggle, add }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={add ? 'red' : 'green'} text={add ? 'Close' : 'Add'} onClick= {addToggle} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header 