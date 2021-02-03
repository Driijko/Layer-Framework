// IMPORTS ///////////////////////////////////////////////////////
// Import components ----------------------------------------------
import InteractiveElement from "../0 Element Tools/InteractiveElement";

// Link Types ----------------------------------------------------
import SectionLink from "./Link Types/SectionLink";
import ModalLink from "./Link Types/ModalLink";

// Link Styles ----------------------------------------------------
import LinkStyle0 from "./Link Styles/LinkStyle0";

// COMPONENT //////////////////////////////////////////////////////
function Link({
    linkType, linkStyle, spatial, width, focus, enterSelect, children,
    deselect
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
    else {

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

        if (linkType.type === "section") {

            linkTypeElement = (
                <SectionLink
                    triggerExit={linkType.triggerExit}
                    linkTo={linkType.linkTo}
                />
            );
        }
        else if (linkType.type === "modal") {

            linkTypeElement = (
                <ModalLink
                    openCloseModals={linkType.openCloseModals}
                    modalLayerNum={linkType.modalLayerNum}
                    modalIdentifier={linkType.modalIdentifier}
                />
            );
        };
    };

    // RENDER //////////////////////////////////////////////////////////
    return (
        <InteractiveElement
            focus={focus}
            enterSelect={enterSelect}
            deselect={deselect}
        >
            {linkStyleElement}
            {linkTypeElement ? linkTypeElement : <></>}
        </InteractiveElement>
    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default Link;