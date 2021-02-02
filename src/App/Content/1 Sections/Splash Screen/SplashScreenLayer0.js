// IMPORTS ////////////////////////////////////////////////////
import TextHeader0 from "../../2 Elements/Text/Text Headers/TextHeader0";

// COMPONENT //////////////////////////////////////////////////////
function SplashScreenLayer0({width}) {

    // RENDER ///////////////////////////////////////////////////////
    return (
        <>
            <TextHeader0 
                width={width}
                level={1}
                spatial={[0, 0, 20, 30]}
            >
                <h1>Splash Screen</h1>
            </TextHeader0>
        </>
    );
};

// EXPORTS ////////////////////////////////////////////////////////////
export default SplashScreenLayer0;