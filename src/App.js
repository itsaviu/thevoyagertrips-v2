import React, {useState} from "react"
import Viewport from "./components/containers/viewport";
import {CATEGORY} from "./config/config";


const App = () => {

    const [category] = useState(CATEGORY[0]);

    return <div className={"app"}>
        <Viewport category={category}/>
    </div>
};


export default App;
