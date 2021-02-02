// IMPORTS ///////////////////////////////////////////////////////
// Import components ----------------------------------------------
import InteractiveElement from "../0 Element Tools/InteractiveElement";

// Link Types ----------------------------------------------------
import SectionLink from "./Link Types/SectionLink";

// Link Styles ----------------------------------------------------
import LinkStyle0 from "./Link Styles/LinkStyle0";

// COMPONENT //////////////////////////////////////////////////////
function Link({
    linkType, linkStyle, spatial, width, focus, enterSelect, children
}) {

    // Component variables ---------------------------------------
    let linkTypeElement;
    let linkStyleElement;

    // External links -------------------------------------------
    if (linkType.type === "external") {

        if (linkStyle.number === 0) {
            linkStyleElement = (
                <LinkStyle0
                    width={width}
                    spatial={spatial}
                    colors={linkStyle.colors}
                    href={linkType.href}
                    target="_blank"
                >
                    {children}
                </LinkStyle0>
            );
        };
    }
    // Section links ----------------------------------------------
    else if (linkType.type === "section") {

        if (linkStyle.number === 0) {
            linkStyleElement = (
                <LinkStyle0
                    width={width}
                    spatial={spatial}
                    colors={linkStyle.colors}
                >
                    {children}
                </LinkStyle0>
            );
        };

        linkTypeElement = (
            <SectionLink
                triggerExit={linkType.triggerExit}
                linkTo={linkType.linkTo}
            />
        );
    };

    // RENDER //////////////////////////////////////////////////////////
    return (
        <InteractiveElement
            focus={focus}
            enterSelect={enterSelect}
        >
            {linkStyleElement}
            {linkTypeElement ? linkTypeElement : <></>}
        </InteractiveElement>
    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default Link;