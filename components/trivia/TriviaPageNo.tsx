const TriviaPageNo = ({
  triviaNo,
  length,
}: {
  triviaNo: number;
  length: number;
}) => {
  return (
    <p data-cy="trivia-page-no">
      {triviaNo === length ? length : triviaNo + 1} of {length}
    </p>
  );
};
export default TriviaPageNo;
