// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";

// COMPONENT ///////////////////////////////////////////////////////
function ExternalLink({
    interactivity, url, triggerDeselect
}) {

    
    // OPEN MODAL LAYER //////////////////////////////////////////////
    useEffect(()=> {
        let timerId;
        if (interactivity === "selected") {
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) {
                newWindow.opener = null;
            };
            timerId = setTimeout(()=> {
                clearTimeout(timerId);
                triggerDeselect();
            }, 1000)
        };
        return ()=> clearTimeout(timerId);
    },[interactivity, url, triggerDeselect]);

    // RENDER //////////////////////////////////////////////////////////////
    return (
        <>
        </>
    );   
};

// EXPORTS /////////////////////////////////////////////////////////////
export default ExternalLink;