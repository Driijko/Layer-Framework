// IMPORTS ///////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import Page from "../../0 Section Tools/Page";
import HomePageLayer1 from "./HomePageLayer1";
import HomePageLayer2 from "./HomePageLayer2";

// COMPONENT ////////////////////////////////////////////////
function HomePage() {

    // RENDER ///////////////////////////////////////////////////
    return (
        <Page
            layers={[
                {
                    layer: <HomePageLayer1 />,
                    type: "column",
                    focusableElements: 1
                },
                {
                    layer: <HomePageLayer2 />,
                    type: "basic",
                    focusableElements: 0,
                }
            ]}
            gutter={<div></div>}
        />
    );
};

export default HomePage;