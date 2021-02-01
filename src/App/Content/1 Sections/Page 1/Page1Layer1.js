// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import TextHeader0 from "../../2 Elements/Text/Text Headers/TextHeader0"

// COMPONENT ////////////////////////////////////////////////////////////
function Page1Layer1({width, height, tabIndex, enterKey, triggerExit}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <TextHeader0 width={width} level={1} spatial={[0, 0, 20, 8]}>
                <h1>Page 1<br/> Layer 1</h1>
            </TextHeader0>
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page1Layer1;