// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";

// COMPONENT ///////////////////////////////////////////////////////
function ModalLink({
    interactivity, setModalOpen, modalIdentifier,
}) {
    
    // OPEN MODAL LAYER //////////////////////////////////////////////
    useEffect(()=> {
        if (interactivity === "selected") {
            setModalOpen(modalIdentifier);
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