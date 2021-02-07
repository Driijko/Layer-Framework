// IMPORTS /////////////////////////////////////////////////
// Import libraries ----------------------------------------------
import styled, {css} from "styled-components";

// Import helpers -----------------------------------------------
import positioning from "../../0 Element Tools/positioning";

// Import assets ---------------------------------------------------
import frame2Image from "../../../3 Assets/visual/images/frame2.png";

// COMPONENT //////////////////////////////////////////////////
const Frame2 = styled("div")`${({spatial, width})=>css`
    box-sizing: border-box;
    background-size: 90%;
    background-position: 50% 50%;
    border: ${width/30}px solid hsla(290, 100%, 50%, 0.3);
    border-radius: 10px;
    background-image: url(${frame2Image});
    ${positioning(spatial)}
`}`;

// EXPORTS ///////////////////////////////////////////////////////
export default Frame2;