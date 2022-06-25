import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button, TriviaContainer, Wrapper } from "../components/shared";

const BeginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <TriviaContainer>
        <BeginContainer>
          <h1>Welcome to the Trivia Challenge!</h1>
          <div>
            <h4>You will be presented 10 True or False questions.</h4>
            <h4>Can you score 100%?</h4>
          </div>
          <Link href="/trivia">
            <Button data-cy="begin-btn" style={{ width: "100%" }}>
              BEGIN
            </Button>
          </Link>
        </BeginContainer>
      </TriviaContainer>
    </Wrapper>
  );
};

export default Home;
