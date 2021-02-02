// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Link from "../../2 Elements/Links/Link";
import LayerSection from "../0 Section Tools/LayerSection";
import Modals from "../0 Section Tools/Modals/Modals";
import TextHeader0 from "../../2 Elements/Text/Text Headers/TextHeader0";

// COMPONENT ////////////////////////////////////////////////////////////
function Page3Layer1({
    width, height, tabIndex, enterKey, triggerExit, changeLayerFocus,
    renderedModals, openCloseModals
}) {

    const header = (
        <TextHeader0
            level={1}
            spatial={[0, 0, 20, 4]}
            width={width}
        ><h1>MODAL</h1></TextHeader0 >
    ); 

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <Modals
                width={width}
                renderedModals={renderedModals}
                openCloseModals={openCloseModals}
                modals={{
                    menu: {
                        component: header,
                        modalLayerNum: 0,
                    },
                }}
            />
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page3Layer1;