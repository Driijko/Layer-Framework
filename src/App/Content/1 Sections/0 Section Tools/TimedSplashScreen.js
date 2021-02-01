// IMPORTS /////////////////////////////////////////////////////
// Import libraries ----------------------------------------------
import {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

// Import components --------------------------------------------
import UniformResponse from "./UniformResponse/UniformResponse";

// COMPONENT ///////////////////////////////////////////////////
function TimedSplashScreen({duration, children, leaveTo}) {

    const [leavePage, setLeavePage] = useState(false);

    useEffect(()=> {
        const timerId = setTimeout(()=> {
            setLeavePage(true);
            clearTimeout(timerId);
        }, duration);
    },[])


    // RENDER ////////////////////////////////////////////////////
    return (
        <>
            {
                leavePage ?
                    <Redirect to={leaveTo} />
                    : null
            }
            <UniformResponse>
                {children}
            </UniformResponse>
        </>
    );
};

// EXPORTS //////////////////////////////////////////////////////
export default TimedSplashScreen;