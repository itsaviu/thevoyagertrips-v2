import React, {createRef, useEffect, useRef, useState} from 'react';
import ViewportContainer from '../presentations/viewport-container';
import Header from '../presentations/header';
import '../../styles/viewport.css';
import WindowDimensions from '../utils/windowDimensions';
import {doubleDigit} from '../../utils/utils';
import DestinationSelector from "../presentations/destination-selector";


const Viewport = (props) => {

    useEffect(() => {
        console.log('destination update');
        setCurrent(0);
    }, [props.destinations]);

    const [current, setCurrent] = useState(0);

    const visitedPlaces = props.destinations;

    console.log('Rerendering');
    console.log(visitedPlaces);


    const elRefs = useRef([]);
    elRefs.current = [];

    const counterRef = useRef(createRef());

    const {height} = WindowDimensions();

    let scrollActive = false;

    const configLength = visitedPlaces.length - 1;

    const viewPort = {
        position: 'relative',
        height: height,
        overflow: 'hidden'
    };

    const disableWheel = () => window.addEventListener('wheel', (e) => e.preventDefault(), {passive: false});

    const enableWheel = () => window.removeEventListener('wheel', (e) => e.preventDefault(), false);

    const commonScrollActive = (callback) => {
        setTimeout(() => {
            scrollActive = false;
            enableWheel();
            callback();
        }, 1200);
    };

    const scrollDown = () => {
        let newSelected = current + 1;
        counterRef.current.innerHTML = doubleDigit(newSelected);
        elRefs.current[current].current.style.setProperty('transition', 'all 700ms ease-in 0s');
        elRefs.current[current].current.classList.add('viewport-slideup');
        elRefs.current[newSelected].current.style.setProperty('transition', 'all 700ms ease-in 0s');
        elRefs.current[newSelected].current.classList.add('viewport-ontop');
        commonScrollActive(() => setCurrent(newSelected));
    };

    const scrollUp = () => {
        let newSelected = current - 1;
        counterRef.current.innerHTML = doubleDigit(current);
        elRefs.current[newSelected].current.style.setProperty('transition', 'all 700ms ease-in 0s');
        elRefs.current[newSelected].current.classList.remove('viewport-slideup');
        elRefs.current[current].current.style.setProperty('transition', 'all 700ms ease-in 0s');
        elRefs.current[current].current.classList.add('viewport-shrink');
        commonScrollActive(() => setCurrent(newSelected));
    };

    const onWheelEvent = (event) => {
        if (!scrollActive) {
            disableWheel();
            scrollActive = true;
            if (event.deltaY > 0 && current + 1 < elRefs.current.length) {
                scrollDown();
                return;
            } else if (event.deltaY < 0 && current - 1 >= 0) {
                scrollUp();
                return;
            }
            scrollActive = false;
            enableWheel();
        }

    };


    const onCategoryChange = (value) => {
        props.updateCategory(value);
    };


    Array(visitedPlaces.length).fill().map((_, i) => elRefs.current[i] = createRef());

    return <div style={viewPort}>
        <Header/>
        <DestinationSelector onCategoryChange={(value) => onCategoryChange(value)} category={props.category}/>
        <div className={'viewport-counter'}>
            <span ref={counterRef}>{doubleDigit(current + 1)}</span>
            <span style={{padding: '0 5px'}}>/</span>
            <span>{doubleDigit(configLength + 1)}</span>
        </div>
        {visitedPlaces.map((vistedPlace, i) =>
            <div key={vistedPlace.place} id={vistedPlace.place} ref={elRefs.current[i]}
                 style={{zIndex: `${visitedPlaces.length - i}`}}
                 className={`viewport ${i === current + 1 ? 'viewport-shrink' : ''}`}
                 onWheel={onWheelEvent}>
                <ViewportContainer selectedPlace={vistedPlace}/>
            </div>)}
    </div>
};

export default Viewport;
