// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Link from "../../2 Elements/Links/Link";
import LayerSection from "../0 Section Tools/LayerSection";
import Modals from "../0 Section Tools/Modals/Modals";
import NavBarMenu from "../../2 Elements/Menus/NavBarMenu";

// COMPONENT ////////////////////////////////////////////////////////////
function Page3Layer1({
    width, height, tabIndex, enterKey, triggerExit, changeLayerFocus,
    renderedModals, openCloseModals
}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <Link width={width} spatial={[0, 0, 20, 4]}
                linkType={{
                    type: "modal", openCloseModals: openCloseModals,
                    modalLayerNum: 0, modalIdentifier: "menu",
                }}
                deselect={renderedModals[0] !== "menu"}
                linkStyle={{
                    number: 0, colors: ["red", "yellow", "pink"]
                }}
                focus={tabIndex === 1} enterSelect={tabIndex === 1 && enterKey}
            >OPEN MODAL</Link>
            <Modals
                width={width}
                renderedModals={renderedModals}
                openCloseModals={openCloseModals}
                modals={{
                    menu: {
                        component: <NavBarMenu width={width} />,
                        modalLayerNum: 0,
                    },
                }}
            />
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page3Layer1;