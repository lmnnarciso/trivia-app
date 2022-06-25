import Link from "next/link";
import styled from "styled-components";
import { TriviaInterface, TriviaResultProps } from "../../types";
import { Button, ResultContainer, ResultList } from "../shared";

const Result = styled.li`
  padding: 2rem;
  margin-top: 1rem;
  background-color: #202225;
  border-radius: 5px;

  span {
    margin-left: 2rem;
  }
`;

const TriviaResult = ({ data, state }: TriviaResultProps) => {
  const getResults = () => {
    return data.results.filter(
      (item, index) => item.correct_answer === state[index]
    ).length;
  };
  return (
    <ResultContainer>
      <div>
        <h3>
          You Scored: {getResults()} / {data.results.length}
        </h3>
      </div>
      <ResultList>
        {data.results.map((item: TriviaInterface, index: number) => {
          return (
            <Result key={index}>
              {item.correct_answer === state[index] ? "✔️" : "❌"}
              <span
                dangerouslySetInnerHTML={{ __html: item.question }}
              /> - <strong>{item.correct_answer.toUpperCase()}</strong>
            </Result>
          );
        })}
      </ResultList>
      <div style={{ backgroundColor: "#3c3f45" }}>
        <Link href="/">
          <Button data-cy="try-again-btn">Play Again?</Button>
        </Link>
      </div>
    </ResultContainer>
  );
};

export default TriviaResult;
