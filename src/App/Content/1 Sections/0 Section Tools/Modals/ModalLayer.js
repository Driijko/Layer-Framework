// IMPORTS //////////////////////////////////////////////////////////////
// Import libaries -----------------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import settings ------------------------------------------------------
import modalPhaseDurations from "./modalPhaseDurations";

function ModalLayer({openCloseModals, children, identifier, modalLayerNum}) {

    // PHASE /////////////////////////////////////////////////////////
    const [phase, setPhase] = useState("enter");

    useEffect(()=> {
        const timerId = setTimeout(
            ()=> {
                clearTimeout(timerId);
                setPhase("steady");
            }, 
            modalPhaseDurations[identifier].enter
        );
    },[]);

    function triggerModalExit() {
        setPhase("exiting");
        const timerId = setTimeout(
            ()=> {
                clearTimeout(timerId);
                openCloseModals(modalLayerNum, null);
            },
            modalPhaseDurations[identifier].exit
        );
    };

    // ADD PROPS TO CHILD /////////////////////////////////////////
    const modifiedChild = cloneElement(children, {
        phase: phase,
        "triggerModalExit": triggerModalExit,
    });

    return modifiedChild;
};

// EXPORTS ////////////////////////////////////////////////////////
export default ModalLayer;