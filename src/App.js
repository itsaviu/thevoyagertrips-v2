import React, {useEffect, useState} from "react"
import Viewport from "./components/containers/viewport";
import {CATEGORIES, getPlacesByCategory} from "./config/config";


const App = () => {

    const [category, setCategory] = useState(CATEGORIES[0].name);

    const [destinations, setDestionations] = useState([]);

    useEffect(() => {
        setDestionations(getPlacesByCategory(category).places);
    }, [category]);

    const onUpdateCategory = (newCategory) => {
        setCategory(newCategory);
    };

    console.log('App : ' + category);
    return <div className={"app"}>
        {category ? <Viewport category={category} destinations={destinations} updateCategory={(category) => onUpdateCategory(category)}/> : <div/>}
    </div>
};


export default App;
