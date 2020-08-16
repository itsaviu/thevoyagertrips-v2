import React, {createRef, useRef, useState} from 'react';
import ViewportContainer from "../presentations/viewport-container";
import {VISITED_PLACES} from "../../config/config";
import Header from "../presentations/header";
import '../../styles/viewport.css';
import WindowDimensions from "../utils/windowDimensions";

const Viewport = (props) => {

    const vistedPlaces = VISITED_PLACES[props.category];

    const [current, setCurrent] = useState(vistedPlaces.length - 1);

    const elRefs = useRef([]);

    const slickContainerRef = useRef(createRef());

    const slickRef = useRef([]);

    const counterRef = useRef(createRef());

    const {height} = WindowDimensions();

    let scrollActive = false;

    const configLength = vistedPlaces.length - 1;

    const viewPort = {
        position: 'relative',
        height: height,
        overflow: 'hidden'
    };

    const disableWheel = () => window.addEventListener("wheel", (e) => e.preventDefault(), {passive: false});

    const enableWheel = () => window.removeEventListener("wheel", (e) => e.preventDefault(), false);

    const commonScrollActive = (callback) => {
        setTimeout(() => {
            scrollActive = false;
            enableWheel();
            callback();
        }, 1200);
    };

    const scrollDown = () => {
        let selected = current;
        let slickMovement = (elRefs.current.length - selected) * 100;
        console.log(counterRef.current);
        counterRef.current.innerHTML = doubleDigit((configLength + 1) - (selected - 1));
        console.log(counterRef.current.innerHTML);
        slickContainerRef.current.style.setProperty('transform', `translate3d(0px, -${slickMovement}px, 0px)`);
        slickRef.current[selected].current.classList.remove('viewport-slick-active');
        slickRef.current[selected - 1].current.classList.add('viewport-slick-active');
        elRefs.current[selected].current.style.setProperty('transition', 'all 700ms ease-in 0s');
        elRefs.current[selected].current.style.setProperty('transform', 'translate3d(0px, -100%, 0px)');
        elRefs.current[selected - 1].current.style.setProperty('transition', 'all 700ms ease-in 0s');
        elRefs.current[selected - 1].current.style.setProperty('transform', 'translate3d(0px, 0px, 0px)', 'important');
        commonScrollActive(() => setCurrent(current - 1));
    };

    const scrollUp = () => {
        let selected = current + 1;
        let slickMovement = (elRefs.current.length - selected - 1) * 100;
        counterRef.current.innerHTML = doubleDigit((configLength + 1 ) - selected);
        slickContainerRef.current.style.setProperty('transform', `translate3d(0px, -${slickMovement}px, 0px)`);
        elRefs.current[selected].current.style.setProperty('transition', 'all 700ms ease 0s');
        slickRef.current[current].current.classList.remove('viewport-slick-active');
        slickRef.current[selected].current.classList.add('viewport-slick-active');
        elRefs.current[selected].current.style.setProperty('transform', 'translate3d(0px, 0px, 0px)');
        elRefs.current[selected].current.style.setProperty('z-index', '0');
        elRefs.current[current].current.style.setProperty('transition', 'all 700ms ease 0s');
        elRefs.current[current].current.style.setProperty('transform', 'translate3d(0px, 400px, 0px)');
        commonScrollActive(() => setCurrent(selected));
    };

    const onWheelEvent = (event) => {
        if (!scrollActive) {
            disableWheel();
            scrollActive = true;
            if (event.deltaY > 0 && current - 1 >= 0) {
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

    const doubleDigit = (value) => value < 10 ? '0' + value : value;

    Array(vistedPlaces.length).fill().map((_, i) => elRefs.current[i] = createRef());
    Array(vistedPlaces.length).fill().map((_, i) => slickRef.current[i] = createRef());

    return <div style={viewPort}>
        <Header/>
        <div className={'viewport-slick'}>
            <div className={'viewport-slick-line'}/>
            <div className={'viewport-slick-container'} ref={slickContainerRef}>
                {vistedPlaces.map((_, i) => <div key={i} ref={slickRef.current[configLength - i]}
                                                 className={`viewport-slick-index ${configLength - i === current ? 'viewport-slick-active' : ''}`}>{i + 1}</div>)}
            </div>
        </div>
        <div className={'viewport-counter'}>
            <span ref={counterRef}>{doubleDigit(configLength - current + 1)}</span>
            <span style={{padding: '0 5px'}}>/</span>
            <span>{doubleDigit(configLength + 1)}</span>
        </div>
        {vistedPlaces.map((vistedPlace, i) =>
            <div key={i} id={vistedPlace.place} ref={elRefs.current[i]}
                 className={`viewport ${i !== current ? 'viewport-shrink' : 'viewport-ontop'}`}
                 onWheel={onWheelEvent}>
                <ViewportContainer selectedPlace={vistedPlace}/>
            </div>)}
    </div>
};

export default Viewport;
