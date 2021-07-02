import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../app/components/Button";
import { Meta } from "../app/components/Meta";

const HomeWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 33rem;
    padding: 0 2rem;
`;

const HomeInfo = styled.div`
    margin-top: 1.5rem;
    text-align: center;
`;

const LoginData = styled.div`
    margin: 2rem auto 0;
    color: ${p => p.theme.gray600};
`;

const Home: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(false);
    const [authRequired, setAuthRequired] = useState<boolean>(false);

    const onClick = async () => {
        const { status } = await fetch("/api/click");
        setSuccess(200 === status);
        setAuthRequired(401 === status);
    };

    return (
        <HomeWrapper>
            <Meta />
            <Button success={success} error={authRequired} onClick={onClick}>
                {!authRequired && !success && "Click me."}
                {success && !authRequired && "Yeaaah!"}
                {authRequired && "Oops!"}
            </Button>
            {authRequired && (
                <HomeInfo>
                    It seems you're not authorized to click this button.
                    <br />
                    Go ahead and try to login first.
                    <LoginData>
                        <div>demo@you.com</div>
                        <div>Password123!</div>
                    </LoginData>
                </HomeInfo>
            )}
        </HomeWrapper>
    );
};

export default Home;
