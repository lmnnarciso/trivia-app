import axios from "axios";
import { useQuery } from "react-query";
import { TriviaResponse } from "../types";
import { useErrorHandler } from 'react-error-boundary'

const useTriviaQuery = (items: number) => {
  const handleError = useErrorHandler()

    return useQuery<TriviaResponse, Error>("trivia", async () => {
      try{
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=${items}&difficulty=hard&type=boolean`
        );
        if (data.response_code > 0) {
          const ERROR = [
            "No Results",
            "Invalid Parameter",
            "Token Not Found",
            "Token Empty",
          ];
          throw new Error(ERROR[data.response_code]) ;
        }
    
        return data;
      }
      catch(e){
        handleError(e)
      }
    
    }, {useErrorBoundary: (true)});
  };

  export default useTriviaQuery