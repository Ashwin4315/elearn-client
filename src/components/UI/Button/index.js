import "./index.css"

function Button({children,onClick,className,style}) {
    return ( 
        <button
        onClick={onClick}
        style={style}
        className="ui-btn"
        >
            {children}
        </button>
     );
}

export default Button;