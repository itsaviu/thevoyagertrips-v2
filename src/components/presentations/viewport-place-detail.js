import React from 'react';
import {Col, Row} from 'antd';
import '../../styles/viewport-place-detail.css';

const ViewportPlaceDetail = (props) => {
    return <Row style={{height: '100%'}}>
        <Col span={2}>

        </Col>
        <Col span={20}>
            <div className={'place-details'}>
                <div className={'place'}>{props.place}</div>
                <div className={'place-description'}>{props.description}</div>
            </div>
        </Col>
    </Row>
};

export default ViewportPlaceDetail;
