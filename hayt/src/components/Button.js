import React from 'react';
import './Button.css';


const STYLES = [
    "btn--primary",
    "btn--outline"
]



export const Button = ({
    children,
    type,
    onClick,
    buttonStyle
}) => { 
    // checking if any of these values have a buttonStyle
    // if it already has the buttonStyle then continue to use the 
    // style thats already present
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return(
        <button className={'btn ${checkButtonStyle}'} onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}