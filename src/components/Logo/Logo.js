import React from 'react';
import './Logo.scss'

const Logo = () => {
    return (
        <div className='logo'>
            <span>
                <span className='logo__letter_colored'>W</span>eather
            </span>
            <span>
                <span className='logo__letter_colored'>W</span>idget
            </span>
        </div>
    );
}

export default Logo;