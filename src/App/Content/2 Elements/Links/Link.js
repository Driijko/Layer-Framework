// IMPORTS ///////////////////////////////////////////////////////
// Import components ----------------------------------------------
import InteractiveElement from "../0 Element Tools/InteractiveElement";

// Link Types ----------------------------------------------------
import SectionLink from "./Link Types/SectionLink";
import ModalLink from "./Link Types/ModalLink";
import ExternalLink from "./Link Types/ExternalLink";

// Link Styles ----------------------------------------------------
import LinkStyle0 from "./Link Styles/LinkStyle0";

// COMPONENT //////////////////////////////////////////////////////
function Link({
    linkType, linkStyle, spatial, width, focus, enterSelect, children,
    deselect
}) {

    // LINK STYLES /////////////////////////////////////////////////////
    let linkStyleElement;

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

    // LINK TYPES /////////////////////////////////////////////////
    let linkTypeElement;

    // Section links ---------------------------------------------------
    if (linkType.type === "section") {

        linkTypeElement = (
            <SectionLink
                triggerExit={linkType.triggerExit}
                linkTo={linkType.linkTo}
            />
        );
    }
    // Modal links -----------------------------------------------------
    else if (linkType.type === "modal") {

        linkTypeElement = (
            <ModalLink
                openCloseModals={linkType.openCloseModals}
                modalLayerNum={linkType.modalLayerNum}
                modalIdentifier={linkType.modalIdentifier}
            />
        );
    }
    // External links -------------------------------------------------
    else if (linkType.type === "external") {
        linkTypeElement = <ExternalLink url={linkType.url} />
    };

    // RENDER //////////////////////////////////////////////////////////
    return (
        <InteractiveElement
            focus={focus}
            enterSelect={enterSelect}
            deselect={deselect}
        >
            {linkStyleElement}
            {linkTypeElement}
        </InteractiveElement>
    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default Link;