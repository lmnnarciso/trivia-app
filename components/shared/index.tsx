import styled from "styled-components";

const COLORS = {
  primary: "#5865f2",
  success: "#3ba55c",
  danger: "#ed4245",
};

interface ButtonStyle {
  color?: "primary" | "success" | "danger";
}

export const Button = styled.button<ButtonStyle>`
  padding: 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => {
    if (props.disabled) {
      return "gray";
    }
    if (props.color === undefined) {
      return COLORS.primary;
    }

    return COLORS[props.color];
  }};
`;

export const TriviaOptions = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 0.75rem;
    display: flex;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    background-color: #40444b;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;

    &:hover {
      background-color: #454950;
    }
  }

  input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: white;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid white;
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }

  input[type="radio"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding: 1.5rem;
  width: clamp(16rem, 90vw, 70rem);
  height: calc(100vh - 180px);
`;

export const TriviaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TriviaQuestionnaire = styled.div`
  width: 450px;
  flex-shrink: 0;
  background-color: #3c3f45;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ResultContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 5px;
  background-color: #3c3f45;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  min-width: min-content;
`;
