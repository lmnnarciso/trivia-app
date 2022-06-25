import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import useKeyPress from "../../hooks/useKeyPress";
import { useStateContext } from "../../hooks/useStateContext";
import { Answer, TriviaInterface } from "../../types";
import { Button, TriviaOptions } from "../shared";

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
`;

const TriviaQuestion = ({
  item,
  index,
  setTriviaNo,
}: {
  item: TriviaInterface;
  index: number;
  setTriviaNo: Dispatch<SetStateAction<number>>;
}) => {
  const [state, setState] = useStateContext();
  const [selectedRadio, setSelectedRadio] = useState<Answer | string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedRadio(value);
  };

  const enterKey: boolean = useKeyPress("Enter");

  const handleConfirmAnswer = () => {
    setState({
      ...state,
      [index]: selectedRadio,
    });
    setTriviaNo((prev) => prev + 1);
  };

  const handleBack = () => {
    setTriviaNo((prev) => prev - 1);
    setSelectedRadio(state[index]);
  };

  useEffect(() => {
    if (state[index]) {
      setSelectedRadio(state[index]);
    } else {
      setSelectedRadio("");
    }
  }, [index, state]);

  useEffect(() => {
    if (selectedRadio !== "" && enterKey) {
      handleConfirmAnswer();
    }
  }, [enterKey, selectedRadio, handleConfirmAnswer]);

  return (
    <div>
      <div>
        <h1>{item.category}</h1>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{ __html: item.question }}
          data-cy={`question-${item.question}`}
        />
        <TriviaOptions>
          {" "}
          <label
            htmlFor={`trivia-question-${index}-true`}
            data-cy="label-question-true"
          >
            <input
              type="radio"
              id={`trivia-question-${index}-true`}
              value={"True"}
              checked={selectedRadio === "True"}
              onChange={handleOnChange}
              data-cy={`question-${index}-true-option`}
            />
            <span>True</span>
          </label>
          <br />
          <label
            htmlFor={`trivia-question-${index}-false`}
            data-cy="label-question-false"
          >
            <input
              type="radio"
              id={`trivia-question-${index}-false`}
              value="False"
              checked={selectedRadio === "False"}
              onChange={handleOnChange}
              data-cy={`question-${index}-false-option`}
            />
            <span>False</span>
          </label>
          <br />
        </TriviaOptions>
      </div>
      <ButtonGroup>
        <Button onClick={handleBack} disabled={index === 0} data-cy="back-btn">
          Back
        </Button>
        <Button
          color="success"
          onClick={handleConfirmAnswer}
          disabled={selectedRadio === ""}
          data-cy="confirm-btn"
        >
          Confirm Answer
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TriviaQuestion;
