import React, {useEffect, useState} from "react"
import Viewport from "./components/containers/viewport";
import {StoreProvider} from "./store/store";
import ViewportLoader from "./components/containers/viewport-loader";
import {useLoading} from "./store/store-api";
import {getPlacesByCategory} from "./config/config";


const App = () => {

    // const [category] = useState(CATEGORIES[0].name);
    const [category, setCategory] = useState(null);

    const [destinations, setDestionations] = useState(null);

    const {isLoading} = useLoading();
    // const vistedPlaces = getPlacesByCategory(props.category).places;
    useEffect(() => {
        console.log(category);
        if(category !== null) {
            const vistedPlaces = getPlacesByCategory(category).places;
            setDestionations(vistedPlaces)
        }
    }, [category]);

    return <div>
        {!category || isLoading ? <ViewportLoader category={category} setCategory={(value) => setCategory(value)}/> : <div/>}
        {destinations ? <Viewport destinations={destinations}  category={category} setCategory={(value) => setCategory(value)}/> : <div/>}
    </div>
};


export default App;
