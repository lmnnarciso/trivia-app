import { useState } from "react";
import { useStateContext } from "../../hooks/useStateContext";
import useTriviaQuery from "../../hooks/useTriviaQuery";
import TriviaPageNo from "./TriviaPageNo";
import TriviaQuestion from "./TriviaQuestion";
import TriviaResult from "./TriviaResult";
import { TriviaContainer, TriviaQuestionnaire } from "../shared";

export const Trivia = ({ items }: { items: number }) => {
  const [state] = useStateContext();
  const [triviaNo, setTriviaNo] = useState(0);
  const { data, error, isLoading, isFetching } = useTriviaQuery(items);

  if (error) {
    throw error;
  }
  if (isLoading || isFetching || data === undefined) {
    return (
      <TriviaContainer data-test-id="loading">
        <TriviaQuestionnaire>Loading...</TriviaQuestionnaire>
      </TriviaContainer>
    );
  }

  if (triviaNo >= data.results.length) {
    return <TriviaResult data={data} state={state} />;
  }

  return (
    <TriviaContainer>
      <TriviaQuestionnaire>
        <TriviaQuestion
          item={data.results[triviaNo]}
          index={triviaNo}
          setTriviaNo={setTriviaNo}
        />
        <div>
          <TriviaPageNo triviaNo={triviaNo} length={data.results.length} />
        </div>
      </TriviaQuestionnaire>
    </TriviaContainer>
  );
};
