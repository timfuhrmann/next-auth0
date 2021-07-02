import styled from "styled-components";

export const Link = styled.a<{ active?: boolean }>`
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -0.1rem;
        left: 0;
        width: 100%;
        height: 0.1rem;
        transform-origin: left;
        transform: ${p => (p.active ? "scaleX(1)" : "scaleX(0)")};
        background-color: ${p => p.theme.gray900};
        transition: transform 0.3s;
        will-change: transform;
    }

    @media (hover: hover) {
        &:hover {
            &::after {
                transform: scaleX(1);
            }
        }
    }
`;
