// IMPORTS //////////////////////////////////////////////
// Import libraries -------------------------------------------------
import styled, {css, keyframes} from "styled-components";

// Import components ----------------------------------------
import Frame1 from "../../../2 Elements/Formal/Frames/Frame1";
import TextHeader0 from "../../../2 Elements/Text/Text Headers/TextHeader0";
import SubHeader0 from "../../../2 Elements/Text/Sub-Headers/SubHeader0";
import Image from "../../../2 Elements/Images/Image";

// Import assets ---------------------------------------------------------
import dreekoLogo1 from "../../../3 Assets/visual/icons/logo257x82.png";
import dreekoLogo2 from "../../../3 Assets/visual/icons/logo448x143.png";

// FLOW LOGO ////////////////////////////////////////////////////////////
// Animation sequence --------------------------------------------
const logoAnimationSequence = keyframes`
    0% {color: hsl(300, 100%, 70%); }
    40% {color: hsl(300, 100%, 100%); }
    50% {color: hsl(300, 100%, 100%); }
    100% {color: hsl(300, 100%, 70%); }
`;

// Header ---------------------------------------------------------------
const Logo = styled(TextHeader0)`${({width})=>css`
    font-family: Monoton;
    font-size: ${width / 4}px;
    animation: ${logoAnimationSequence} 10s linear infinite;
`}`;

// PAGE DIV /////////////////////////////////////////////////////////
// Animation sequence -------------------------------------------------
const pageAnimationSequence = keyframes`
    0% {opacity: 0;}
    10% {opacity: 1;}
    90% {opacity: 1;}
    100% {opacity: 0;}
`;

// Div ----------------------------------------------------------------
const PageDiv = styled("div")`
    animation: ${pageAnimationSequence} 22s linear forwards;
`;

// COMPONENT ///////////////////////////////////////////////////////////////
function SplashIntroPageLayer1({width}) {

    // RESPONSIVE LOGO ///////////////////////////////////////////////////////
    let dreekoLogo = dreekoLogo1;
    if (width > 500) {
        dreekoLogo = dreekoLogo2;
    };

    // RENDER ///////////////////////////////////////////////////////////
    return (

<PageDiv>
    <Frame1 spatial={[0, 0, 20, 30]} width={width}/>

    <Logo level={1} spatial={[0, 5, 20, 5]} width={width}><h1>flow</h1></Logo>

    <SubHeader0 level={1} spatial={[0, 11, 20, 5]} width={width}>
        a Web-Design Framework
    </SubHeader0>

    <SubHeader0 level={1} spatial={[0, 15, 20, 5]} width={width}>
        ...<br/>
        version 0.01
    </SubHeader0>

    <SubHeader0 level={1} spatial={[0, 20, 20, 5]} width={width}>
        by
    </SubHeader0>

    <Image src={dreekoLogo} spatial={[6, 25, 8, 3]} alt="Dreeko company logo" />
</PageDiv>

    );
};

export default SplashIntroPageLayer1;