// IMPORTS ///////////////////////////////////////////////////
// Import libraries --------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import components ------------------------------------------
import LayerDiv from "./LayerDiv";

// COMPONENT ///////////////////////////////////////////////////////
function Layer({
    children, type, enterKey, tab, triggerExit, layerFocus, changeLayerFocus,
    layerNum, focusableElements, width, height, startingTabIndex
}) {

    // TAB INDEX ///////////////////////////////////////////////////
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

    // ADD PROPS TO CHILD //////////////////////////////////////////
    const modifiedChild = cloneElement(children, {
        tabIndex: tabIndex,
        width: width,
        height: height,
        enterKey: enterKey,
        "triggerExit": triggerExit,
        "changeLayerFocus": changeLayerFocus,
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