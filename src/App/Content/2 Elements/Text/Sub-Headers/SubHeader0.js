// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import styled, {css} from "styled-components";

// Import helpers ----------------------------------------------------
import positioning from "../../0 Element Tools/positioning";

// HEADER LEVEL ////////////////////////////////////////////////////////
const levelToFontSize = [10, 12, 15, 18, 22, 28]

// COMPONENT ////////////////////////////////////////////////////////
const SubHeader0 = styled("p")`${({width, spatial, level})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Poiret One;
    color: hsla(50, 100%, 100%, 1);
    line-height: ${width / 8}px;
    font-size: ${width/levelToFontSize[level - 1]}px;
`}`;

export default SubHeader0;