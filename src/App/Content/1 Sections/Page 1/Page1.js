// IMPORTS /////////////////////////////////////////////////////////
// Import section tool components --------------------------------------------
import Page from "../0 Section Tools/Page";

// Import layers ---------------------------------------------------------
import Page1Layer1 from "./Page1Layer1";
import Page1Layer2 from "./Page1Layer2";

// COMPONENT ///////////////////////////////////////////////////////
function Page1() {

    // RENDER /////////////////////////////////////////////////////
    return (
        <Page
            layers={[
                {layer: <Page1Layer1 />, type: "basic", focusableElements: 3},
                {layer: <Page1Layer2 />, type: "basic", focusableElements: 2}
            ]}
            gutter={<div></div>}
        />  
    );
};

// EXPORTS /////////////////////////////////////////////////////////////
export default Page1;