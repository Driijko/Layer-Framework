// IMPORTS ///////////////////////////////////////////////////
// Import libraries --------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import components ------------------------------------------
import LayerDiv from "./LayerDiv";
import ModalLayer from "./Modals/ModalLayer";

// COMPONENT ///////////////////////////////////////////////////////
function Layer({
    children, type, enterKey, tab, triggerExit, layerFocus, changeLayerFocus,
    layerNum, focusableElements, width, height, startingTabIndex, modals
}) {

    // MODAL LAYERS /////////////////////////////////////////////////////
    const [modalOpen, setModalOpen] = useState(null);

    // TAB INDEX  AND FOCUS ///////////////////////////////////////////////////
    const [tabIndex, setTabIndex] = useState(null);

    useEffect(()=> {
        if (layerFocus === layerNum) {
            if (startingTabIndex === "first") {
                setTabIndex(1);
            }
            else if (startingTabIndex === "last") {
                setTabIndex(focusableElements);
            };
        };
    },[layerFocus]);

    useEffect(()=> {
        // No modals are open, tab has been pressed, and this layer
        // is in focus.
        if (modalOpen === null && tab && layerFocus === layerNum) {
            if (tab === "forwards") {
                if (tabIndex === focusableElements) {
                    changeLayerFocus("forwards");
                    setTabIndex(0);
                }
                else {
                    setTabIndex(tabIndex + 1);
                };
            }
            else if (tab === "backwards") {
                if (tabIndex === 1) {
                    changeLayerFocus("backwards");
                    setTabIndex(0);
                }
                else {
                    setTabIndex(tabIndex - 1);
                };
            };
        }
    },[tab]);

    // ADD PROPS TO CHILD //////////////////////////////////////////
    const modifiedChild = cloneElement(children, {
        tabIndex: tabIndex,
        width: width,
        height: height,
        enterKey: enterKey,
        "triggerExit": triggerExit,
        "setModalOpen": setModalOpen,
        modalOpen: modalOpen,
    });
    
    // RENDER ////////////////////////////////////////////////////
    return (
        <LayerDiv type={type} >
            {modifiedChild}
            {modalOpen !== null ?
                <ModalLayer identifier={modalOpen} setModalOpen={setModalOpen}>
                    {
                        cloneElement(modals[modalOpen], {
                            "triggerExit": triggerExit,
                            width: width,
                            height: height,
                            tab: tab,
                            enterKey: enterKey,
                        })
                    }
                </ModalLayer>
                : null
            }
        </LayerDiv>
    );
};

// EXPORTS //////////////////////////////////////////////////////
export default Layer;