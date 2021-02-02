// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Link from "../../2 Elements/Links/Link";

// COMPONENT ////////////////////////////////////////////////////////////
function Page2Layer1({
    width, height, tabIndex, enterKey, triggerExit, changeLayerFocus
}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
            <Link
                spatial={[0, 2, 20, 5]}
                linkType={{type: "section", linkTo: "/page1", triggerExit: triggerExit,}}
                linkStyle={{number: 0, colors: ["red", "blue", "magenta"]}}
                width={width}
                enterSelect={tabIndex === 1 && enterKey}
                focus={tabIndex === 1}
            >LINK LINK</Link>

            <Link spatial={[0, 9, 20, 5]} width={width}
                linkType={{type: "section", linkTo: "/page1", triggerExit: triggerExit,}}
                linkStyle={{number: 0, colors: ["red", "blue", "magenta"],}}
                focus={tabIndex === 2} enterSelect={tabIndex === 2 && enterKey}               
            >LINK 2</Link>

            <Link spatial={[0, 16, 20, 5]} width={width}
                linkType={{type: "section", linkTo: "/page1", triggerExit: triggerExit,}}
                linkStyle={{number: 0, colors: ["red", "blue", "magenta"],}}
                focus={tabIndex === 3} enterSelect={tabIndex === 3 && enterKey}               
            >LINK 3</Link>
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default Page2Layer1;