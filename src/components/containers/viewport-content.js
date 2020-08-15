import React from 'react';
import {Col, Row} from 'antd';
import '../../styles/viewport-content.css';
import ViewportPlaceDetail from "../presentations/viewport-place-detail";


const ViewportContent = (props) => {
    return <Row className={'viewport-content'}>
        <Col span={9} data-aos="fade-up">
            <ViewportPlaceDetail place={props.selectedPlace.place} description={props.selectedPlace.description}/>
        </Col>
        <Col span={15}>
        </Col>
    </Row>;

};

export default ViewportContent;
