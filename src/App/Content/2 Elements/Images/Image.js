import styled, {css} from "styled-components";

import positioning from "../0 Element Tools/positioning";

const Image = styled("img")`${({spatial})=>css`
    ${positioning(spatial)}
    object-fit: contain;
`}`;

export default Image;