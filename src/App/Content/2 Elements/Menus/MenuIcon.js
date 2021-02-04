// IMPORTS ////////////////////////////////////////////////////////
// Import libraries -------------------------------------------------
import styled, {css} from "styled-components";

// Import helpers -----------------------------------------------------
import positioning from "../0 Element Tools/positioning";

// STYLE ////////////////////////////////////////////////////////////////
// Transitions ---------------------------------------------------------
function containerDivTransitions(interactivity) {
    if (interactivity === "able") {
        return `background-color: hsla(0, 0%, 20%, 0.5);`;       
    }
    else if (interactivity === "highlight") {
        return `background-color: hsl(0, 0%, 0%);`;
    }
    else if (interactivity === "selected") {
        return `background-color: white;`;
    }
};

function lineTransitions(interactivity) {
    if (interactivity === "able") {
        return `background-color: hsl(0, 0%, 80%);`;
    }
    else if (interactivity === "highlight" || interactivity === "selected") {
        return `background-color: hsl(0, 0%, 100%);`;
    }
}
// STYLED COMPONENTS ///////////////////////////////////////////////
const ContainerDiv = styled("div")`${({spatial, interactivity})=>css`
    ${positioning(spatial)}
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    transition-duration: 1s;
    pointer-events: auto;
    ${containerDivTransitions(interactivity)}
`}`;

const Line = styled("div")`${({interactivity})=>css`
    width: 10%;
    height: 5%;
    transition-duration: 1s;
    ${lineTransitions(interactivity)}
`}`;

// COMPONENT ///////////////////////////////////////////////////////////////
function MenuIcon({spatial, interactivity, onClick, onMouseEnter, onMouseLeave}) {

    // RENDER //////////////////////////////////////////////////////
    return (
        <ContainerDiv 
            spatial={spatial} 
            interactivity={interactivity}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Line interactivity={interactivity} />
            <Line interactivity={interactivity} />
            <Line interactivity={interactivity} />
        </ContainerDiv>
    );
};

// EXPORTS /////////////////////////////////////////////////////
export default MenuIcon;