// IMPORTS /////////////////////////////////////////////////////
// Import libraries -------------------------------------------
import styled, {css} from "styled-components";

// Import helpers --------------------------------------------
import positioning from "../../0 Element Tools/positioning";

const levelToFontSize = [6, 7, 8, 10, 12, 15]

// COMPONENT //////////////////////////////////////////////////
const TextHeader0 = styled("div")`${({
    level, width, spatial,
})=>css`
    ${positioning(spatial)}
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    border: 5px solid purple;
    font-size: ${width/levelToFontSize[level - 1]}px;
`}`;

export default TextHeader0;