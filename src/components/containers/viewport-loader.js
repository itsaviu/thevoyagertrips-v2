import React from 'react';
import '../../styles/viewport-loading.css';
import Header from '../presentations/header';
import ViewportDestinations from "./viewport-destinations";
import {useLoading} from "../../store/store-api";

const ViewportLoader = (props) => {
    const {isLoading} = useLoading();
    const onOptionChange = (value) => {
        console.log(value);
        props.setCategory(value);
    };


    return <div className={'viewport-loader'}>
        <Header loader={true}/>
        {props.category === null ?
            <div className={'viewport-loader-options'}>
                <ViewportDestinations setCategory={(value) => onOptionChange(value)}/>
            </div> :
            <div>
                Loading
            </div>}
    </div>

};


export default ViewportLoader;
