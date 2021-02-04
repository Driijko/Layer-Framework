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
    // initialRenderedModals, modalFocusableElements
}) {

    console.log(modals);

    const [modalOpen, setModalOpen] = useState("menu");

    // MODAL LAYERS //////////////////////////////////////////////////
    // const [renderedModals, setRenderedModals] = useState(initialRenderedModals);
    // const [modalOpen, setModalOpen] = useState(initialRenderedModals[0] !== null);
    // const [modalTabIndex, setModalTabIndex] = useState(
    //     initialRenderedModals.map(()=> 0)
    // );
    // const [currentModalLayer, setCurrentModalLayer] = useState(null);

    // useEffect(()=> {
    //     let highestOpenLayer = -1;
    //     let currentIndex = 0;
    //     while(initialRenderedModals[currentIndex] !== null) {
    //         highestOpenLayer++;
    //     };
    //     if (highestOpenLayer > -1) {
    //         setCurrentModalLayer(highestOpenLayer);
    //     };

    // },[]);

    // function openCloseModals(modalLayerNum, identifier) {

    //     const result = renderedModals.map((modalLayer, index)=> {
    //         if (index === modalLayerNum) {
    //             if (identifier === null) {
    //                 if (index === 0) {
    //                     setCurrentModalLayer(null);
    //                     setModalOpen(false);
    //                 }
    //                 else {
    //                     setCurrentModalLayer(modalLayerNum - 1);
    //                 };
    //             }
    //             else {
    //                 if (modalLayerNum === 0) {
    //                     setModalOpen(true);
    //                 };
    //                 setCurrentModalLayer(modalLayerNum);
    //             }
    //             return identifier;
    //         }
    //         else {
    //             return modalLayer;
    //         };
    //     });

    //     setRenderedModals(result);
    // };

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
        // Modal layer is open, "stealing" layer focus
        // else if (modalOpen && tab) {
        //     let currentModalTabIndex = modalTabIndex[currentModalLayer];
        //     if (tab === "forwards") {
        //         if (currentModalTabIndex === modalFocusableElements[currentModalLayer]) {
        //             currentModalTabIndex = 0;
        //         }
        //         else {
        //             currentModalTabIndex++;
        //         };
        //     }
        //     else if (tab === "backwards") {
        //         if (currentModalTabIndex === 0) {
        //             currentModalTabIndex = modalFocusableElements[currentModalLayer];
        //         }
        //         else {
        //             currentModalTabIndex--;
        //         };
        //     };

        //     setModalTabIndex(modalTabIndex.map((tabIndex, index)=> {
        //         if (index === currentModalLayer) {
        //             return currentModalTabIndex;
        //         }
        //         else {
        //             return tabIndex;
        //         };
        //     }));
        // };

    },[tab]);

    // ADD PROPS TO CHILD //////////////////////////////////////////
    const modifiedChild = cloneElement(children, {
        tabIndex: tabIndex,
        width: width,
        height: height,
        enterKey: enterKey,
        "triggerExit": triggerExit,
        "setModalOpen": setModalOpen,
        // "changeLayerFocus": changeLayerFocus,
        // renderedModals: renderedModals,
        // "openCloseModals": openCloseModals,
        // modalTabIndex: modalTabIndex,
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