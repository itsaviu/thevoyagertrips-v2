import React, {useState} from 'react';
import ViewportBg from "../presentations/viewport-bg";
import {VISITED_PLACES} from "../../config/config";
import Header from "../presentations/header";
import ViewportContent from "./viewport-content";

const Viewport = (props) => {
    const [selected, setSelected] = useState(0);

    const vistedPlace = VISITED_PLACES[props.category];

    return <div className={'viewport-slider'}>
        <ViewportBg selectedPlace={vistedPlace[selected]}/>
        <Header/>
        <ViewportContent selectedPlace={vistedPlace[selected]}/>
    </div>
};

export default Viewport;
