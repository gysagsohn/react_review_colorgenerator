import { useEffect, useState } from "react"


export default function GeneratorPage(){

    // Base colour from form
    let [initialBaseColour, setInitialBaseColour] = useState("#000000");

    // Base colour from global state
    let baseColourGlobal = useBaseColourGlobalData();
    let setBaseColourGlobal = useBaseColourGlobalDispatch();

    // On component mount, set local form value to global state value
    useEffect(() => {
        setFormBaseColour(baseColourGlobal);
    }, []);

    return(
        <div>
            {/* Base colour input form */}

            {/* CSS theme generator componet */}
        </div>
    )

};
