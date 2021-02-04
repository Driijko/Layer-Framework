// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Link from "../../2 Elements/Links/Link";
import LayerSection from "../0 Section Tools/LayerSection";
import Modals from "../0 Section Tools/Modals/Modals";
import NavBarMenu from "../../2 Elements/Menus/NavBarMenu";

// COMPONENT ////////////////////////////////////////////////////////////
function Page3Layer1({
    width, height, tabIndex, enterKey, triggerExit, setModalOpen, modalOpen
}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <Link width={width} spatial={[0, 20, 20, 4]}
                linkType={{
                    type: "modal", setModalOpen: setModalOpen,
                    modalIdentifier: "menu",
                }}
                deselect={modalOpen !== "menu"}
                linkStyle={{
                    number: 0, colors: ["red", "yellow", "pink"]
                }}
                focus={tabIndex === 1} enterSelect={tabIndex === 1 && enterKey}
            >OPEN MODAL</Link>

            <Link width={width} spatial={[0, 5, 20, 3]}
                linkType={{type:"external", url: "https://www.google.com"}}
                linkStyle={{number: 0, colors: ["green", "salmon", "white"]}}
                focus={tabIndex === 2} enterSelect={tabIndex === 2 && enterKey}
            >EXTERNAL</Link>

        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page3Layer1;