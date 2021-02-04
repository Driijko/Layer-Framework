// IMPORTS ///////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import {useState} from "react";

import styled from "styled-components";
import positioning from "../0 Element Tools/positioning";

// Import components ----------------------------------------------
import TextHeader0 from "../Text/Text Headers/TextHeader0";
import CloseModalLayerButton from "../Buttons/CloseModalLayerButton";
import Link from "../Links/Link";
import LayerSection from "../../1 Sections/0 Section Tools/LayerSection";

// Import custom hooks ----------------------------------------------
import useTabCycle from "../../1 Sections/0 Section Tools/useTabCycle";

const Div = styled("div")`
    ${positioning([0, 0, 20, 30])}
    background-color: black;
`;

// COMPONENT //////////////////////////////////////////////////////////
function NavBarMenu({
    width, height, phase, triggerModalExit, triggerExit, tab, enterKey
}) {

    // MODAL LAYER ///////////////////////////////////////////////////
    const [modalOpen, setModalOpen] = useState(null);

    // TAB CYCLE /////////////////////////////////////////////////////
    const tabIndex = useTabCycle(tab, 3);

    // RENDER
    return (
        <LayerSection type="fixed" containerSize={{width: width, height: height}}>
            <Div />

            <TextHeader0
                width={width}
                spatial={[0, 0, 20, 4]}
                level={1}
            ><h1>{phase}</h1></TextHeader0>

            <CloseModalLayerButton width={width} spatial={[9, 5, 2, 2]}
                triggerModalExit={triggerModalExit}
                focus={tabIndex === 1} enterSelect={tabIndex === 1 && enterKey}
            />

            <Link width={width} spatial={[0, 7, 20, 4]}
                linkType={{type: "section", triggerExit: triggerExit, linkTo: "/page1"}}
                linkStyle={{number: 0, colors: ["red", "blue", "yellow"]}}
                focus={tabIndex === 2} enterSelect={tabIndex === 2 && enterKey}
            >Menu Link 1</Link>

            <Link width={width} spatial={[0, 12, 20, 4]}
                linkType={{type: "section", triggerExit: triggerExit, linkTo: "/page1"}}
                linkStyle={{number: 0, colors: ["red", "blue", "yellow"]}}
                focus={tabIndex === 3} enterSelect={tabIndex === 3 && enterKey}
            >Menu Link 2</Link>
        </LayerSection>
    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default NavBarMenu;