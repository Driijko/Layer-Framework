// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import styled, {css, keyframes} from "styled-components";

// Import custom hooks -------------------------------------------------
import useMousePosition from "../../Tools/hooks/useMousePosition";

// STYLE ////////////////////////////////////////////////////////
// const SiteBackgroundDiv = styled("div")`${({mousePos})=>css`
//     position: absolute;
//     width: 100vw;
//     height: 100vh;
//     transition-timing-function: linear;
//     transition-duration: 1s;
//     background-color: 
//         hsl(
//             0,
//             ${50 + (50 * (mousePos.x / window.innerWidth))}%,
//             ${30 + (40 * (mousePos.y / window.innerHeight))}%
//         )
//     ;
//     box-sizing: border-box;
//     border: 50px solid magenta;
// `}`;

// Animation sequence ----------------------------------------------------------
const animationSequence = keyframes`
    0% {opacity:0;}
    50% {opacity: 1;}
    100% {opacity: 0;}
`;

const SiteBackgroundDiv1 = styled("div")`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(white 20%, yellow 90%, hsl(30, 100%, 50%));
    animation: ${animationSequence} 10s linear infinite;
`;

const SiteBackgroundDiv2 = styled("div")`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: 
        linear-gradient(
            hsla(0, 0%, 100%, 0.5), 
            hsla(30, 100%, 50%, 0.5), 
            hsla(300, 100%, 50%, 0.5)
        );
    animation: ${animationSequence} 20s linear infinite;
`;

const SiteBackgroundDiv3 = styled("div")`${({mousePos})=>css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    transition-timing-function: linear;
    transition-duration: 0.5s;
    background-image:
        linear-gradient(
            hsla(0, 0%, 0%, 0) 20%,
            hsl(0, 100%, 50%)
        );
    opacity: ${0.8 * (mousePos.y / window.innerHeight)}
`}`;

// COMPONENT ///////////////////////////////////////////////////////
function SiteBackground() {

    // The argument you pass to this function determines how often
    // in milliseconds, the check is made, so as not to hurt performance.
    const mousePos = useMousePosition(10);

    // RENDER ////////////////////////////////////////////////////
    return (
        <>
            <SiteBackgroundDiv1 />
            <SiteBackgroundDiv2 />
            <SiteBackgroundDiv3 mousePos={mousePos} />
        </>
    );
};

export default SiteBackground;