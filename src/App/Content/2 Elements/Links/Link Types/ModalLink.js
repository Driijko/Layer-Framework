// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";

// COMPONENT ///////////////////////////////////////////////////////
function ModalLink({
    interactivity, openCloseModals, modalIdentifier, modalLayerNum,
    triggerDeselect
}) {
    
    // OPEN MODAL LAYER //////////////////////////////////////////////
    useEffect(()=> {
        if (interactivity === "selected") {
            openCloseModals(modalLayerNum, modalIdentifier);
        };
    },[interactivity]);

    // RENDER //////////////////////////////////////////////////////////////
    return (
        <>
        </>
    );   
};

// EXPORTS /////////////////////////////////////////////////////////////
export default ModalLink;