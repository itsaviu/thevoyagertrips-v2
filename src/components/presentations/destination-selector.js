import React from 'react';
import {Dropdown, Menu, Select} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {CATEGORIES, getDisplayNameByCategory} from "../../config/config";
import '../../styles/destination-selector.css';

const {Option} = Select;


const DestinationSelector = (props) => {

    const updateCategory = (e) => {
        props.onCategoryChange(e.key);
    };

    const getSelector = () => {
        if (props.category) {
            const menu = <Menu>
                {CATEGORIES.map(category => <Menu.Item key={category.name} onClick={(e) => updateCategory(e)}>
                    {category.displayName}
                </Menu.Item>)}
            </Menu>;
            return <div>
                <span style={{fontFamily: 'Raleway, sans-serif'}}>Destination - </span>
                <Dropdown overlay={menu}>
                    <a className={'ant-dropdown-link menu-item'} onClick={e => e.preventDefault()}>
                        {getDisplayNameByCategory(props.category)} <DownOutlined/>
                    </a>
                </Dropdown>
            </div>;
        } else {
            return <Select
                showSearch
                style={{width: 200, position: 'absolute', zIndex: 5}}
                placeholder='Select a destination'
                optionFilterProp='children'
                onChange={(value) => props.onCategoryChange(value)}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                defaultValue={props.category}
            >
                {CATEGORIES.map(category => <Option key={category.name}
                                                    value={category.name}>{category.displayName}</Option>)}
            </Select>;
        }
    };

    return <div className={'destination-selector'}>
        {getSelector()}
    </div>

};

export default DestinationSelector;
