// IMPORTS /////////////////////////////////////////////////////////
// Import section tool components --------------------------------------------
import Page from "../0 Section Tools/Page";

// Import layers ---------------------------------------------------------
import Page3Layer1 from "./Page3Layer1";
import Page3Layer2 from "./Page3Layer2";

// COMPONENT ///////////////////////////////////////////////////////
function Page3() {

    // RENDER /////////////////////////////////////////////////////
    return (
        <Page
            layers={[
                {
                    layer: <Page3Layer1 />, 
                    type: "basic", 
                    focusableElements: 1,
                    initialRenderedModals: [null],
                },
                {
                    layer: <Page3Layer2 />, 
                    type: "column", 
                    focusableElements: 3
                },
            ]}
            gutter={<div></div>}
        />  
    );
};

// EXPORTS /////////////////////////////////////////////////////////////
export default Page3;