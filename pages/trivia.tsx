import type { NextPage } from "next";
import React, { useState } from "react";
import { Provider } from "../hooks/useStateContext";
import { Trivia } from "../components/trivia";
import {
  Button,
  TriviaContainer,
  TriviaQuestionnaire,
  Wrapper,
} from "../components/shared";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

const TriviaPage: NextPage = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={({ error, resetErrorBoundary }) => {
        return (
          <>
            <Wrapper>
              <TriviaContainer data-test-id="loading">
                <TriviaQuestionnaire>
                  {error.message}
                  <Button
                    onClick={() => resetErrorBoundary()}
                    style={{ marginTop: "1rem" }}
                  >
                    Try again
                  </Button>
                </TriviaQuestionnaire>
              </TriviaContainer>
            </Wrapper>
          </>
        );
      }}
    >
      <Wrapper>
        <Provider>
          <Trivia items={10} />
        </Provider>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default TriviaPage;
