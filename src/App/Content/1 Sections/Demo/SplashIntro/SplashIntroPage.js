// IMPORTS ///////////////////////////////////////////////////////////
// Import components -------------------------------------------------
import TimedSplashScreen from "../../0 Section Tools/TimedSplashScreen";
import SplashIntroPageLayer1 from "./SplashIntroPageLayer1";

// COMPONENT ////////////////////////////////////////////////////////////
function SplashIntroPage() {

    // RENDER //////////////////////////////////////////////////////////
    return (
        <TimedSplashScreen
            duration={22000} leaveTo={"/demo/home"}
        >
            <SplashIntroPageLayer1 />
        </TimedSplashScreen>
    );
};

export default SplashIntroPage;