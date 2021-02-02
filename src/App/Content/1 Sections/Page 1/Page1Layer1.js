// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Link from "../../2 Elements/Links/Link";
import LayerSection from "../0 Section Tools/LayerSection";

// COMPONENT ////////////////////////////////////////////////////////////
function Page1Layer1({
    width, height, tabIndex, enterKey, triggerExit, changeLayerFocus
}) {
    const containerSize = {width: width, height: height};
    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <LayerSection type="row" containerSize={containerSize} >
                <Link
                    spatial={[4, 2, 20, 5]}
                    linkType={{type: "section", linkTo: "/page2", triggerExit: triggerExit,}}
                    linkStyle={{number: 0, colors: ["red", "blue", "magenta"]}}
                    width={width}
                    enterSelect={tabIndex === 1 && enterKey}
                    focus={tabIndex === 1}
                >LINK 1</Link>

            </LayerSection>
            <LayerSection type="row" containerSize={containerSize} >

                <Link spatial={[0, 9, 20, 5]} width={width}
                    linkType={{type: "section", linkTo: "/page2", triggerExit: triggerExit,}}
                    linkStyle={{number: 0, colors: ["red", "blue", "magenta"],}}
                    focus={tabIndex === 2} enterSelect={tabIndex === 2 && enterKey}               
                >LINK 2</Link>

            </LayerSection>

            <LayerSection type="fixed" containerSize={containerSize} >

                <Link spatial={[0, 10, 20, 5]} width={width}
                    linkType={{type: "external", href: "https://www.google.com"}}
                    linkStyle={{number: 0, colors: ["red", "blue", "magenta"]}}
                    focus={tabIndex === 3} enterSelect={tabIndex === 3 && enterKey}
                >External Link</Link>

            </LayerSection>
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page1Layer1;