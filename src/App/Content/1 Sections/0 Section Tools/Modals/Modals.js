// IMPORTS ////////////////////////////////////////////////////////
// Import libraries ------------------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import components --------------------------------------------------
import ModalLayer from "./ModalLayer";
import TextHeader0 from "../../../2 Elements/Text/Text Headers/TextHeader0"

// COMPONENT /////////////////////////////////////////////////////////
function Modals({renderedModals, openCloseModals, modals}) {

    const [modalsToRender, setModalsToRender] = useState(null);

    useEffect(()=> {
        let result = [];
        renderedModals.forEach((modalIdentifier, index) => {
            if (modalIdentifier !== null) {
                result.push(
                    <ModalLayer 
                        key={index} 
                        openCloseModals={openCloseModals}
                        identifier={modalIdentifier}
                        modalLayerNum={modals[modalIdentifier].modalLayerNum}
                    >
                        {modals[modalIdentifier].component}
                    </ModalLayer>
                );
            };
        });
        setModalsToRender(result);
    },[renderedModals, modals]);

    // RENDER //////////////////////////////////////////////////////////
    return (
        modalsToRender
    );
};

// EXPORTS ///////////////////////////////////////////////////////////
export default Modals;