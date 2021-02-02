// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Link from "../../2 Elements/Links/Link";
import LayerSection from "../0 Section Tools/LayerSection";

// COMPONENT ////////////////////////////////////////////////////////////
function Page1Layer2({
    width, height, tabIndex, enterKey, triggerExit, changeLayerFocus
}) {
    const containerSize = {width: width, height: height};
    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <LayerSection type="column" containerSize={containerSize} >
                <Link
                    spatial={[0, 2, 20, 5]}
                    linkType={{type: "section", linkTo: "/page2", triggerExit: triggerExit,}}
                    linkStyle={{number: 0, colors: ["red", "blue", "magenta"]}}
                    width={width}
                    enterSelect={tabIndex === 1 && enterKey}
                    focus={tabIndex === 1}
                >LINK 4</Link>
            </LayerSection>

            <LayerSection type="column" containerSize = {containerSize} >
                <Link spatial={[0, 9, 20, 5]} width={width}
                    linkType={{type: "section", linkTo: "/page2", triggerExit: triggerExit,}}
                    linkStyle={{number: 0, colors: ["red", "blue", "magenta"],}}
                    focus={tabIndex === 2} enterSelect={tabIndex === 2 && enterKey}               
                >LINK 5</Link>

                <Link spatial={[0, 16, 20, 5]} width={width}
                    linkType={{type: "section", linkTo: "/page2", triggerExit: triggerExit,}}
                    linkStyle={{number: 0, colors: ["red", "blue", "magenta"],}}
                    focus={tabIndex === 3} enterSelect={tabIndex === 3 && enterKey}               
                >LINK 6</Link>
            </LayerSection>

        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page1Layer2;