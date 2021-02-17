const Button = ({ bgcolor,text,onClick}) => {
    return (
        <button style={{background:bgcolor}} className="btn" onClick={onClick}>{text}</button>
    )
}

Button.defaultProps={
    bgcolor:'Black',
    text:'Add'
}
export default Button
