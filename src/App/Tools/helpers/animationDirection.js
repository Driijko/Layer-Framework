import {keyframes} from "styled-components";

export default function animationDirection(from, to) {
    return keyframes`
        from {${from}}
        to {${to}}
    `;
};