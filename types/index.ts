
export interface TriviaInterface {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: {
      [k: number]: "False" | "True";
    };
  }
  
  export interface TriviaResponse {
    response_code: number;
    results: TriviaInterface[];
    error: Error;
  }

  export interface Answer {
    [k: number]: string;
  }
  
export interface TriviaResultProps {
  data: TriviaResponse;
  state: Answer[];
}