// IMPORTS ///////////////////////////////////////////////
import styled from "styled-components";
import positioning from "../0 Element Tools/positioning";

// Import components ----------------------------------------------
import TextHeader0 from "../Text/Text Headers/TextHeader0";
import CloseModalLayerButton from "../Buttons/CloseModalLayerButton";
import LayerSection from "../../1 Sections/0 Section Tools/LayerSection";

// Import custom hooks ----------------------------------------------
import useTabCycle from "../../1 Sections/0 Section Tools/useTabCycle";

const Div = styled("div")`
    ${positioning([0, 0, 20, 30])}
    background-color: blue;
`;

// COMPONENT //////////////////////////////////////////////////////////
function TestModal({
    width, height, phase, triggerModalExit, tab, enterKey
}) {

    // TAB CYCLE /////////////////////////////////////////////////////
    const tabIndex = useTabCycle(tab, 4, false);

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

</LayerSection>

    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default TestModal;