import React from "react";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";
import { Link } from "./Link";

const NavigationWrapper = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    text-align: right;
`;

export const Navigation: React.FC = () => {
    const { user } = useUser();

    return (
        <NavigationWrapper>
            {user && <Link href="/api/auth/logout">Logout</Link>}
            {!user && <Link href="/api/auth/login">Login</Link>}
        </NavigationWrapper>
    );
};
