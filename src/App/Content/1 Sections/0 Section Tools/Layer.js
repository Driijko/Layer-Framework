// IMPORTS ///////////////////////////////////////////////////
// Import libraries --------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import components ------------------------------------------
import LayerDiv from "./LayerDiv";

// COMPONENT ///////////////////////////////////////////////////////
function Layer({
    children, type, enterKey, tab, triggerExit, layerFocus, changeLayerFocus,
    layerNum, focusableElements, width, height, startingTabIndex,
    initialRenderedModals
}) {

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
        if (tab && layerFocus === layerNum) {
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

    // MODAL LAYERS //////////////////////////////////////////////////
    const [renderedModals, setRenderedModals] = useState(initialRenderedModals);
    
    function openCloseModals(modalLayerNum, identifier) {

        const result = renderedModals.map((modalLayer, index)=> {
            if (index === modalLayerNum) {
                return identifier;
            }
            else {
                return modalLayer;
            };
        });

        setRenderedModals(result);
    };

    // ADD PROPS TO CHILD //////////////////////////////////////////
    const modifiedChild = cloneElement(children, {
        tabIndex: tabIndex,
        width: width,
        height: height,
        enterKey: enterKey,
        "triggerExit": triggerExit,
        "changeLayerFocus": changeLayerFocus,
        renderedModals: renderedModals,
        "openCloseModals": openCloseModals,
    });
    
    // RENDER ////////////////////////////////////////////////////
    return (
        <LayerDiv type={type} >
            {modifiedChild}
        </LayerDiv>
    );
};

// EXPORTS //////////////////////////////////////////////////////
export default Layer;