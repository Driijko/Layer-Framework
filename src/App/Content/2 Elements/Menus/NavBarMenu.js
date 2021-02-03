// IMPORTS ///////////////////////////////////////////////
import {useEffect} from "react";
// Import components ----------------------------------------------
import TextHeader0 from "../Text/Text Headers/TextHeader0";
import CloseModalLayerButton from "../Buttons/CloseModalLayerButton";

// COMPONENT //////////////////////////////////////////////////////////
function NavBarMenu({width, phase, triggerModalExit}) {

    // useEffect(()=> {
    //     const timerId = setTimeout(
    //         ()=> {
    //             triggerModalExit();
    //         },
    //         2000
    //     );
    // },[]);

    // RENDER
    return (
        <>
            <TextHeader0
                width={width}
                spatial={[0, 0, 20, 4]}
                level={1}
            ><h1>{phase}</h1></TextHeader0>
            <CloseModalLayerButton
                width={width}
                spatial={[0, 10, 2, 2]}
                triggerModalExit={triggerModalExit}
            />
        </>
    )
}

// EXPORTS ////////////////////////////////////////////////////////
export default NavBarMenu;