import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #2f3136;
    color: #fff;
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default MyApp;
