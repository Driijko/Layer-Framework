//IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import styled, {css} from "styled-components";

// Import helpers -----------------------------------------------------
import positioning from "../../0 Element Tools/positioning";


// TRANSITIONS ///////////////////////////////////////////////////////////
function transitions(interactivity, width, colors) {
    if (interactivity === "able") {
        return css`
            transition-duration: 2s;
            border-width: ${width/200}px;
            text-shadow: 5px 5px 10px ${colors[1]};
       `;
    }
    else if (interactivity === "highlight") {
        return css`
            transition-duration: 0.5s;
            border-width: ${width/100}px;
            text-shadow: 5px 5px 0px ${colors[1]};
        `;
    }
    else if (interactivity === "selected") {
        return css`
        `;
    };
};

// STYLE //////////////////////////////////////////////////////////
const Link = styled("a")`${({
    spatial, width, interactivity, colors
})=>css`
    ${positioning(spatial)}
    ${transitions(interactivity, width, colors)}
    transition-timing-function: linear;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Varela;
    font-size: ${width / 15}px;
    border-radius: 20%;
    cursor: pointer;
    border-color: ${colors[0]};
    color: ${colors[0]};
    border-style: solid;
    pointer-events: auto;
`}`;

const Div = styled("div")`${({
    spatial, width, interactivity, colors
})=>css`
    ${positioning(spatial)}
    ${transitions(interactivity, width, colors)}
    transition-timing-function: linear;
    box-sizing: border-box;
    border-radius: 100%;
    border-color: ${colors[0]};
    border-style: solid;
`}`;

// COMPONENT ///////////////////////////////////////////////////////////
function LinkStyle0({
    spatial, width, interactivity, onClick, onMouseLeave, onMouseEnter, colors,
    children
}) {

    // RENDER ///////////////////////////////////////////////////////////////
    return (
<>
<Div width={width} interactivity={interactivity} spatial={spatial} colors={colors}/>
<Div width={width} interactivity={interactivity} colors={colors}
    spatial={[
        spatial[0] + 1,
        spatial[1] + 1,
        spatial[2] - 2,
        spatial[3] - 2,
    ]}
/>
<Link width={width} interactivity={interactivity} colors={colors}
    onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}
    onClick={onClick} 
    spatial={[
        spatial[0] + 1,
        spatial[1] + 1,
        spatial[2] - 2,
        spatial[3] - 2,
    ]}
>{children}</Link>
</>
    );
};

export default LinkStyle0;