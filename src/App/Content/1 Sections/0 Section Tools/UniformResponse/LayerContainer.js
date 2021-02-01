import styled, {css} from "styled-components";

// Setting 'scrollbar-width' to 'none' handles hiding scrollbars in
// Firefox
const LayerContainer = styled.div`${props => css`
    position: relative;
    width: ${props.width}px;
    height: ${props.height}px;
    overflow: scroll;
    scrollbar-width: none;
`}`;

export default LayerContainer;