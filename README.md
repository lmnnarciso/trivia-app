This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the necessary libraries:

```bash
yarn install
```

Second, run the local development:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Once running when you click the "BEGIN" button you can start the trivia.
When choosing an option you can confirm your answer by clicking the option and pressing "Enter" or clicking the "Confirm Answer" button will make you proceed to the next question. You can also go back to your previous answers to double check your answer and in case you might change your mind.

Once you've answered all questions you'll be to see your results and how you performed the trivia.

On the results page you can see a "Play Again?" button to be redirected to the homepage and play the trivia again.

Added additional form validation where the user cant proceed without answering the question first.


You can run E2E Test with Cypress by using the command: 
```bash
yarn cypress:open
```


For the Production build, run the following commands:
```bash
yarn build
yarn start
```

The "yarn build" might take a while to finish

For improvements:'
1. Add keyboard accessibility with arrow keys



