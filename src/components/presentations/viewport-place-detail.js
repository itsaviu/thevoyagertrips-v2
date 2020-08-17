import React from 'react';
import {Button, Col, Row} from 'antd';
import '../../styles/viewport-place-detail.css';

const ViewportPlaceDetail = (props) => {

    return <Row style={{height: '100%'}}>
        <Col span={2}/>
        <Col span={20}>
            <div className={'place-details'}>
                <div className={'place'}>{props.place}</div>
                <div className={'place-description'}>{props.description}</div>
                {props.displayButton && !props.showVisits ? <Button className={'place-details-btn'} ghost={true}
                                             onClick={() => props.showVisitView()}>Discover</Button> : <div/>}
            </div>
        </Col>
    </Row>
};

export default ViewportPlaceDetail;
