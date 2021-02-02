// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries -------------------------------------------------
import styled, {css} from "styled-components";

// Import helpers ---------------------------------------------------
import positioning from "../../0 Element Tools/positioning";

// COMPONENT ///////////////////////////////////////////////////////
const Caption0 = styled("figcaption")`${({width, spatial})=> css`
    ${positioning(spatial)}
    font-size: ${width/17}px;
    line-height: ${width / 13}px;
    font-style: italic;
    text-align: center;
`}`;

// EXPORTS ///////////////////////////////////////////////////////////
export default Caption0;