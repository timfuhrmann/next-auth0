import styled from "styled-components";
import React from "react";

const ButtonWrapper = styled.button<{ success: boolean; error: boolean }>`
    display: flex;
    justify-content: center;
    min-width: 12.5rem;
    padding: 1.25rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    line-height: 1;
    background-color: ${p => p.theme.gray400};
    background-color: ${p => p.error && p.theme.red400};
    background-color: ${p => !p.error && p.success && p.theme.green400};
    transition: background-color 0.2s, transform 0.2s;
    backface-visibility: hidden;
    will-change: background-color, transform;

    @media (hover: hover) {
        &:hover {
            background-color: ${p => p.theme.gray200};
            transform: scale(1.05) translateZ(0);
        }
    }

    &:active {
        transform: scale(0.95) translateZ(0);
    }

    &:disabled {
        pointer-events: none;
    }
`;

interface ButtonProps {
    success: boolean;
    error: boolean;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <ButtonWrapper {...props} disabled={props.error || props.success}>
        <span>{children}</span>
    </ButtonWrapper>
);
