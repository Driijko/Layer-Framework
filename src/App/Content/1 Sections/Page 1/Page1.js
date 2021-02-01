// IMPORTS /////////////////////////////////////////////////////////
// Import section tool components --------------------------------------------
import Page from "../0 Section Tools/Page";
import Layer from "../0 Section Tools/Layer";

// Import layers ---------------------------------------------------------
import Page1Layer1 from "./Page1Layer1";

// COMPONENT ///////////////////////////////////////////////////////
function Page1() {

    // RENDER /////////////////////////////////////////////////////
    return (
        <Page layerNum={1}>
            <Layer
                type="basic"
                focus={{
                    layerNum: 1,
                    focusableElement: 3,
                }}
            >
                <Page1Layer1 />
            </Layer>
        </Page>
    );
};

// EXPORTS /////////////////////////////////////////////////////////////
export default Page1;