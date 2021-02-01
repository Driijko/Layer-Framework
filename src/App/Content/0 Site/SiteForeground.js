// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries -----------------------------------------------------
import {useContext, createContext, useState, useEffect} from "react";
import styled, {css, keyframes} from "styled-components";

// Import helpers -----------------------------------------------------
import intRange from "../../Tools/helpers/intRange";

// SETTINGS /////////////////////////////////////////////////////////////
// This value is used to determine how long the animation runs, as well
// as how long the state variable 'foregroundAnimate' is reset to 'false'
// after being set to 'true'.
import {pageTransitionDuration} from "../../settings";

// CONTEXT ////////////////////////////////////////////////////////
const SiteForegroundContext = createContext();

// CONTEXT PROVIDER ////////////////////////////////////////////////////////
function SiteForegroundContextProvider({children}) {

    // FOREGROUND ANIMATE /////////////////////////////////////////////
    const [foregroundAnimate, setForegroundAnimate] = useState(false);

    useEffect(()=> {
        if (foregroundAnimate) {
            setTimeout(()=> {
                setForegroundAnimate(false);
            }, pageTransitionDuration * 1000);
        };
    },[foregroundAnimate]);

    function triggerForegroundAnimate() {
        setForegroundAnimate(true);
    };

    // PROVIDER RENDER //////////////////////////////////////////////////////
    return (
        <SiteForegroundContext.Provider 
            value={{
                foregroundAnimate,
                triggerForegroundAnimate,
            }}
        >
            {children}
        </SiteForegroundContext.Provider>
    );
};


// STYLE ////////////////////////////////////////////////////////////////
// Animation Sequence -------------------------------------------------
const animationSequence = keyframes`
    0% {
        opacity: 0;
    }

    40% {
        opacity: 1;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

// Animation Function -------------------------------------------------
function animate(foregroundAnimate) {
    if (foregroundAnimate === false) {
        return `
            opacity: 0;
            pointer-events: none;
        `;
    }
    else {
        return css`
            animation: 
                ${animationSequence} 
                ${pageTransitionDuration}s 
                linear 
                forwards;
        `;
    };
};

// Style Version Object ---------------------------------------------
const styleVersionObjects = [
    {color: "blue",},
    {color: "red",},
    {color: "purple",},
    {color: "magenta",},
    {color: "yellow",},
];

// STYLED COMPONENT /////////////////////////////////////////////////
const SiteForegroundDiv = styled("div")`${({
        foregroundAnimate, styleVersionNum
})=>css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    border: 10px solid red;
    background-image: 
        linear-gradient(
            black, 
            ${styleVersionObjects[styleVersionNum].color}
        );
    ${animate(foregroundAnimate)}
`}`;

// COMPONENT ///////////////////////////////////////////////////////////
function SiteForeground() {

    // FOREGROUND ANIMATE ////////////////////////////////////////
    const {foregroundAnimate} = useContext(SiteForegroundContext);

    // STYLE RANDOMIZATION ////////////////////////////////////////
    const styleVersionNum = intRange(0, 4);

    // RENDER ////////////////////////////////////////////////////
    return (
        <SiteForegroundDiv 
            foregroundAnimate={foregroundAnimate}
            styleVersionNum={styleVersionNum} 
        />
    );
};

// EXPORTS ///////////////////////////////////////////////////////////
export default SiteForegroundContext;
export {SiteForeground, SiteForegroundContextProvider};