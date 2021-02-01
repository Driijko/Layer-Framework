// IMPORTS /////////////////////////////////////////////////////////
// Import libraries -----------------------------------------------
import styled, {css} from "styled-components";

// STYLE ////////////////////////////////////////////////////////////
// Layout function ---------------------------------------------------
function layerSectionType(type, containerSize) {
    if (type === "column") {
        return `
            position: relative;
            width: 100%;
            height: ${containerSize.height}px;
        `;
    }
    else if (type === "row" ) {
        return `
            position: relative;
            height: 100%;
            width: ${containerSize.width}px;
        `;
    }
    else if (type === "fixed") {
        return `
            position: fixed;
            pointer-events: none;
            height: ${containerSize.height}px;
            width: ${containerSize.width}px;
        `;
    };
};

// COMPONENT ////////////////////////////////////////////////////////////
const LayerSection = styled("div")`${({type, containerSize})=>css`
    box-sizing: border-box;
    ${layerSectionType(type, containerSize)}
`}`;

// EXPORTS //////////////////////////////////////////////////
export default LayerSection;

