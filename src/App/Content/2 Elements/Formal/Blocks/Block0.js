// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import styled, {css, keyframes} from "styled-components";

// Import helpers -----------------------------------------------------
import positioning from "../../0 Element Tools/positioning";

// ANIMATION ///////////////////////////////////////////////////////
// Animation Sequence --------------------------------------------
function animationSequence(colors) {
    return keyframes`
        0% {background-color: ${colors[0]};}
        50% {background-color: ${colors[1]};}
        100% {background-color: ${colors[0]};}
    `;
};


// COMPONENT /////////////////////////////////////////////////////////
const Block0 = styled("div")`${({spatial, colors, duration})=>css`
    ${positioning(spatial)}
    animation: ${animationSequence(colors)} ${duration}s linear infinite;
`}`;

// EXPORTS /////////////////////////////////////////////////////////////
export default Block0;
