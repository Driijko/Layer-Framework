// IMPORTS /////////////////////////////////////////////////
import TimedSplashScreen from "../0 Section Tools/TimedSplashScreen";
import SplashScreenLayer0 from "./SplashScreenLayer0";

// COMPONENT /////////////////////////////////////////////////
function SplashScreen({}) {

    // RENDER //////////////////////////////////////////////////
    return (
        <TimedSplashScreen duration={5000} leaveTo="/page1">
            <SplashScreenLayer0 />
        </TimedSplashScreen>
    );
};

// EXPORTS /////////////////////////////////////////////////////////
export default SplashScreen;