// IMPORTS ///////////////////////////////////////////////////
// Import libraries ---------------------------------------------
import styled, {css} from "styled-components";

// Import helpers --------------------------------------------------
import positioning from "../../0 Element Tools/positioning";

// Import settings ---------------------------------------------------
import {maxWidth} from "../../../../settings";

// COMPONENT ////////////////////////////////////////////////
const Paragraph0 = styled("p")`${({width, spatial})=>css`
    ${positioning(spatial)}
    text-align: left;
    display: flex;
    align-items: center;
    font-size: ${16 + ((width/maxWidth) * 35)}px;
    box-sizing: border-box;
    border-radius: ${width/10}px;
    text-shadow: 1px 0px 1px hsl(200, 100%, ${20 + ((width/maxWidth) * 30)}%);
    color: hsl(200, 100%, ${20 + ((width/maxWidth) * 30)}%);
    background-color: hsla(300, 100%, 100%, 0.8);
    font-family: Poiret One;
    line-height: ${width/12}px;
    padding: ${width/20}px;
    z-index: 1;
`}`;

export default Paragraph0;

