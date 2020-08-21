import React from 'react';
import '../../styles/header.css';

const Header = (props) => {
    return <div className={`header ${props.loader? 'destination-header': ''}`}>
            <div className={'header-item-logo'}> THE VOYAGER TRIP</div>
            <div className={'header-item-caption'}>Travel Beyond</div>
    </div>
};

export default Header;
