// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import Block0 from "../../../2 Elements/Formal/Blocks/Block0";
import FLOWLogo0 from "../../../2 Elements/Icons & Logos/FLOWLogo0";

// COMPONENT ////////////////////////////////////////////////////////////
function HomePageLayer2({
    width, height, tabIndex, enterKey, triggerExit, setModalOpen, modalOpen
}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (
        <>
<Block0 spatial={[0, 0, 20, 30]} duration={20} colors={["magenta", "white"]} />
<FLOWLogo0 spatial={[0, 12, 20, 10]} duration={20} colors={["red", "black"]} width={width} >
    FLOw
</FLOWLogo0>
        </>
    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default HomePageLayer2;