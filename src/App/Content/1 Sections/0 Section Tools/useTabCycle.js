// IMPORTS ///////////////////////////////////////////////////////////
import {useState, useEffect} from "react";

function useTabCycle(tab, focusableElements, modalOpen) {

    const [tabIndex, setTabIndex] = useState(0);

    useEffect(()=> {
        if (tab && modalOpen === false) {
            if (tab === "forwards") {
                if (tabIndex === focusableElements) {
                    setTabIndex(0);
                }
                else {
                    setTabIndex(tabIndex + 1);
                };
            }
            else if (tab === "backwards") {
                if (tabIndex === 0) {
                    setTabIndex(focusableElements);
                }
                else {
                    setTabIndex(tabIndex - 1);
                };
            };
        };
    },[tab, focusableElements, modalOpen]);

    return tabIndex;

};

export default useTabCycle;
