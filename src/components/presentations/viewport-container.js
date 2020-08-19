import React from 'react';
import '../../styles/viewport-container.css';
import ViewportContent from "../containers/viewport-content";

const ViewportContainer = (props) => {
    return <div className={'viewport-container'}>
        <img className={'viewport-container-img'} src={props.selectedPlace.viewport_url} alt={'unassigned'}/>
        <ViewportContent selectedPlace={props.selectedPlace}/>
    </div>
};

export default ViewportContainer;
