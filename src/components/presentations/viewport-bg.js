import React from 'react';
import '../../styles/viewport-bg.css';

const ViewportBg = (props) => {
    return <div className={'viewport-bg'}>
        <img className={'viewport-bg-img'} src={props.selectedPlace.viewport_url} alt={'unassigned'}/>
        <div className={'image-frame'}/>
        {props.children}
    </div>
};

export default ViewportBg;
