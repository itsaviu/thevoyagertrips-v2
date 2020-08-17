import React, {createRef, useRef, useState} from 'react';
import '../../styles/viewport-card.css';
import {doubleDigit} from "../../utils/utils";


const ViewportCard = (props) => {

    const [selected, setSelected] = useState(0);

    const cardRef = useRef([]);

    const cardHolderRef = useRef(createRef());

    if (!props.visits) return <div/>;

    const hideView = () => {
        props.hideVisitView();
    };

    const onPrev = () => {
        let prev = selected - 1;
        if (prev < 0) return;
        let slickMovement = (prev) * 410;
        cardHolderRef.current.style.setProperty('transform', `translateX(-${slickMovement}px)`);
        setTimeout(() => {
            cardRef.current[prev].current.style.setProperty('opacity', `1`);
            setSelected(prev);
        }, 400);

    };

    const onNext = () => {
        let next = selected + 1;
        if (next === props.visits.length) return;
        let slickMovement = (next) * 410;
        cardHolderRef.current.style.setProperty('transform', `translateX(-${slickMovement}px)`);
        cardRef.current[selected].current.style.setProperty('opacity', `0`);
        cardRef.current[next].current.classList.add('viewport-card-container-active');
        setSelected(next);
    };

    Array(props.visits.length).fill().map((_, i) => cardRef.current[i] = createRef());

    return <div className={'viewport-card'}>
        <div className={'viewport-close'} onClick={() => hideView()}>Close & view the Background</div>
        <div ref={cardHolderRef} className={'viewport-card-layout'} data-aos="fade-up">
            {props.visits && props.visits.map((visit, i) =>
                <div key={i} ref={cardRef.current[i]}
                     className={`viewport-card-container viewport-card-container-inactive ${selected === i ? 'viewport-card-container-active' : ''}`}>
                    <div className={'viewport-card-title'}>{visit.name}</div>
                    <div>
                        <img src={visit.url} className={'viewport-card-img'} alt={'alt.img'}/>
                        {/*<div className={'card-overlay'}/>*/}
                    </div>
                </div>
            )}
        </div>
        {props.visits ?
            <div className={'viewport-card-slick'}>
                <i className={'fas fa-chevron-circle-left viewport-card-slick-pointer'} onClick={() => onPrev()}/>
                <i className={'fas fa-chevron-circle-right viewport-card-slick-pointer'} onClick={() => onNext()}/>
                <div className={'viewport-card-counter-divider'}/>
                <div className={'viewport-card-counter'}>
                    <span>{doubleDigit(selected + 1)}</span>
                    <span style={{margin: '0px 5px'}}>/</span>
                    <span>{doubleDigit(props.visits.length)}</span>
                </div>
            </div> : null}
    </div>
};

export default ViewportCard
