// IMPORTS /////////////////////////////////////////////////////////
// Import components -----------------------------------------------------
import InteractiveElement from "../0 Element Tools/InteractiveElement";
import ModalLink from "../Links/Link Types/ModalLink";
import MenuIcon from "./MenuIcon";

// COMPONENT /////////////////////////////////////////////////////////////
function MenuLink({setModalOpen, spatial, deselect, focus, enterSelect}) {
    return (
        <InteractiveElement 
            focus={focus} 
            enterSelect={enterSelect} 
            deselect={deselect}
        >
            <MenuIcon spatial={spatial} />
            <ModalLink setModalOpen={setModalOpen} modalIdentifier="menu" />
        </InteractiveElement>
    );
};

// EXPORTS //////////////////////////////////////////////////////////////////
export default MenuLink;