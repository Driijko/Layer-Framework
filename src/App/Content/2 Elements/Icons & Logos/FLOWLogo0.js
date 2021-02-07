// IMPORTS //////////////////////////////////////////////////
// Import components -----------------------------------------
import styled, {css, keyframes} from "styled-components";

// Import helpers ----------------------------------------------
import positioning from "../0 Element Tools/positioning";

// ANIMATION //////////////////////////////////////////////////////////////
// Animation sequence -----------------------------------------------------
function animationSequence(colors) {
    return keyframes`
        0% {color: ${colors[0]};}
        50% {color: ${colors[1]};}
        100% {color: ${colors[0]};}
    `;
};

// COMPONENT ///////////////////////////////////////////////////////////////
const FLOWLogo0 = styled("p")`${({width, spatial, colors, duration})=>css`
    ${positioning(spatial)}
    font-size: ${width/ 5}px;
    font-family: Monoton;
    text-align: center;
    animation: ${animationSequence(colors)} ${duration}s linear infinite;
`}`;

// EXPORTS //////////////////////////////////////////////////////
export default FLOWLogo0;