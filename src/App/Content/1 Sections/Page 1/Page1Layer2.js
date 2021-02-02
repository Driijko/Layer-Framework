// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import TextHeader0 from "../../2 Elements/Text/Text Headers/TextHeader0"

// COMPONENT ////////////////////////////////////////////////////////////
function Page1Layer2({
    width, height, tabIndex, enterKey, triggerExit, changeLayerFocus
}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <TextHeader0 width={width} level={1} spatial={[0, 0, 20, 8]}>
                <h1>Page 1<br/> Layer 2</h1>
            </TextHeader0>
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page1Layer2;