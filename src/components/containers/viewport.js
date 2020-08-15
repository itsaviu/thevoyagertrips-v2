import React, {createRef, useRef, useState} from 'react';
import ViewportBg from "../presentations/viewport-bg";
import {VISITED_PLACES} from "../../config/config";
import Header from "../presentations/header";
import ViewportContent from "./viewport-content";
import '../../styles/viewport.css';
import WindowDimensions from "../utils/windowDimensions";

const Viewport = (props) => {

    const vistedPlaces = VISITED_PLACES[props.category];

    const [current, setCurrent] = useState(vistedPlaces.length - 1);

    const elRefs = useRef([]);
    const {height} = WindowDimensions();

    let scrollActive = false;

    const viewPort = {
        position: 'relative',
        height: height,
        overflow: 'hidden'
    };

    const disableWheel = () => window.addEventListener("wheel", (e) => e.preventDefault(), {passive: false});

    const enableWheel = () => window.removeEventListener("wheel", (e) => e.preventDefault(), false);

    const commonScrollActive = (callback) => {
        setTimeout(() => {
            console.log('scroll Enabled');
            scrollActive = false;
            enableWheel();
            callback();
        }, 1500);
    };

    const scrollDown = () => {
        let selected = current;
        console.log(selected);
        console.log(elRefs.current[selected].current);
        elRefs.current[selected].current.style.transition = 'all 700ms ease-in 0s';
        elRefs.current[selected].current.style.transform = `translate3d(0px, -100%, 0px)`;
        console.log(elRefs.current[selected].current.style.transform);
        commonScrollActive(() => setCurrent(current - 1));
    };

    const scrollUp = () => {
        let selected = current + 1;
        console.log(selected);
        console.log(elRefs.current[selected].current);
        elRefs.current[selected].current.style.transition = 'all 700ms ease-in 0s';
        elRefs.current[selected].current.style.transform = `translate3d(0px, 0px, 0px)`;
        console.log(elRefs.current[selected].current.style.transform);
        commonScrollActive(() => setCurrent(selected));
    };

    const onWheelEvent = (event) => {
        if (!scrollActive) {
            disableWheel();
            scrollActive = true;
            if (event.deltaY > 0 && current - 1 >=0) {
                scrollDown();
                return;
            } else if (event.deltaY < 0 && current + 1 < elRefs.current.length) {
                scrollUp();
                return;
            }
            scrollActive = false;
            enableWheel();
        }

    };

    Array(vistedPlaces.length).fill().map((_, i) => elRefs.current[i] = createRef());

    console.log(elRefs.current.length);
    return <div style={viewPort}>
        <Header/>
        {vistedPlaces.map((vistedPlace, i) =>
            <div key={i} id={vistedPlace.place} ref={elRefs.current[i]}
                 className={`viewport-container`} onWheel={onWheelEvent}>
                <ViewportBg selectedPlace={vistedPlace}>
                    <ViewportContent selectedPlace={vistedPlace}/>
                </ViewportBg>
            </div>)}
    </div>
};

export default Viewport;
