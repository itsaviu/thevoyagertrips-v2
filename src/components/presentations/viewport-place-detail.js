import React from 'react';
import {Col, Row} from 'antd';
import '../../styles/viewport-place-detail.css';
import { If } from 'react-control-statements'


const ViewportPlaceDetail = (props) => {

    const config = {
        discover: {
            color: 'white',
            icon: '+',
            value: 'Discover'
        }, close: {
            color: '#b34747',
            icon: '-',
            value: 'Close'
        }
    };

    const detail = !props.showVisits ?  config.discover : config.close;

    return <Row style={{height: '100%'}}>
        <Col span={2}/>
        <Col span={20}>
            <div className={'place-details'}>
                <div className={'place'}>{props.place}</div>
                <div className={'place-description'}>{props.description}</div>
                <If condition={ props.displayButton }>
                    <div className={'place-details-btn'} style={{color: detail.color}}
                         onClick={() => props.showVisitView()}>
                        <div className={'place-details-discover'}>
                        <span style={{position: 'relative', bottom: '1px'}}>
                            {detail.icon}
                        </span>
                        </div>
                        <div style={{margin: '2px 0px 0px 7px'}}>{detail.value}</div>
                    </div>
                </If>
            </div>
        </Col>
    </Row>
};

export default ViewportPlaceDetail;
