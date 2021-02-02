//IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import styled, {css} from "styled-components";

// Import helpers -----------------------------------------------------
import positioning from "../../0 Element Tools/positioning";

// TRANSITIONS ///////////////////////////////////////////////////////////
function transitions(interactivity, colors, width) {
    if (interactivity === "able") {
        return css`
            transition-duration: 2s;
            color: ${colors[0]};
        `;
    }
    else if (interactivity === "highlight") {
        return css`
            transition-duration: 1s;
            color: ${colors[1]};
        `;
    }
    else if (interactivity === "selected") {
        return css`
            transition-duration: 0s;
            color: ${colors[2]};
        `;
    };
};

// COMPONENT ///////////////////////////////////////////////////////////
const LinkStyle0 = styled("a")`${({
    spatial, width, interactivity, colors
})=>css`
    ${positioning(spatial)}
    ${transitions(interactivity, colors, width)}
    transition-timing-function: ease-in;
    box-sizing: border-box;
    border: 5px solid gold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${width / 10}px;
    cursor: pointer;
    pointer-events: auto;
`}`;

export default LinkStyle0;