// IMPORTS //////////////////////////////////////////////////
// Import components ---------------------------------------
import Image from "../Image";
import Caption0 from "../../Text/Captions/Caption0";

// Import images --------------------------------------------
import image from "../../../3 Assets/visual/images/image.jpg";
import image1 from "../../../3 Assets/visual/images/image1.jpg";
import image2 from "../../../3 Assets/visual/images/image2.jpg";
const images = [image, image1, image2];

const alts = [
    "Piet Mondrian painting",
    "Agnes Martin painting",
    "Frank Stella painting",
];

const captionText = [
    ["Composition 82", "by Piet Mondrian"],
    ["Yellow and Orange", "by Agnes Martin"],
    ["Hard Lines", "by Frank Stella"],
];

// COMPONENT /////////////////////////////////////////////////////////
function SlideShow0({
    width, spatial, currentImageIndex, captionSpatial
}) {
    return (
        <figure>
            <Image
                spatial={spatial}
                src={images[currentImageIndex]}
                alt={alts[currentImageIndex]}
            />
            <Caption0
                width={width}
                spatial={captionSpatial}
            >
                {captionText[currentImageIndex][0]}
                <br/>
                {captionText[currentImageIndex][1]}
                
            </Caption0>
        </figure>
    );
};

export default SlideShow0;