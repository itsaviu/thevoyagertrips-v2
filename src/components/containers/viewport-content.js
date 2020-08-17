import React, {useState} from 'react';
import {Col, Row} from 'antd';
import '../../styles/viewport-content.css';
import ViewportPlaceDetail from "../presentations/viewport-place-detail";
import ViewportCard from "../presentations/viewport-card";

const ViewportContent = (props) => {
    const [showVisits, setShowVisits] = useState(false);

    return <Row className={'viewport-content'}>
        <Col span={9} data-aos="fade-up">
            <ViewportPlaceDetail
                showVisitView={() => setShowVisits(!showVisits)}
                showVisits={showVisits}
                displayButton={typeof props.selectedPlace.visits !== "undefined"}
                place={props.selectedPlace.place}
                description={props.selectedPlace.description}/>
        </Col>
        <Col span={10} offset={5} className={'viewport-content-visits'} style={{ opacity: showVisits ? 1 : 0}}>
            <ViewportCard visits={props.selectedPlace.visits} hideVisitView={() => setShowVisits(!showVisits)}/>
        </Col>
    </Row>;

};

export default ViewportContent;
