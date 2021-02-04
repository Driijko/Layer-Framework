// IMPORTS //////////////////////////////////////////////////////////////
// Import libaries -----------------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import components --------------------------------------------------


// Import settings ------------------------------------------------------
import modalPhaseDurations from "./modalPhaseDurations";

function ModalLayer({
    children, identifier, setModalOpen
}) {

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
                setModalOpen(null);
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