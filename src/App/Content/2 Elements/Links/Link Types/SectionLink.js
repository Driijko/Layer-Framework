// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";

// COMPONENT ///////////////////////////////////////////////////////
function SectionLink({
    interactivity, linkTo, triggerExit, triggerDeselect
}) {
    
    // TRIGGER PAGE EXIT //////////////////////////////////////////////
    useEffect(()=> {
        if (interactivity === "selected") {
            triggerExit(linkTo);
        };
    },[interactivity]);

    // RENDER //////////////////////////////////////////////////////////////
    return (
        <>
        </>
    );   
};

// EXPORTS /////////////////////////////////////////////////////////////
export default SectionLink;