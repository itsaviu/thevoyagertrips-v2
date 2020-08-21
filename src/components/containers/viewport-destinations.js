import React from 'react';
import '../../styles/viewport-destinations.css';
import {Select} from 'antd';
import {CATEGORIES} from '../../config/config';

const {Option} = Select;

const ViewportDestinations = (props) => {

    const onOptionChange = (value) => {
        console.log(value);
        props.setCategory(value);
    };

    return <Select
        showSearch
        style={{width: 200}}
        placeholder='Select a destination'
        optionFilterProp='children'
        onChange={onOptionChange}
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        defaultValue={props.defaultValue}
    >
        {CATEGORIES.map((category, i) =>
            <Option key={i} value={category.name}>{category.displayName}</Option>)}
    </Select>

};


export default ViewportDestinations;
