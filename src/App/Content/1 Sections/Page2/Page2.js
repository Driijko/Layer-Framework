// IMPORTS /////////////////////////////////////////////////////////
// Import section tool components --------------------------------------------
import Page from "../0 Section Tools/Page";

// Import layers ---------------------------------------------------------
import Page2Layer1 from "./Page2Layer1";
import Page2Layer2 from "./Page2Layer2";

// COMPONENT ///////////////////////////////////////////////////////
function Page2() {

    // RENDER /////////////////////////////////////////////////////
    return (
        <Page
            layers={[
                {layer: <Page2Layer1 />, type: "basic", focusableElements: 3},
                {layer: <Page2Layer2 />, type: "basic", focusableElements: 3}
            ]}
            gutter={<div></div>}
        />  
    );
};

// EXPORTS /////////////////////////////////////////////////////////////
export default Page2;