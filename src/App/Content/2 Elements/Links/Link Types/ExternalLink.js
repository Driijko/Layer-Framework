// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";

// COMPONENT ///////////////////////////////////////////////////////
function ExternalLink({
    interactivity, url
}) {
    
    // OPEN MODAL LAYER //////////////////////////////////////////////
    useEffect(()=> {
        if (interactivity === "selected") {
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) {
                newWindow.opener = null;
            };
        };
    },[interactivity]);

    // RENDER //////////////////////////////////////////////////////////////
    return (
        <>
        </>
    );   
};

// EXPORTS /////////////////////////////////////////////////////////////
export default ExternalLink;