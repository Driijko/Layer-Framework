// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import styled, {css} from "styled-components";

// Import custom hooks -------------------------------------------------
import useMousePosition from "../../Tools/hooks/useMousePosition";

// STYLE ////////////////////////////////////////////////////////
const SiteBackgroundDiv = styled("div")`${({mousePos})=>css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    transition-timing-function: linear;
    transition-duration: 1s;
    background-color: 
        rgb(
            ${100 + (155 * (mousePos.x / window.innerWidth))},
            ${100 * (mousePos.y / window.innerHeight)}, 
            0
        )
    ;
    box-sizing: border-box;
    border: 50px solid magenta;
`}`;

// COMPONENT ///////////////////////////////////////////////////////
function SiteBackground() {

    // The argument you pass to this function determines how often
    // in milliseconds, the check is made, so as not to hurt performance.
    const mousePos = useMousePosition(100);

    // RENDER ////////////////////////////////////////////////////
    return (
        <SiteBackgroundDiv mousePos={mousePos} />
    );
};

export default SiteBackground;