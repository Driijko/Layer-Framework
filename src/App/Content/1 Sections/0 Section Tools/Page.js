// IMPORTS //////////////////////////////////////////////////////////
// Import libraries --------------------------------------------------
import {useState, useEffect, Children, cloneElement, useContext} from "react";
import {Redirect} from "react-router-dom";
import styled, {css} from "styled-components";

// Import Context ----------------------------------------------------
import SiteForegroundContext from "../../0 Site/SiteForeground";

// Import Components -----------------------------------------------------
import UniformResponse from "./UniformResponse/UniformResponse";
import Layer from "./Layer";

// Import Custom Hooks ----------------------------------------------------
import useKey from "../../../Tools/hooks/useKey";

// Import helpers -----------------------------------------------------------
import animationDirection from "../../../Tools/helpers/animationDirection";

// Import settings --------------------------------------------------------
import {pageTransitionDuration} from "../../../settings"; 

// Sfx Imports -----------------------------------------------------------------
// import Audio from "../../Tools/Audio";
// import sfxEnterExit from "../5 Assets/audio/sfx/enterExit.mp3";

// STYLE ////////////////////////////////////////////////////////////////////
function animate(phase) {
    if (phase === "enter") {
        return css`
            animation: ${animationDirection("opacity: 0", "opacity: 1")} ${enterTime}s ease-out forwards;
        `;
    }
    else if (phase === "exiting" || phase === "exit") {
        return css`
            animation: ${animationDirection("opacity: 1", "opacity: 0")} ${exitTime}s ease-out forwards;
        `;
    };
};

const PageDiv = styled("div")`${({phase})=>css`
    ${animate(phase)};
`}`;

// SETTINGS /////////////////////////////////////////////////////
const enterTime = pageTransitionDuration / 2;
const exitTime = pageTransitionDuration / 2;

// COMPONENT ////////////////////////////////////////////////////////////
function Page({layers, gutter}) {

    // CONTEXT /////////////////////////////////////////////////////////////
    const {triggerForegroundAnimate} = useContext(SiteForegroundContext);

    // SFX //////////////////////////////////////////////////////////////////
    // const [playSfx, setPlaySfx] = useState(0);

    // PHASE /////////////////////////////////////////////////////////////////
    const [phase, setPhase] = useState("enter");
    const [checkReadyForSteady, setCheckReadyForSteady] = useState(false);
    const [toSteadyTimerId, setToSteadyTimerId] = useState(null);
    const [leaveTo, setLeaveTo] = useState(null);

    // This 'useEffect' is a bit complicated due to the possibility
    // that a user may want to exit a page before the "enter" phase is
    // finished. Making the enter phase cancelable requires us to include
    // the 'checkReadyForSteady' and 'toSteadyTimerId' state variables.
    useEffect(()=> {
        if (phase === "enter") {
            // setPlaySfx(null);
            setToSteadyTimerId(setTimeout(() => {
                if (phase === "enter") {
                    setCheckReadyForSteady(true);
                };
                clearTimeout(toSteadyTimerId);
            }, enterTime * 1000));
        }
        else if (phase === "exiting") {
            triggerForegroundAnimate();
            const timerId = setTimeout(()=> {
                setPhase("exit");
                clearTimeout(timerId);
            }, exitTime * 1000);
        };
        return () => {
            clearTimeout(toSteadyTimerId);
            return toSteadyTimerId;
        };
    }, [phase]);

    useEffect(()=> {
        if (checkReadyForSteady && phase === "enter") {
            setPhase("steady");
        };
    }, [checkReadyForSteady]);

    // Passed down to links so they can trigger "exiting" phase.
    function triggerExit(to) {
        if (phase !== "exiting") {
            setLeaveTo(to);
            setPhase("exiting");
            // setPlaySfx(0);
        };
    };

    // LAYER FOCUS //////////////////////////////////////////////////////
    const [layerFocus, setLayerFocus] = useState(0);
    const [startingTabIndex, setStartingTabIndex] = useState("first");

    function changeLayerFocus(direction) {
        if (direction === "forwards") {
            setLayerFocus((layerFocus + 1) % (layers.length + 1));
            setStartingTabIndex("first");
        }
        else if (direction === "backwards") {
            setLayerFocus((layerFocus + layers.length) % (layers.length + 1));
            setStartingTabIndex("last");
        };
    };

    // KEYBOARD INPUT //////////////////////////////////////////////////
    // The 'tab' variable tracks whether the user is tabbing forwards
    // or backwards.
    const [tab, setTab] = useState(null);

    // 'useKey' returns true if key is held down.
    const tabKey = useKey("Tab");
    const enterKey = useKey("Enter");
    const shiftKey = useKey("Shift");

    // This useEffect sets the 'tab' variable depending on whether 
    // the user is just pressing tab, or pressing tab and shift.
    useEffect(()=> {
        if (tabKey) {
            if (shiftKey) {
                setTab("backwards");
            }
            else {
                setTab("forwards");
            };
        }
        else {
            setTab(null);
        }
    },[tabKey]);


    // WHEN LAYER FOCUS IS 0 ///////////////////////////////////
    useEffect(()=> {
        if (tab && layerFocus === 0) {
            changeLayerFocus(tab);
        }
    }, [tab]);

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <PageDiv phase={phase}>
            {phase === "exit" ?
                <Redirect to={leaveTo} />
                : null
            }

            {/* <Audio audio={[sfxEnterExit]} playAudio={playSfx} /> */}

            <UniformResponse>

                <Layer
                    layerFocus={layerFocus}
                    changeLayerFocus={changeLayerFocus}
                    startingTabIndex={startingTabIndex}
                    tab={tab}
                    enterKey={enterKey}
                    triggerExit={triggerExit}
                    type={layers[0].type}
                    layerNum={1}
                    focusableElements={layers[0].focusableElements}
                    initialRenderedModals={layers[0].initialRenderedModals}
                >
                    {layers[0].layer}
                </Layer>

                {gutter}

                {layers.length > 1 ?
                    <Layer
                        layerFocus={layerFocus}
                        changeLayerFocus={changeLayerFocus}
                        startingTabIndex={startingTabIndex}
                        tab={tab}
                        enterKey={enterKey}
                        triggerExit={triggerExit}
                        type={layers[1].type}
                        layerNum={2}
                        focusableElements={layers[1].focusableElements}
                    >
                        {layers[1].layer}
                    </Layer>
                    : <></>
                }

            </UniformResponse>
        </PageDiv>
    );
};

// EXPORTS ///////////////////////////////////////////////////
export default Page;