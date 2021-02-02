// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import Slide shows -----------------------------------------------
import SlideShow0 from "./SlideShows/SlideShow0";

const slideShows = [
    <SlideShow0 />,
];

// COMPONENT /////////////////////////////////////////////////////////
function SlideShow({
    width, spatial, duration, numOfImages, number, captionSpatial
}) {

    // CURRENT IMAGE INDEX //////////////////////////////////////////
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(()=> {
        const timerId = setTimeout(()=> {

            // We either update the index by one or set it back to zero.
            if (currentImageIndex + 1 === numOfImages) {
                setCurrentImageIndex(0);
            }
            else {
                setCurrentImageIndex(currentImageIndex + 1);
            }

        }, duration * 1000);
        return ()=> clearTimeout(timerId);
    },[currentImageIndex]);

    // RETURN MODIFIED COMPONENT ///////////////////////////////////////
    return cloneElement(slideShows[number], {
        width: width,
        spatial: spatial,
        currentImageIndex: currentImageIndex,
        captionSpatial: captionSpatial,
    });
};

// EXPORTS /////////////////////////////////////////////////////////
export default SlideShow;