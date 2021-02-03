// IMPORTS /////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";
import styled, {css} from "styled-components";

// Import components ----------------------------------------------------
import InteractiveElement from "../0 Element Tools/InteractiveElement";

// Import helpers ------------------------------------------------------
import positioning from "../0 Element Tools/positioning";

// STYLE ///////////////////////////////////////////////////////////////
// Transitions --------------------------------------------------------
function transitions(interactivity) {
    if (interactivity === "able") {
        return `
            color: hsl(0, 0%, 50%);
            border-color: hsl(0, 0%, 50%);
            background-color: hsl(0, 0%, 10%);
        `;
    }
    else if (interactivity === "highlight") {
        return `
            color: hsl(0, 0%, 100%);
            border-color: hsl(0, 0%, 100%);
            background-color: black;
        `;
    }
    else if (interactivity === "selected") {
        return `
            color: magenta;
            border-color: magenta;
            background-color: black;
        `;
    };
};

// Button -------------------------------------------------------------
const Button = styled("button")`${({
    width, spatial, interactivity
})=>css`
    ${positioning(spatial)}
    font-size: ${width/15}px;
    box-sizing: border-box;
    border-width: ${width/100}px;
    border-style: solid;
    transition-duration: 0.5s;
    transition-timing-function: linear;
    cursor: pointer;
    ${transitions(interactivity)}
`}`;

function CloseModalLayer({interactivity, triggerModalExit}) {
    useEffect(()=>{
        if (interactivity === "selected") {
            triggerModalExit();
        };
    }, [interactivity]);
    return <></>;
};

// COMPONENT ///////////////////////////////////////////////////////////
function CloseModalLayerButton({
    triggerModalExit, width, spatial, focus, enterSelect
}) {

    // CLOSE MODAL LAYER ////////////////////////////////////////////
    function handleClick() {
        triggerModalExit();
    };

    // RENDER ////////////////////////////////////////////////////////
    return (
        <InteractiveElement
            focus={focus}
            enterSelect={enterSelect}
        >
            <Button
                width={width}
                spatial={spatial}               
            >X</Button>
            <CloseModalLayer triggerModalExit={triggerModalExit} />
        </InteractiveElement>
    );
}

export default CloseModalLayerButton;