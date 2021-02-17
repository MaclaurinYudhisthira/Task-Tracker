import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick=(e)=>{
        console.log(e);
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button text="Add" onClick={onClick}></Button>
        </header>
    )
};

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    bgcolor:PropTypes.string,
    title:PropTypes.string
}

export default Header;
